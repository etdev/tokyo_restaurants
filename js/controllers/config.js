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
    AreasShowCtrl: function($scope, $routeParams, Restangular) {
      $scope.loading = "Loading...";
      $scope.id = $routeParams.id;
      Restangular.one("areas", $scope.id).get().then(function(area) {
        $scope.area = area;
        area.all("restaurants").getList().then(function(restaurants) {
          $scope.restaurants = restaurants;
          $scope.restaurants.map(r => r.price_range_arr = new Array(r.price_range));
        });
      });
    }
  };
}
