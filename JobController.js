var app = angular.module('githubJobApp');

app.controller('JobController', function($scope, $routeParams, $http){
  var jobInternalUrl = function(){
    var url = 'http://127.0.0.1:5000/jobs/' + $routeParams.id;
    $http.get(url).then(
      function(response){
        console.log(response.data);
        $scope.jobDetails = response.data;
      },
      function(response){
        console.log("Error " + response.status);
      });
  }
  jobInternalUrl();
});
