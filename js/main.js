// require files
import angular from "angular";
import Restangular from "restangular-umd";
import _ from "underscore";
import ngRoute from "angular-route";
import jasnyBootstrap from "../build/jasny-bootstrap.js";

const baseUrl = 'http://trapi.etdev.me/v1/';
var tokyoRestaurants = angular.module('tokyoRestaurants', ['restangular', 'ngRoute']);

// define directives
require("./directives/config")(tokyoRestaurants);

// define controllers
const controllers = require("./controllers/config")(tokyoRestaurants);

// define services
const services = require("./services/config")(tokyoRestaurants);

// define routes, with baseUrl
require("./routes/config")(tokyoRestaurants, controllers, baseUrl);
