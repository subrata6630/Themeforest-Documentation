var ngCip = angular.module("ngCip", ["ngRoute"]);
ngCip.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/start.html"
        })
        .when("/documenter_cover", {
            templateUrl: "templates/start.html"
        })
        .when("/html_structure", {
            templateUrl: "templates/html_structure.html"
        })
        .when("/css_structure", {
            templateUrl: "templates/css_structure.html"
        })
        .when("/javascript", {
            templateUrl: "templates/javascript.html"
        })
        .when("/template_features", {
            templateUrl: "templates/template_features.html"
        })
        .when("/total_files", {
            templateUrl: "templates/total_files.html"
        })
        .when("/source_credits", {
            templateUrl: "templates/source_credits.html"
        })
        .when("/support", {
            templateUrl: "templates/support.html"
        })
        .otherwise({
            redirectTo: '/'
        });
});
