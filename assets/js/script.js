var ngCip = angular.module("ngCip", ["ngRoute"]);
ngCip.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/start.html"
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});
