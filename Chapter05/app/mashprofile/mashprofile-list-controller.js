'use strict';

Application.Controllers.controller('mashprofile-list-controller', ['$scope', '$location', 'MashProfileResource', function($scope, $location, MashProfileResource){
    $scope.mashprofiles = [];
    $scope.gridOptions = {
        data: 'mashprofiles',
        multiSelect: false,
        columnDefs: [
            {field:'Name', displayName:'Name', width: 200},
            {field:'GrainTemp', displayName:'Grain Temp', width: 100},
            {field:'SpargeTemp', displayName:'Sparge Temp', width: 100},
            {field:'PH', displayName:'PH', width: 100},
            {field:'TUNTemp', displayName:'TUN Temp', width: 100},
            {field:'TUNWeight', displayName:'TUN Weight', width: 100},
            {field:'TUNSpecificHeat', displayName:'TUN Specific Heat', width: 100},
            {field:'EquipAdjust', displayName:'Equipment Adjust', width: 100},
            {field:'Notes', displayName:'Notes', width: '*'}
        ]
    };

    $scope.init = function() {
        MashProfileResource.query({}, {sort: {Type: 1, Name: 1}}).then(function(mashprofiles){
            $scope.mashprofiles = mashprofiles;
        });
    };

    $scope.init();

}]);