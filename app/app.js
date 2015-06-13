(function() {

    var app = angular.module('tilesApp', ['ngRoute', 'ngAnimate', 'app.directives.tilesRender']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'GridController',
                templateUrl: 'app/views/grid.html'
            })
            .otherwise( { redirectTo: '/' } );
    });

}());
