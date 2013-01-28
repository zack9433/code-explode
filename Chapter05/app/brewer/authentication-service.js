/**
 * Created with JetBrains WebStorm.
 * User: jim.lavin
 * Date: 12/10/12
 * Time: 8:46 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

/* Services */


Application.Services.factory('authenticate', ['$http', '$rootScope', '$window', 'BrewerResource', function ($http, $rootScope, $window, BrewerResource) {
    var authenticate = {
        // data members
        currentBrewer:null,

        // methods
        login:function (username, password) {
            BrewerResource.query({UserName:username}).then(function (brewers) {
                if (brewers.length === 0) {
                    $window.alert("Invalid user name");
                    return;
                }

                var brewer = brewers[0];

                var passwordhash = Sha1.hash(password + Date.parse(brewer.DateJoined));

                if (passwordhash !== brewer.Password) {
                    $window.alert("Invalid password.")
                    return;
                }

                authenticate.currentBrewer = brewer;
                $rootScope.$broadcast('USER_UPDATED');
            });
        },

        brewerLoggedIn:function () {
            if ((authenticate.currentBrewer !== null) && (authenticate.currentBrewer !== undefined)) {
                return true;
            }

            return false;
        },

        logout:function () {
            authenticate.currentBrewer = null;
            $rootScope.$broadcast('USER_UPDATED');
        }

    };

    return authenticate;
} ]);

