// declare a new module called 'tokyoRestaurants', and make it require the `ng-admin` module as a dependency
var tokyoRestaurants = angular.module('tokyoRestaurants', ['ng-admin']);

var baseUrl = 'http://trapi.etdev.me/v1/';

// declare a function to run when the module bootstraps (during the 'config' phase)
tokyoRestaurants.config(['NgAdminConfigurationProvider', function (nga) {
    // create an admin application
    var admin = nga.application('Tokyo Restaurants')
      //.baseApiUrl('http://localhost:3000/v1/')
      .baseApiUrl('http://trapi.etdev.me/v1/');

    // create area entity, set fields
    var area = nga.entity('areas');
    area.listView().fields([
        nga.field('id'),
        nga.field('name')
    ]).batchActions([]);

    // area editionView
    area.showView().fields([
      nga.field('id'),
      nga.field('name'),
      nga.field('restaurants', 'embedded_list')
          .targetFields([
            nga.field('name')
              .template('<a href="{{entry.values.url}}">{{value}}</a>'),
            nga.field('genres'),
            nga.field('rating'),
            nga.field('price_range'),
          ])
    ]);

    // create the restaurant list view
    var restaurant = nga.entity('restaurants');

    restaurant.listView().fields([
        nga.field('name')
           .template('<a href="{{entry.values.url}}">{{value}}</a>'),
        nga.field('rating'),
        nga.field('price_range'),
        nga.field('genres')
    ]);

    // add area entity
    admin.addEntity(area);
    admin.addEntity(restaurant);

    // attach admin entity to DOM and execute
    nga.configure(admin);
}]);
