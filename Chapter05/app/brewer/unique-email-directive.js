'use strict';

/* Directives */


Application.Directives.
    directive('uniqueEmail', ['BrewerResource', function (BrewerResource) {
    return {
        require:'ngModel',
        link:function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                var value = BrewerResource.query({"Email":viewValue});

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
    };
}]);

