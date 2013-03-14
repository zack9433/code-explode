'use strict';

Application.Controllers.controller('home-controller', ['$scope', '$location', 'authenticate', 'localize', function($scope, $location, authenticate, localize) {
    $scope.currentBrewer = null;

    $scope.changeToEnglish = function() {
        localize.setLanguage('en-US');
    };

    $scope.changeToPigLatin = function() {
        localize.setLanguage('en-pl');
    };

    $scope.$on('USER_UPDATED', function() {
        $scope.currentBrewer = authenticate.currentBrewer;
    });

    $scope.isBrewerLoggedIn = function() {
        return authenticate.isBrewerLoggedIn();
    };
}]);