'use strict';

Application.Controllers.controller('equipment-list-controller', ['$scope', '$location', 'EquipmentResource', function($scope, $location, EquipmentResource){
    $scope.equipment = [];
    $scope.gridOptions = {
        data: 'equipment',
        multiSelect: false,
        columnDefs: [
            {field:'Name', displayName:'Name', width: 200},
            {field:'BoilSize', displayName:'Boil Size', width: 100},
            {field:'BatchSize', displayName:'Batch Size', width: 100},
            {field:'TUNVolume', displayName:'TUN Volume', width: 100},
            {field:'TUNWeight', displayName:'TUN Weight', width: 100},
            {field:'TUNSpecificHeat', displayName:'TUN Specific Heat', width: 100},
            {field:'TopUpWater', displayName:'Top Up Water', width: 100},
            {field:'TrubChillerLoss', displayName:'Trub Chiller Loss', width: 100},
            {field:'EvapRate', displayName:'Evap Rate', width: 100},
            {field:'BoilTime', displayName:'Boil Time', width: 100},
            {field:'CalcBoilTime', displayName:'Calc Boil Time', width: 100},
            {field:'LauterDeadspace', displayName:'Lauter Deadspace', width: 100},
            {field:'TopUpKettle', displayName:'Top Up Kettle', width: 100},
            {field:'HopUtilization', displayName:'Hop Utilization', width: 100},
            {field:'Notes', displayName:'Notes', width: '*'}
        ]
    };

    $scope.init = function() {
        EquipmentResource.query({}, {sort: {Name: 1}}).then(function(equipment){
            $scope.equipment = equipment;
        });
    };

    $scope.init();

}]);