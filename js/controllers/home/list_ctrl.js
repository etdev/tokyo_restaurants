export default function($scope, $routeParams, Restangular) {
  Restangular.all("areas").getList().then(function(areas) {
    $scope.areas = areas;
  });
}
