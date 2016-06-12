// declare a new module called 'tokyoRestaurants', and make it require the `ng-admin` module as a dependency
var tokyoRestaurants = angular.module('tokyoRestaurants', ['ng-admin']);

var baseUrl = 'http://trapi.etdev.me/v1/';

// declare a function to run when the module bootstraps (during the 'config' phase)
tokyoRestaurants.config(['NgAdminConfigurationProvider', function (nga) {
    // create an admin application
    var admin = nga.application('Tokyo Restaurants')
      .baseApiUrl('http://trapi.etdev.me/v1/');

    // create area entity, set fields
    var area = nga.entity('areas');
    area.listView().fields([
        nga.field('id'),
        nga.field('name'),
        nga.field('primary_code'),
        nga.field('restaurants', 'embedded_list')
           .targetFields([
             nga.field('name')
                .template('<a href="' + baseUrl + 'restaurants/{{element.id}}'">{{value}}</a>'),
             nga.field('rating'),
             nga.field('price_range')
           ])
    ]);

    // add area entity
    admin.addEntity(area);

    // attach admin entity to DOM and execute
    nga.configure(admin);
}]);
