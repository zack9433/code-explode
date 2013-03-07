'use strict';

Application.Controllers.controller('brewer-profile-controller', ['$scope', '$location', 'BrewerResource', 'authenticate', function ($scope, $location, BrewerResource, authenticate) {
    $scope.brewer = null;
    $scope.errorMessages = [];

    $scope.errorsExist = function () {
        var result = false;

        $scope.errorMessages = [];

        if($scope.registerForm.FirstName.$error.required && !$scope.registerForm.FirstName.$pristine) {
            result = true;
            $scope.errorMessages.push('First Name is required.')
        }
        if($scope.registerForm.LastName.$error.required && !$scope.registerForm.LastName.$pristine) {
            result = true;
            $scope.errorMessages.push('Last Name is required.')
        }

        return result;
    };

    $scope.changeEmail = function() {
        $location.path('/myemail');
    }

    $scope.changePassword = function() {
        $location.path('/mypassword');
    }

    $scope.register = function () {
        var brewer = new BrewerResource($scope.brewer);

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