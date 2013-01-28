'use strict';

Application.Controllers.controller('home-controller', ['$scope', '$location', 'authenticate', function($scope, $location, authenticate) {
    $scope.currentBrewer = null;

    $scope.$on('USER_UPDATED', function() {
        $scope.currentBrewer = authenticate.currentBrewer;
    });

    $scope.brewerLoggedIn = function() {
        return authenticate.brewerLoggedIn();
    };
}]);