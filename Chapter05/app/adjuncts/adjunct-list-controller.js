'use strict';

Application.Controllers.controller('adjunct-list-controller', ['$scope', '$location', 'AdjunctResource', function($scope, $location, AdjunctResource){
    $scope.adjuncts = [];
    $scope.gridOptions = {
        data: 'adjuncts',
        multiSelect: false,
        columnDefs: [
            {field:'Name', displayName:'Name', width: 200},
            {field:'Type', displayName:'Type', width: 100},
            {field:'Use', displayName:'Use', width: 100},
            {field:'UseFor', displayName:'For', width: 100},
            {field:'Notes', displayName:'Notes', width: '*'}
        ]
    };

    $scope.init = function() {
        AdjunctResource.query({}, {sort: {Type: 1, Name: 1}}).then(function(adjuncts){
            $scope.adjuncts = adjuncts;
        });
    };

    $scope.init();

}]);