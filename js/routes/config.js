export default function(tokyoRestaurants, controllers, baseUrl) {
  tokyoRestaurants.config(function($routeProvider, RestangularProvider) {
  $routeProvider.
    when('/', {
      controller: controllers.HomeListCtrl,
      templateUrl: 'templates/home/list.html'
    }).when('/areas/:id', {
      controller: controllers.AreasShowCtrl,
      templateUrl: 'templates/areas/show.html'
    });

    RestangularProvider.setBaseUrl(baseUrl);
  });
}
