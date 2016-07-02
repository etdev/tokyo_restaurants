//var baseUrl = 'http://trapi.etdev.me/v1/';
var baseUrl = 'http://localhost:4444/v1/';

angular.module('tokyoRestaurants', ['restangular', 'ngRoute']).config(function($routeProvider, RestangularProvider) {
$routeProvider.
  when('/', {
    controller: ListCtrl,
    templateUrl: 'list.html'
  });

  RestangularProvider.setBaseUrl(baseUrl);

  RestangularProvider.setRequestInterceptor(function(elem, operation, what) {
    if (operation === 'put') {
      elem._id = undefined;
      return elem;
    }
    return elem;
  });
});

function ListCtrl($scope, Restangular) {
   $scope.areas = Restangular.all("areas").getList().$object;
}

