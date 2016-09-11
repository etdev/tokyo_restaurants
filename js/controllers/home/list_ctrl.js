export default function($scope, $stateParams, Restangular) {
    console.log("IN HOME CONTROLLER");
    Restangular.all("areas").getList().then(function(areas) {
        $scope.areas = areas;
    });
}
