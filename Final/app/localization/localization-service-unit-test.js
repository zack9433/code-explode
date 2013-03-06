describe('localization service', function () {
    var service;
    var rootScope;
    var $httpBackend;

    beforeEach(module('brewEverywhere.services'));

    beforeEach(inject(function ($injector) {
        service = $injector.get('localize');
        rootScope = $injector.get('$rootScope');
        $httpBackend = $injector.get('$httpBackend');

        $httpBackend.whenGET('/i18n/resources-locale_en-pl.js').respond(400, { "Message": "It's broke" });
    }));

    it('should request language resource file with right parameters', function () {
        $httpBackend.expectGET('/i18n/resources-locale_en-US.js').respond([
            {
                "key":"_HomeTitle_",
                "value":"Welcome to Brew Everywhere!",
                "description":"Home page greeting text"
            },
            {
                "key":"_HomeText_",
                "value":"The web site that allows you to manage all your brewing in one place. Brew Everywhere allows you to access your recipes, equipment, brewing inventory and brewing calendar from anywhere on any device.",
                "description":"Home page introductory text"
            },
            {
                "key":"_HomeSlogan_",
                "value":"We'd like to think \"You don't need an app for that!\"",
                "description":"Home page slogan text"
            },
            {
                "key":"_TopRecipeTitle_",
                "value":"Highest Rated Recipes",
                "description":"Top Rated Recipe Title"
            },
            {
                "key":"_ViewDetails_Button_Title_",
                "value":"View details &raquo;",
                "description":"View Details Button Title Text"
            },
            {
                "key":"_TopContributorTitle_",
                "value":"Highest Contributors",
                "description":"Top Contributors Title text"
            },
            {
                "key":"_WhatsFermentingTitle_",
                "value":"What's Fermenting",
                "description":"What's Fermenting section Title text"
            },
            {
                "key":"_MyRecipesTitle_",
                "value":"My Recipes",
                "description":"My Recipes Section Title text"
            },
            {
                "key":"_MyCalendarTitle_",
                "value":"My Calender",
                "description":"My Calendar Section Title text"
            },
            {
                "key":"_MyInventoryTitle_",
                "value":"My Inventory",
                "description":"My Inventory Section Title text"
            }
        ]);

        service.setLanguage('en-US');

        $httpBackend.flush();
    });

    it('should request default resource file on request error', function () {
        $httpBackend.expectGET('/i18n/resources-locale_default.js').respond([
            {
                "key":"_HomeTitle_",
                "value":"Welcome to Brew Everywhere!",
                "description":"Home page greeting text"
            },
            {
                "key":"_HomeText_",
                "value":"The web site that allows you to manage all your brewing in one place. Brew Everywhere allows you to access your recipes, equipment, brewing inventory and brewing calendar from anywhere on any device.",
                "description":"Home page introductory text"
            },
            {
                "key":"_HomeSlogan_",
                "value":"We'd like to think \"You don't need an app for that!\"",
                "description":"Home page slogan text"
            },
            {
                "key":"_TopRecipeTitle_",
                "value":"Highest Rated Recipes",
                "description":"Top Rated Recipe Title"
            },
            {
                "key":"_ViewDetails_Button_Title_",
                "value":"View details &raquo;",
                "description":"View Details Button Title Text"
            },
            {
                "key":"_TopContributorTitle_",
                "value":"Highest Contributors",
                "description":"Top Contributors Title text"
            },
            {
                "key":"_WhatsFermentingTitle_",
                "value":"What's Fermenting",
                "description":"What's Fermenting section Title text"
            },
            {
                "key":"_MyRecipesTitle_",
                "value":"My Recipes",
                "description":"My Recipes Section Title text"
            },
            {
                "key":"_MyCalendarTitle_",
                "value":"My Calender",
                "description":"My Calendar Section Title text"
            },
            {
                "key":"_MyInventoryTitle_",
                "value":"My Inventory",
                "description":"My Inventory Section Title text"
            }
        ]);

        service.setLanguage('en-pl');

        $httpBackend.flush();
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});