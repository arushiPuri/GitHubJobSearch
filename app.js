//An app is created called 'githubJobApp'
var app = angular.module('githubJobApp',["ngRoute", "ngSanitize"]);
//A controller is created called 'ctrl'

app.config(function($routeProvider) {
    $routeProvider
    .when("/jobs", {
        templateUrl : "jobs.htm",
        controller : "MainController"
    })
    .when("/jobs/:id", {
        templateUrl: "jobId.htm",
        controller : "JobController"
    })
    .otherwise( {redirectTo: "/jobs"});
});
