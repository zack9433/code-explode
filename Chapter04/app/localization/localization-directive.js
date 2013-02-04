'use strict';

Application.Directives.directive('i18n', ['localize', function (localize) {
    return {
        restrict: "EAC",
        link: function (scope, elm, attrs) {
            attrs.$observe('i18n', function (value) {
                var values = value.split('|');
                if (values.length >= 1) {
                    // construct the tag to insert into the element
                    var tag = localize.getLocalizedString(values[0]);
                    // update the element only if data was returned
                    if ((tag !== null) && (tag !== undefined) && (tag !== '')) {
                        if (values.length > 1) {
                            for (var index = 1; index < values.length; index++) {
                                var target = '{' + (index - 1) + '}';
                                tag = tag.replace(target, values[index]);
                            }
                        }
                        // insert the text into the element
                        elm.text(tag);
                    };
                }
            });
        }
    };
}]);

Application.Directives.directive('i18nPassthrough', ['localize', function (localize) {
    return {
        restrict: "EAC",
        link: function (scope, elm, attrs) {
            attrs.$observe('i18nPassthrough', function (value) {
                var values = value.split('|');
                if (values.length >= 1) {
                    // construct the tag to insert into the element
                    var tag = localize.getLocalizedString(values[0]);
                    // update the element only if data was returned
                    if ((tag !== null) && (tag !== undefined) && (tag !== '')) {
                        if (values.length > 1) {
                            for (var index = 1; index < values.length; index++) {
                                var target = '{' + (index - 1) + '}';
                                tag = tag.replace(target, values[index]);
                            }
                        }
                        // insert the text into the element
                        elm.text(tag);
                    } else {
                        // use the passed value is nothing was returned
                        elm.text(value);
                    };
                }
            });
        }
    };
}]);

Application.Directives.directive('i18nAttr', ['localize', function (localize) {
    return {
        restrict: "EAC",
        link: function (scope, elm, attrs) {
            attrs.$observe('i18nAttr', function (value) {
                var values = value.split('|');
                // construct the tag to insert into the element
                var tag = localize.getLocalizedString(values[0]);
                // update the element only if data was returned
                if ((tag !== null) && (tag !== undefined) && (tag !== '')) {
                    // insert the text into the element
                    elm.attr(values[1], tag);
                };
            });
        }
    };
}]);

