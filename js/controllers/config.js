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
    AreasShowCtrl: function($scope, $routeParams, $window, Restangular) {
      $scope.loading = "Loading...";
      $scope.id = $routeParams.id;

      Restangular.one("areas", $scope.id).get().then(function(area) {
        $scope.area = area;
        area.all("restaurants").getList().then(function(restaurants) {
          $scope.restaurants = restaurants;
          var widthMultiplier = $window.innerWidth / 460;
          for (var r of restaurants) {
            r.price_range_arr = new Array(r.price_range);
            r.name = _.truncate(r.name, { "length": 12 });
            r.genres = _.truncate(r.genres, { "length": 9 });
          }
        });
      });
    },
    RestaurantsShowCtrl: function($scope, $routeParams, Restangular) {
      $scope.id = $routeParams.id;
      Restangular.one("restaurants", $scope.id).get().then(function(restaurant) {
        $scope.restaurant = restaurant;
      });
    }
  };
}
