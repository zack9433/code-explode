describe('adjunct list controller', function() {
    var scope;
    var location;
    var adjunctResource;
    var controller;
    var q;
    var deferred;

    beforeEach(module('brewEverywhere.controllers'));

    beforeEach(function () {
        adjunctResource = {
            query: function() {
                deferred = q.defer();
                return deferred.promise;
            }
        };
    });

    beforeEach(inject(function ($injector) {
        var rootScope = $injector.get('$rootScope');
        var $controller = $injector.get('$controller');
        location = $injector.get('$location');
        scope = rootScope.$new();
        controller = $controller('adjunct-list-controller', { $scope: scope, $location: location, AdjunctResource: adjunctResource });

    }));

});
