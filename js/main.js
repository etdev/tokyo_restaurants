var baseUrl = 'http://trapi.etdev.me/v1/';
//var baseUrl = 'http://localhost:4444/v1/';

var tokyoRestaurants = angular.module('tokyoRestaurants', ['restangular', 'ngRoute']);

// define directives
require("./directives/config")(tokyoRestaurants);

tokyoRestaurants.config(function($routeProvider, RestangularProvider) {
$routeProvider.
  when('/', {
    controller: HomeListCtrl,
    templateUrl: 'templates/home/list.html'
  }).when('/areas/:id', {
    controller: AreasShowCtrl,
    templateUrl: 'templates/areas/show.html'
  });

  RestangularProvider.setBaseUrl(baseUrl);
});

function HomeListCtrl($scope, Restangular) {
   $scope.loading = "Loading...";
   Restangular.all("areas").getList().then(function(areas) {
     $scope.areas = areas;
     var firstArea = areas[0];
     var restaurants = Restangular.all("restaurants").getList();
   }).finally(function() {
     $scope.loading = "Finished loading";
   });
}

function AreasShowCtrl($scope, Restangular) {
  $scope.loading = "Loading...";
  Restangular.one("areas", $scope.$id).get().then(function(area) {
    debugger;
  });
  //$scope.area = Restangular.one("areas", $scope.$id).get().$object;
  //$scope.restaurants = Restangular.one("areas", $scope.$id).get().$object;
    //$scope.areas = areas;
    //var firstArea = areas[0];
    //var restaurants = Restangular.all("restaurants").getList();
  //}).finally(function() {
    //$scope.loading = "Finished loading";
  //});
}
