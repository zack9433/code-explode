'use strict';

Application.Controllers.controller('style-list-controller', ['$scope', '$location', 'StyleResource', function($scope, $location, StyleResource){
    $scope.styles = [];
    $scope.gridOptions = {
        data: 'styles',
        multiSelect: false,
        columnDefs: [
            {field:'Name', displayName:'Name', width: 200},
            {field:'Category', displayName:'Category', width: 100},
            {field:'CategoryNumber', displayName:'Category Number', width: 100},
            {field:'StyleLetter', displayName:'Style Letter', width: 100},
            {field:'StyleGuide', displayName:'Style Guide', width: 100},
            {field:'Type', displayName:'Type', width: 100},
            {field:'OGMin', displayName:'OG Min', width: 100},
            {field:'OGMax', displayName:'OG Max', width: 100},
            {field:'FGMin', displayName:'FG Min', width: 100},
            {field:'FGMax', displayName:'FG Max', width: 100},
            {field:'IBUMin', displayName:'IBU Min', width: 100},
            {field:'IBUMax', displayName:'IBU Max', width: 100},
            {field:'ColorMin', displayName:'Color Min', width: 100},
            {field:'ColorMax', displayName:'Color Max', width: 100},
            {field:'CarbMin', displayName:'Carb Min', width: 100},
            {field:'CarbMax', displayName:'Carb Max', width: 100},
            {field:'ABVMin', displayName:'ABV Min', width: 100},
            {field:'ABVMax', displayName:'ABV Max', width: 100},
            {field:'Aroma', displayName:'Aroma', width: 300},
            {field:'Appearance', displayName:'Appearance', width: 300},
            {field:'Flavor', displayName:'Flavor', width: 300},
            {field:'Mouthfeel', displayName:'Mouthfeel', width: 300},
            {field:'OverallImpression', displayName:'Overall Impression', width: 300},
            {field:'Notes', displayName:'Notes', width: 300},
            {field:'Profile', displayName:'Profile', width: 300},
            {field:'Ingredients', displayName:'Ingredients', width: 300},
            {field:'Examples', displayName:'Examples', width: 300}
        ]
    };

    $scope.init = function() {
        StyleResource.query({}, {sort: {Type: 1, Name: 1}}).then(function(styles){
            $scope.styles = styles;
        });
    };

    $scope.init();

}]);