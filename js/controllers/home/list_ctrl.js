export default function($scope, $stateParams, Restangular, $location, $anchorScroll) {
    const vm = this;
    vm.goToAreasList = goToAreasList;

    Restangular.all("areas").getList().then(function(areas) {
        vm.areas = areas;
    });

    function goToAreasList() {
        $location.hash("areas-list");
        $anchorScroll();
    }
}
