'use strict';

Application.Controllers.controller('hops-list-controller', ['$scope', '$location', 'HopResource', function($scope, $location, HopResource){
    $scope.hops = [];
    $scope.gridOptions = {
        data: 'hops',
        multiSelect: false,
        columnDefs: [
            {field:'Name', displayName:'Name', width: 200},
            {field:'Type', displayName:'Type', width: 100},
            {field:'Form', displayName:'Form', width: 100},
            {field:'Use', displayName:'Use', width: 100},
            {field:'Amount', displayName:'Amount', width: 100},
            {field:'Time', displayName:'Time', width: 100},
            {field:'Alpha', displayName:'Alpha', width: 100},
            {field:'Beta', displayName:'Beta', width: 100},
            {field:'HSI', displayName:'HSI', width: 100},
            {field:'Humulene', displayName:'Humulene', width: 100},
            {field:'Caryophyllene', displayName:'Caryophyllene', width: 100},
            {field:'Cohumulone', displayName:'Cohumulone', width: 100},
            {field:'Myrcene', displayName:'Myrcene', width: 100},
            {field:'Origin', displayName:'Origin', width: 100},
            {field:'Substitutes', displayName:'Substitutes', width: 300},
            {field:'Notes', displayName:'Notes', width: 300}
        ]
    };

    $scope.init = function() {
        HopResource.query({}, {sort: {Type: 1, Name: 1}}).then(function(hops){
            $scope.hops = hops;
        });
    };

    $scope.init();

}]);