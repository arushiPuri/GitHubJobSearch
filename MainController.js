var app = angular.module('githubJobApp');

app.controller('MainController', function($scope, $http){
  $scope.jobDescription = '';
  $scope.jobLocation = '';
  $scope.jobFullTime = false;
  $scope.jobData = function(){
    $scope.error = '';
    var url = 'http://127.0.0.1:5000/jobs?' + 'description=' + $scope.jobDescription + '&location=' + $scope.jobLocation + ($scope.jobFullTime ? '&full_time=' + $scope.jobFullTime : '');
    $http.get(url).then(
      function(response){
        console.log(response.data);
        if(!response.data.length){
          $scope.error = "Job Not Found" + ($scope.jobLocation ? (" Near " + $scope.jobLocation) : '');
        }
        $scope.jobDetails = response.data;
      },
      function(response){
        console.log("Error " + response.status);
      });
  };
});
