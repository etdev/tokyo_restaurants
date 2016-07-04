export default function($scope, $routeParams, Restangular) {
  $scope.id = $routeParams.id;
  Restangular.one("restaurants", $scope.id).get().then(function(restaurant) {
    $scope.restaurant = restaurant;
  });
}
