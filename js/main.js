// require files
import angular from "angular";
import Restangular from "restangular-umd";
import _ from "underscore";
import uiRouter from "angular-ui-router";

//const baseUrl = 'http://trapi.etdev.me/v1/';
const baseUrl = 'http://localhost:4545/v1/';
var tokyoRestaurants = angular.module('tokyoRestaurants', ['restangular', 'ui.router']);

// define directives
require("./directives")(tokyoRestaurants);

// define controllers
const controllers = require("./controllers")(tokyoRestaurants);

// define services
const services = require("./services")(tokyoRestaurants);

// define routes, with baseUrl
require("./routes")(tokyoRestaurants, controllers, baseUrl);
