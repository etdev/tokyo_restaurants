export default function(tokyoRestaurants, controllers, baseUrl) {
    tokyoRestaurants.config(['$stateProvider', 'RestangularProvider', function($stateProvider, RestangularProvider) {
        $stateProvider
            .state('area_detail', {
                url: '/areas/:id?page',
                controller: controllers.AreasShowCtrl,
                controllerAs: "areaDetail",
                template: require('../../templates/areas/show.html')
            }).state('restaurant_detail', {
                url: '/restaurants/:id',
                controller: controllers.RestaurantsShowCtrl,
                controllerAs: "restaurantDetail",
                template: require('../../templates/restaurants/show.html')
            }).state('root', {
                url: '/?page',
                controller: controllers.HomeListCtrl,
                controllerAs: "home",
                template: require('../../templates/home/list.html')
            }).state('nothing', {
                url: '?page',
                controller: controllers.HomeListCtrl,
                controllerAs: "home",
                template: require('../../templates/home/list.html')
            });
        RestangularProvider.setBaseUrl(baseUrl);
    }]);
}

