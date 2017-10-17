angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController',
            controller: 'formController'
        })

.when('/forms', {
        templateUrl: 'views/form.html',
        controller: 'formController',
        controller: 'NerdController'
    });

    $locationProvider.html5Mode(true);

}]);
