// require files
require('angular')
require('restangular-umd');
require('underscore');
require('angular-route')
require('../build/jasny-bootstrap.js');

const baseUrl = 'http://trapi.etdev.me/v1/';
var tokyoRestaurants = angular.module('tokyoRestaurants', ['restangular', 'ngRoute']);

// define directives
require("./directives/config")(tokyoRestaurants);
// define controllers
const controllers = require("./controllers/config")(tokyoRestaurants);

// define routes, with baseUrl
require("./routes/config")(tokyoRestaurants, controllers, baseUrl);
