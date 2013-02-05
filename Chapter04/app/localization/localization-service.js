'use strict';

/*
 * An AngularJS Localization Service
 *
 * Written by Jim Lavin
 * http://codingsmackdown.tv
 *
 */

Application.Services.
    factory('localize', ['$http', '$rootScope', '$window', '$filter', '$route', function ($http, $rootScope, $window, $filter, $route) {
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
                // force a reload of the page
                $route.reload();
            },

            setLanguage: function(language) {
                localize.language = language;
                localize.initLocalizedResources();
            },

            initLocalizedResources: function() {
                // build the url to retrieve the localized resource file
                var url = '/i18n/resources-locale_' + localize.language + '.js';
                // request the resource file
                $http({ method: "GET", url: url, cache: false }).success(localize.successCallback).error(function() {
                    // the request failed set the url to the default resource file
                    var url = '/i18n/resources-locale_default.js';
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
                // return the value to the call
                return result;
            }
        };

        // return the local instance when called
        return localize;
    }]);