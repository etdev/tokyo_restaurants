/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// declare a new module called 'tokyoRestaurants', and make it require the `ng-admin` module as a dependency
	'use strict';
	
	var tokyoRestaurants = angular.module('tokyoRestaurants', ['ng-admin']);
	var baseUrl = 'http://trapi.etdev.me/v1/';
	
	// declare a function to run when the module bootstraps (during the 'config' phase)
	tokyoRestaurants.config(['NgAdminConfigurationProvider', function (nga) {
	  // create an admin application
	  var admin = nga.application('Tokyo Restaurants')
	  //.baseApiUrl('http://localhost:3000/v1/')
	  .baseApiUrl('http://trapi.etdev.me/v1/').header(headerTemplate);
	
	  // create area entity, set fields
	  var area = nga.entity('areas');
	  area.listView().fields([nga.field('id'), nga.field('name')]).batchActions([]);
	
	  // area editionView
	  area.showView().fields([nga.field('id'), nga.field('name'), nga.field('restaurants', 'embedded_list').targetFields([nga.field('name').template('<a href="{{entry.values.url}}">{{value}}</a>'), nga.field('genres'), nga.field('rating'), nga.field('price_range')])]);
	
	  // create the restaurant list view
	  var restaurant = nga.entity('restaurants');
	
	  restaurant.listView().fields([nga.field('name').template('<a href="{{entry.values.url}}">{{value}}</a>'), nga.field('rating'), nga.field('price_range'), nga.field('genres')]);
	
	  // add area entity
	  admin.addEntity(area);
	  admin.addEntity(restaurant);
	
	  // Customize dashboard
	  admin.dashboard(nga.dashboard().template(dashboardTemplate).addCollection(nga.collection(area).name('areas').title('Areas').perPage(10) // limit the panel to the 5 latest posts
	  .fields([nga.field('name').isDetailLink(true)])));
	
	  // attach admin entity to DOM and execute
	  nga.configure(admin);
	}]);
	
	var dashboardTemplate = '<section row class="dashboard-main">' + '<h2>Good, Cheap Restaurants In Tokyo</h2>' + '</section>' + '<section class="dashboard-link-picker">' + '<ul>' + '<li class="active">Areas</li>' + '<li>Restaurants</li>' + '<li>Genres</li>' + '</ul>' + '<section>' + '<section class="row dashboard-content">' + '<div class="col-lg-12">' + '<ma-dashboard-panel collection="dashboardController.collections.areas" entries="dashboardController.entries.areas" datastore="dashboardController.datastore"></ma-dashboard-panel>' + '</div>' + '</section>';
	
	var headerTemplate = '<nav id="header-nav" class="navbar navbar-default navbar-static-top" role="navigation">' + '<div class="navbar-header">' + '<button type="button" class="navbar-toggle pull-left" ng-click="isCollapsed = !isCollapsed">' + '<span class="icon-bar"></span>' + '<span class="icon-bar"></span>' + '<span class="icon-bar"></span>' + '</button>' + '<a href="#" ng-click="appController.displayHome()" class="navbar-brand">{{ ::appController.applicationName }}</a>' + '</div>' + '</span>' + '</nav>';

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map