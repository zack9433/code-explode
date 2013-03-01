'use strict';

Application.Controllers.controller('home-controller', ['$scope', 'localize', function($scope, localize) {

    $scope.changeToEnglish = function() {
        localize.setLanguage('en-US');
    };

    $scope.changeToPigLatin = function() {
        localize.setLanguage('en-pl');
    };

    $scope.isBrewerLoggedIn = function() {
        return true;
    };
}]);