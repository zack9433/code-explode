'use strict';

Application.Services.factory('localize', ['$http', '$rootScope', '$window', '$filter', function($http, $rootScope, $window, $filter) {
    var localize = {
        // use the $window service to get the language of the user's browser
        language: $window.navigator.userLanguage || $window.navigator.language,
        // array to hold the localized resource string entries
        dictionary: [],
        // flag to indicate if the service hs loaded the resource file
        resourceFileLoaded: false,

        successCallback: function(data) {
            // store the returned array in the dictionary
            localize.dictionary = data.InfoItems;
            // set the flag that the resource are loaded
            localize.resourceFileLoaded = true;
            // broadcast that the file has been loaded
            $rootScope.$broadcast('localizeResourcesUpdates');
        },

        initLocalizedResources: function() {
            // build the url to retrieve the localized resource file
            var url = '/API/Chain/Dictionary/?locale=' + localize.language;

            // request the resource file
            $http({ method: "GET", url: url, cache: false }).success(localize.successCallback).error(function () {
                // the request failed set the url to the default resource file
                var url = '/API/Chain/Dictionary/?locale=default';
                // request the default resource file
                $http({ method: "GET", url: url, cache: false }).success(localize.successCallback);
            });
        },

        getLocalizedString: function(value) {
            // default the result to an empty string
            var result = '';

            // make sure the dictionary has valid data
            if ((localize.dictionary !== []) && (localize.dictionary.length > 0)) {
                // use the filter service to only return those entries which match the value
                // and only take the first result
                var entries = $filter('filter')(localize.dictionary, { Name: value });
                // walk returned values to find matching entry
                angular.forEach(entries, function (entry) {
                    // check to make sure we have a valid entry
                    if ((entry !== null) && (entry != undefined) && (entry.Name === value)) {
                        // set the result
                        result = entry.Value;
                    }
                });
            }
            //console.log(value + ': ' + result);
            // return the value to the call
            return result;
        }
    };

    // force the load of the resource file
    // localize.initLocalizedResources();

    // return the local instance when called
    return localize;
}]);