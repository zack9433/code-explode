'use strict'

/**
* The application file bootstraps the angular app by  initializing the main module and 
* creating namespaces and moduled for controllers, filters, services, and directives. 
*/

var Application = Application || {};

Application.Constants = angular.module('brewEverywhere.constants', []);
Application.Services = angular.module('brewEverywhere.services', ['brewEverywhere.constants']);
Application.Controllers = angular.module('brewEverywhere.controllers', ['brewEverywhere.constants']);
Application.Filters = angular.module('brewEverywhere.filters', []);
Application.Directives = angular.module('brewEverywhere.directives', ['brewEverywhere.services']);


angular.module('brewEverywhere', ['brewEverywhere.filters', 'brewEverywhere.services', 'brewEverywhere.directives', 'brewEverywhere.constants', 'brewEverywhere.controllers']).
  config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.
        when('/', {templateUrl:'home/home-partial.html'}).
        otherwise({templateUrl: '/'});
  }]);
