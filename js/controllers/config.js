export default function(tokyoRestaurants) {
  return {
    HomeListCtrl: function($scope, Restangular) {
      $scope.loading = "Loading...";
      Restangular.all("areas").getList().then(function(areas) {
        $scope.areas = areas;
        var firstArea = areas[0];
        var restaurants = Restangular.all("restaurants").getList();
      }).finally(function() {
        $scope.loading = "Finished loading";
      });
    },
    AreasShowCtrl: function($scope, Restangular) {
      $scope.loading = "Loading...";
      Restangular.one("areas", $scope.$id).get().then(function(area) {
        debugger;
      });
    }
  };
}
