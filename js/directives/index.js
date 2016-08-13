export default function(tokyoRestaurants) {
  tokyoRestaurants.directive('trHomePicker', require('../directives/home/trHomePicker'));
  tokyoRestaurants.directive('trAreaList', require('../directives/areas/trAreaList'));
  tokyoRestaurants.directive('trRestaurantList', require('../directives/restaurants/trRestaurantList'));

  tokyoRestaurants.directive('trPagination', require('../directives/shared/trPagination'));
}
