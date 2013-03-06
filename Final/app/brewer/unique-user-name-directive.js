'use strict';

/* Directives */


Application.Directives.
    directive('uniqueUsername', ['BrewerResource', function (BrewerResource) {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {

                var validator = function (value) {
                    BrewerResource.query({"UserName": value}).then(function (result) {
                        if (result.length === 0) {
                            // it is valid
                            ctrl.$setValidity('uniqueUserName', true);
                            return value;
                        } else {
                            // it is invalid, return undefined (no model update)
                            ctrl.$setValidity('uniqueUserName', false);
                            return undefined;
                        }

                    });
                }

                ctrl.$formatters.push(validator);
                ctrl.$parsers.push(validator);

                attrs.$observe('uniqueUsername', function() {
                    validator(ctrl.$viewValue);
                });
            }
        };
    }]);
