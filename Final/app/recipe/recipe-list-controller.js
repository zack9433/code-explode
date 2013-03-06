'use strict';

Application.Controllers.controller('recipe-list-controller', ['$scope', '$location', 'RecipeResource', function($scope, $location, RecipeResource){
    $scope.recipes = [];
    $scope.gridOptions = {
        data: 'recipes',
        multiSelect: false,
        columnDefs: [
            {field:'Date', displayName:'Date', width: 100},
            {field:'Name', displayName:'Name', width: 200},
            {field:'Type', displayName:'Type', width: 100},
            {field:'StyleId', displayName:'Style Id', width: 100},
            {field:'BrewerName', displayName:'Brewer Name', width: 100},
            {field:'BatchSize', displayName:'Batch Size', width: 100},
            {field:'BoilSize', displayName:'Boil Size', width: 100},
            {field:'BoilTime', displayName:'Boil Time', width: 100},
            {field:'BrewHouseEfficiency', displayName:'Brew House Efficiency', width: 100},
            {field:'OriginalGravity', displayName:'Original Gravity', width: 100},
            {field:'FinalGravity', displayName:'Final Gravity', width: 100},
            {field:'FermentationStages', displayName:'Fermentation Stages', width: 100},
            {field:'PrimaryAge', displayName:'Primary Age', width: 100},
            {field:'PrimaryTemp', displayName:'Primary Temp', width: 100},
            {field:'SecondaryAge', displayName:'Secondary Age', width: 100},
            {field:'SecondaryTemp', displayName:'Secondary Temp', width: 100},
            {field:'TertiaryAge', displayName:'TertiaryAge', width: 100},
            {field:'TertiaryTemp', displayName:'Tertiary Temp', width: 100},
            {field:'ConditioningAge', displayName:'Conditioning Age', width: 100},
            {field:'ConditioningAgeTemp', displayName:'Conditioning Age Temp', width: 100},
            {field:'Carbonation', displayName:'Carbonation', width: 100},
            {field:'ForcedCarbonation', displayName:'Forced Carbonation', width: 100},
            {field:'PrimingSugarName', displayName:'Priming Sugar Name', width: 100},
            {field:'CarbonationTemp', displayName:'Carbonation Temp', width: 100},
            {field:'PrimingSugarEquiv', displayName:'Priming Sugar Equiv', width: 100},
            {field:'KegPrimingFactor', displayName:'Keg Priming Factor', width: 100},
            {field:'TasteRating', displayName:'Taste Rating', width: 100},
            {field:'TasteNotes', displayName:'Taste Notes', width: 300},
            {field:'Notes', displayName:'Notes', width: 300}
        ]
    };

    $scope.init = function() {
        RecipeResource.query({}, {sort: {Type: 1, Name: 1}}).then(function(recipes){
            $scope.recipes = recipes;
        });
    };

    $scope.init();

}]);