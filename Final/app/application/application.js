'use strict'

/**
* The application file bootstraps the angular app by  initializing the main module and 
* creating namespaces and moduled for controllers, filters, services, and directives. 
*/

var Application = Application || {};

Application.Constants = angular.module('brewEverywhere.constants', []);
Application.Services = angular.module('brewEverywhere.services', ['brewEverywhere.constants', 'mongolabResourceHttp']);
Application.Controllers = angular.module('brewEverywhere.controllers', ['brewEverywhere.constants']);
Application.Filters = angular.module('brewEverywhere.filters', []);
Application.Directives = angular.module('brewEverywhere.directives', ['brewEverywhere.services']);


angular.module('brewEverywhere', ['ui', 'ngGrid', 'mongolabResourceHttp', 'brewEverywhere.filters', 'brewEverywhere.services', 'brewEverywhere.directives', 'brewEverywhere.constants', 'brewEverywhere.controllers']).
  config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.
        when('/', {templateUrl:'home/home-partial.html'}).
        when('/register', {templateUrl:'brewer/register-partial.html'}).
        when('/adjuncts', {templateUrl:'adjuncts/adjunct-list-partial.html'}).
        when('/equipment', {templateUrl:'equipment/equipment-list-partial.html'}).
        when('/fermentables', {templateUrl:'fermentables/fermentables-list-partial.html'}).
        when('/hops', {templateUrl:'hops/hops-list-partial.html'}).
        when('/mashprofiles', {templateUrl:'mashprofile/mashprofile-list-partial.html'}).
        when('/recipes', {templateUrl:'recipe/recipe-list-partial.html'}).
        when('/styles', {templateUrl:'style/style-list-partial.html'}).
        when('/waterprofiles', {templateUrl:'waterprofile/waterprofile-list-partial.html'}).
        when('/yeast', {templateUrl:'yeast/yeast-list-partial.html'}).
        when('/myprofile', {templateUrl:'brewer/brewer-profile-partial.html'}).
        otherwise({templateUrl: 'error/error-partial.html'});
  }]);
