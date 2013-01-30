'use strict';

Application.Controllers.controller('yeast-list-controller', ['$scope', '$location', 'YeastResource', function($scope, $location, YeastResource){
    $scope.yeast = [];
    $scope.gridOptions = {
        data: 'yeast',
        multiSelect: false,
        columnDefs: [
            {field:'Name', displayName:'Name', width: 200},
            {field:'Type', displayName:'Type', width: 100},
            {field:'Form', displayName:'Form', width: 100},
            {field:'Amount', displayName:'Amount', width: 100},
            {field:'AmountIsWeight', displayName:'AmountIsWeight', width: 100},
            {field:'Laboratory', displayName:'Laboratory', width: 100},
            {field:'ProductID', displayName:'ProductID', width: 100},
            {field:'MinTemperature', displayName:'Min Temperature', width: 100},
            {field:'MaxTemperature', displayName:'Max Temperature', width: 100},
            {field:'Flocculation', displayName:'Flocculation', width: 100},
            {field:'Attenuation', displayName:'Attenuation', width: 100},
            {field:'TimesCultured', displayName:'Times Cultured', width: 100},
            {field:'MaxReuse', displayName:'Max Reuse', width: 100},
            {field:'AddToSecondary', displayName:'Add To Secondary', width: 100},
            {field:'BestFor', displayName:'BestFor', width: 300},
            {field:'Notes', displayName:'Notes', width: 300}
        ]
    };

    $scope.init = function() {
        YeastResource.query({}, {sort: {Type: 1, Name: 1}}).then(function(yeast){
            $scope.yeast = yeast;
        });
    };

    $scope.init();

}]);