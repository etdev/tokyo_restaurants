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
}
