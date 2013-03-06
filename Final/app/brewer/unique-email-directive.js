'use strict';

/* Directives */


Application.Directives.
    directive('uniqueEmail', ['BrewerResource', function (BrewerResource) {
    return {
        require:'ngModel',
        link:function (scope, elm, attrs, ctrl) {

            function checkForUniqueUserName(viewValue) {
                BrewerResource.query({"Email":viewValue}).then(function(value){
                    if (value.length === 0) {
                        // it is valid
                        ctrl.$setValidity('uniqueEmail', true);
                        return viewValue;
                    } else {
                        // it is invalid, return undefined (no model update)
                        ctrl.$setValidity('uniqueEmail', false);
                        return undefined;
                    }
                });
            }

            scope.$watch(attrs.uniqueEmail, function() {
                ctrl.$setValidity('uniqueEmail', checkForUniqueUserName(scope.$eval(attrs.uniqueEmail)));
            });

            ctrl.$parsers.push(function() {
                return checkForUniqueUserName(scope.$eval(attrs.uniqueEmail));
            });

            ctrl.$formatters.push(function() {
                return checkForUniqueUserName(scope.$eval(attrs.uniqueEmail));
            });
        }
    };
}]);

