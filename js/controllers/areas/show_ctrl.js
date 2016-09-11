export default function($stateParams, $window, Restangular) {
    const vm = this;
    vm.pageData = { page: setPage(), perPage: 25 }
    vm.id = $stateParams.id;

    Restangular.one("areas", vm.id).get().then(function(area) {
        vm.area = area;
        vm.pageData.totalItems = area.restaurants_count;
        vm.pageData.next = (vm.pageData.totalItems > (vm.pageData.page * vm.pageData.perPage));
        vm.pageData.prev = (vm.pageData.page > 1);

        area.all("restaurants").getList({page: vm.pageData.page}).then(function(restaurants) {
            vm.restaurants = restaurants;
            for (var r of restaurants) {
                r.price_range_arr = new Array(r.price_range);
                r.name = _.truncate(r.name, { "length": 12 });
                r.genres = _.truncate(r.genres, { "length": 9 });
            }
        });
    });

    function setPage() {
        if (typeof $stateParams["page"] !== "undefined")
            return parseInt($stateParams["page"]);
        else
            return 1;
    }
}
