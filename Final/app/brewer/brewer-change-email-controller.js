'use strict';

Application.Controllers.controller('brewer-change-email-controller', ['$scope', '$location', 'BrewerResource', 'authenticate', function ($scope, $location, BrewerResource, authenticate) {
    $scope.brewer = null;
    $scope.errorMessages = [];

    $scope.errorsExist = function () {
        var result = false;

        $scope.errorMessages = [];

        if($scope.registerForm.Email.$error.required && !$scope.registerForm.LastName.$pristine) {
            result = true;
            $scope.errorMessages.push('Email is required.')
        }
        if($scope.registerForm.Email.$error.uniqueEmail && !$scope.registerForm.Email.$pristine) {
            result = true;
            $scope.errorMessages.push('That Email already has an account.')
        }

        return result;
    };

    $scope.changeEmail = function () {
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