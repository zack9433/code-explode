'use strict';

Application.Controllers.controller('fermentables-list-controller', ['$scope', '$location', 'FermentableResource', function($scope, $location, FermentableResource){
    $scope.fermentables = [];
    $scope.gridOptions = {
        data: 'fermentables',
        multiSelect: false,
        columnDefs: [
            {field:'Name', displayName:'Name', width: 200},
            {field:'Type', displayName:'Type', width: 100},
            {field:'Amount', displayName:'Amount', width: 100},
            {field:'Yield', displayName:'Yield', width: 100},
            {field:'Color', displayName:'Color', width: 100},
            {field:'AddAfterBoil', displayName:'Add After Boil', width: 100},
            {field:'Origin', displayName:'Origin', width: 100},
            {field:'Supplier', displayName:'Supplier', width: 100},
            {field:'CoarseFineDiff', displayName:'Coarse Fine Diff', width: 100},
            {field:'Moisture', displayName:'Moisture', width: 100},
            {field:'DiastaticPower', displayName:'Diastatic Power', width: 100},
            {field:'Protein', displayName:'Protein', width: 100},
            {field:'MaxInBatch', displayName:'Max In Batch', width: 100},
            {field:'RecommendMash', displayName:'Recommend Mash', width: 100},
            {field:'IBUGalPerPound', displayName:'IBU Gal Per Pound', width: 100},
            {field:'DisplayAmount', displayName:'Display Amount', width: 100},
            {field:'Potential', displayName:'Potential', width: 100},
            {field:'DisplayColor', displayName:'Display Color', width: 100},
            {field:'ExtractSubstitute', displayName:'Extract Substitute', width: 300},
            {field:'Notes', displayName:'Notes', width: 300}
        ]
    };

    $scope.init = function() {
        FermentableResource.query({}, {sort: {Type: 1, Name: 1}}).then(function(fermentables){
            $scope.fermentables = fermentables;
        });
    };

    $scope.init();

}]);