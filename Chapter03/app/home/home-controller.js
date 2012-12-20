'use strict';

Application.Controllers.controller('home-controller', ['$scope', '$location', function($scope, $location) {
    $scope.currentBrewer = null;

    $scope.brewerLoggedIn = function() {
        return false;
    };
}]);