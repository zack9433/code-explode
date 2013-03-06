'use strict';

Application.Controllers.controller('waterprofile-list-controller', ['$scope', '$location', 'WaterProfileResource', function($scope, $location, WaterProfileResource){
    $scope.waterprofiles = [];
    $scope.gridOptions = {
        data: 'waterprofiles',
        multiSelect: false,
        columnDefs: [
            {field:'Name', displayName:'Name', width: 200},
            {field:'Amount', displayName:'Amount', width: 100},
            {field:'Calcium', displayName:'Calcium', width: 100},
            {field:'Bicarbonate', displayName:'Bicarbonate', width: 100},
            {field:'Sulfate', displayName:'Sulfate', width: 100},
            {field:'Chloride', displayName:'Chloride', width: 100},
            {field:'Sodium', displayName:'Sodium', width: 100},
            {field:'Magnesium', displayName:'Magnesium', width: 100},
            {field:'PH', displayName:'PH', width: 100},
            {field:'Notes', displayName:'Notes', width: 300}
        ]
    };

    $scope.init = function() {
        WaterProfileResource.query({}, {sort: {Type: 1, Name: 1}}).then(function(waterprofiles){
            $scope.waterprofiles = waterprofiles;
        });
    };

    $scope.init();

}]);