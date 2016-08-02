export default function($scope, $routeParams, $window, Restangular) {
  var page = typeof($routeParams["page"]) === "undefined" ? 1 : parseInt($routeParams["page"]);
  $scope.id = $routeParams.id;
  $scope.currentPage = page;
  $scope.perPage = 50; // TODO don't hardcode, extract to service?

  Restangular.one("areas", $scope.id).get().then(function(area) {
    $scope.area = area;
    $scope.totalItems = area.restaurants_count;
    $scope.next = ($scope.totalItems > $scope.currentPage * $scope.perPage);
    $scope.prev = ($scope.currentPage > 1);

    area.all("restaurants").getList({page: page}).then(function(restaurants) {
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
