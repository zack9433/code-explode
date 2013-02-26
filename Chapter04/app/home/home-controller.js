'use strict';

Application.Controllers.controller('home-controller', ['$scope', function($scope) {

    $scope.isBrewerLoggedIn = function() {
        return true;
    };
}]);