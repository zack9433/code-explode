'use strict';

Application.Controllers.controller('brewer-change-password-controller', ['$scope', '$location', 'BrewerResource', 'authenticate', function ($scope, $location, BrewerResource, authenticate) {
    $scope.brewer = null;
    $scope.password = "";
    $scope.confirmpassword = "";
    $scope.errorMessages = [];

    $scope.errorsExist = function () {
        var result = false;
        $scope.errorMessages = [];

        if($scope.registerForm.Password.$error.equal && !$scope.registerForm.Password.$pristine) {
            result = true;
            $scope.errorMessages.push('Passwords do not match.')
        }

        return result;
    };

    $scope.changePassword = function () {
        var brewer = new BrewerResource($scope.brewer);

        brewer.Password = authenticate.hashPassword($scope.password, brewer.DateJoined.valueOf());

        brewer.$save(function (brewer) {
            $location.path('/');
        });
    };

    $scope.init = function() {
        if(!authenticate.isBrewerLoggedIn()) {
            $location.path('/');
        }

        $scope.brewer = authenticate.currentBrewer;
    };

    $scope.init();
}]);