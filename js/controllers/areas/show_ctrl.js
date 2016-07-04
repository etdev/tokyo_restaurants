export default function($scope, $routeParams, $window, Restangular) {
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
}
