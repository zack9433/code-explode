'use strict';

Application.Controllers.controller('register-controller', ['$scope', '$location', 'BrewerResource', 'authenticate', function($scope, $location, BrewerResource, authenticate){
    $scope.brewer = new breweverywhere.Brewer();
    $scope.password = "";
    $scope.confirmpassword = "";
    $scope.errorsExist = false;
    $scope.errorMessages = [];

    $scope.passwordsMatch = function() {
        var result = false;

        if (($scope.password !== "")&& ($scope.confirmpassword !== "") && ($scope.password === $scope.confirmpassword)) {
            result = true;
        }

        return result;
    };

    $scope.register = function() {
        $scope.errorsExist = false;
        $scope.errorMessages = [];

        BrewerResource.query({UserName: $scope.brewer.UserName}).then(function(brewers){
            if(brewers.length != 0) {
                $scope.errorsExists = true;
                $scope.errorMessages.push("Dang! Someone already snagged that user name.");
                return;
            }

            BrewerResource.query({Email: $scope.brewer.Email}).then(function(brewers){
                if(brewers.length != 0) {
                    $scope.errorsExists = true;
                    $scope.errorMessages.push("Looks like someone with that email already exists in our system.");
                    return;
                }

                if(!$scope.passwordsMatch()) {
                    $scope.errorsExists = true;
                    $scope.errorMessages.push("Oops! Your passwords don't match.");
                    return;
                }

                var brewer = new BrewerResource($scope.brewer);

                brewer.DateJoined = new Date();

                brewer.Password = authenticate.hashPassword($scope.password, brewer.DateJoined.valueOf());

                brewer.$save(function(brewer){
                    $location.path('/');
                });
            });
        });
    };
}]);