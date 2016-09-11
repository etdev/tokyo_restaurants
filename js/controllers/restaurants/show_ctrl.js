export default function($scope, $stateParams, Restangular) {
    $scope.id = $stateParams.id;
    Restangular.one("restaurants", $scope.id).get().then(function(restaurant) {
        $scope.restaurant = restaurant;
    });
}
