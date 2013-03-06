'use strict';

Application.Controllers.controller('register-controller', ['$scope', '$location', 'BrewerResource', 'authenticate', function ($scope, $location, BrewerResource, authenticate) {
    $scope.brewer = new breweverywhere.Brewer();
    $scope.password = "";
    $scope.confirmpassword = "";
    $scope.errorMessages = [];

    $scope.errorsExist = function () {
        var result = false;
        $scope.errorMessages = [];

        if($scope.registerForm.UserName.$error.uniqueUserName && !$scope.registerForm.UserName.$pristine) {
            result = true;
            $scope.errorMessages.push('That user name is already in use.')
        }
        if($scope.registerForm.UserName.$error.required && !$scope.registerForm.UserName.$pristine) {
            result = true;
            $scope.errorMessages.push('User Name is required.')
        }
        if($scope.registerForm.FirstName.$error.required && !$scope.registerForm.FirstName.$pristine) {
            result = true;
            $scope.errorMessages.push('First Name is required.')
        }
        if($scope.registerForm.LastName.$error.required && !$scope.registerForm.LastName.$pristine) {
            result = true;
            $scope.errorMessages.push('Last Name is required.')
        }
        if($scope.registerForm.Email.$error.uniqueEmail && !$scope.registerForm.Email.$pristine) {
            result = true;
            $scope.errorMessages.push('That Email already has an account.')
        }
        if($scope.registerForm.Password.$error.equal && !$scope.registerForm.Email.$pristine) {
            result = true;
            $scope.errorMessages.push('Passwords does not match.')
        }

        return result;
    };

    $scope.register = function () {
        var brewer = new BrewerResource($scope.brewer);

        brewer.DateJoined = new Date();

        brewer.Password = authenticate.hashPassword($scope.password, brewer.DateJoined.valueOf());

        brewer.$save(function (brewer) {
            $location.path('/');
        });
    };
}]);