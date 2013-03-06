'use strict';

/* Directives */


Application.Directives.
    directive('uniqueEmail', ['BrewerResource', function (BrewerResource) {
    return {
        require:'ngModel',
        link:function (scope, elm, attrs, ctrl) {

            function checkForEMail(viewValue) {
                BrewerResource.query({"Email":viewValue}).then(function(result){
                    if (result.length === 0) {
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

            ctrl.$parsers.push(function(viewValue) {
                return checkForEMail(viewValue);
            });

        }
    };
}]);

