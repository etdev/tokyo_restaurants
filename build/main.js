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
	module.exports = __webpack_require__(10);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// declare a new module called 'tokyoRestaurants', and make it require the `ng-admin` module as a dependency
	'use strict';
	
	var tokyoRestaurants = angular.module('tokyoRestaurants', ['ng-admin']);
	var baseUrl = 'http://trapi.etdev.me/v1/';
	
	// custom directives
	tokyoRestaurants.directive('trDashboardPicker', __webpack_require__(2));
	tokyoRestaurants.directive('trDashboardPanel', __webpack_require__(4));
	tokyoRestaurants.directive('trListItem', __webpack_require__(5));
	
	// declare a function to run when the module bootstraps (during the 'config' phase)
	tokyoRestaurants.config(['NgAdminConfigurationProvider', function (nga) {
	
	  // create an admin application
	  var admin = nga.application('Tokyo Restaurants')
	  //.baseApiUrl('http://trapi.etdev.me/v1/')
	  .baseApiUrl('http://localhost:4444/v1/').header(__webpack_require__(7)(nga, admin));
	
	  // create area entity, set fields
	  var area = nga.entity('areas');
	  area.listView().fields([nga.field('id'), nga.field('name')]).batchActions([]);
	
	  // area editionView
	  area.showView().fields([nga.field('id'), nga.field('name'), nga.field('restaurants', 'embedded_list').targetFields([nga.field('name').template('<a href="{{entry.values.url}}">{{value}}</a>'), nga.field('genres'), nga.field('thumbnail'), nga.field('english_name'), nga.field('rating'), nga.field('price_range')])]);
	
	  // create the restaurant list view
	  var restaurant = nga.entity('restaurants');
	
	  restaurant.listView().fields([nga.field('name').template('<a href="{{entry.values.url}}">{{value}}</a>'), nga.field('rating'), nga.field('price_range'), nga.field('genres')]);
	
	  // add entities
	  admin.addEntity(area);
	  admin.addEntity(restaurant);
	
	  // config
	  admin.dashboard(__webpack_require__(8)(nga, admin));
	
	  // attach admin entity to DOM and execute
	  nga.configure(admin);
	}]);
	
	//var headerTemplate =

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _templatesDashboardPickerHtml = __webpack_require__(3);
	
	var _templatesDashboardPickerHtml2 = _interopRequireDefault(_templatesDashboardPickerHtml);
	
	function dashboardPicker() {
	  'use strict';
	
	  return {
	    restrict: 'E',
	    controller: function controller($scope) {
	      $scope.areasClass = "active";
	      $scope.restaurantsClass = "";
	      $scope.genresClass = "";
	      $scope.setActive = function (name) {
	        if (name === "areas") {
	          $scope.areasClass = "active";
	          $scope.restaurantsClass = "";
	          $scope.genresClass = "";
	        } else if (name === "restaurants") {
	          $scope.areasClass = "";
	          $scope.restaurantsClass = "active";
	          $scope.genresClass = "";
	        } else if (name === "genres") {
	          $scope.areasClass = "";
	          $scope.restaurantsClass = "";
	          $scope.genresClass = "active";
	        }
	      };
	    },
	    template: _templatesDashboardPickerHtml2['default']
	  };
	}
	
	exports['default'] = dashboardPicker;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n  <section class=\"dashboard-link-picker col-md-12\">\n    <ul>\n      <li class={{areasClass}} ng-click='setActive(\"areas\")'>\n        By Area\n      </li>\n      <li class={{restaurantsClass}} ng-click='setActive(\"restaurants\")'>\n        Popular\n      </li>\n      <li class={{genresClass}} ng-click='setActive(\"genres\")'>\n        By Cuisine\n      </li>\n    </ul>\n  </section>\n</div>\n";

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = trDashboardPanel;
	
	function trDashboardPanel($state) {
	    return {
	        restrict: 'E',
	        scope: {
	            collection: '&',
	            entries: '&',
	            datastore: '&'
	        },
	        link: function link(scope) {
	            scope.gotoList = function () {
	                $state.go($state.get('list'), { entity: scope.collection().entity.name() });
	            };
	        },
	        template: '\n<div class="panel-heading">\n    <a ng-click="gotoList()">{{ (collection().title() || collection().entity.label()) | translate }}</a>\n</div>\n<tr-list-item name="{{ collection().name() }}"\n    entries="entries()"\n    fields="::collection().fields()"\n    entity="::collection().entity"\n    list-actions="::collection().listActions()"\n    datastore="datastore()">\n</tr-list-item>'
	    };
	}
	
	trDashboardPanel.$inject = ['$state'];
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = trListItem;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _controllersTrListItemControllerJs = __webpack_require__(6);
	
	var _controllersTrListItemControllerJs2 = _interopRequireDefault(_controllersTrListItemControllerJs);
	
	function trListItem() {
	    return {
	        restrict: 'E',
	        scope: {
	            name: '@',
	            entries: '=',
	            selection: '=',
	            fields: '&',
	            listActions: '&',
	            entity: '&',
	            entryCssClasses: '&?',
	            datastore: '&',
	            sortField: '@',
	            sortDir: '@',
	            sort: '&'
	        },
	        controllerAs: 'listItem',
	        controller: _controllersTrListItemControllerJs2['default'],
	        template: '<ul class="tr-item-list">\n  <li ng-repeat="entry in entries track by entry.identifierValue" ng-class="getEntryCssClasses(entry)">\n    <ma-column ng-repeat="field in fields() track by $index" field="::field" entry="::entry" entity="::entity" datastore="datagrid.datastore"</ma-column>\n  </li>\n</ul>'
	    };
	}
	
	trListItem.$inject = [];
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var ListItemController = (function () {
	    function ListItemController($scope, $location, $stateParams, $anchorScroll, $attrs) {
	        var _this = this;
	
	        _classCallCheck(this, ListItemController);
	
	        $scope.entity = $scope.entity();
	        this.$scope = $scope;
	        this.$location = $location;
	        this.$anchorScroll = $anchorScroll;
	        this.datastore = this.$scope.datastore();
	        this.filters = {};
	        this.shouldDisplayActions = this.$scope.listActions() && this.$scope.listActions().length > 0;
	        $scope.getEntryCssClasses = this.getEntryCssClasses.bind(this);
	        $scope.toggleSelect = this.toggleSelect.bind(this);
	        $scope.toggleSelectAll = this.toggleSelectAll.bind(this);
	        $scope.sortField = $attrs.sortField;
	        $scope.sortDir = $attrs.sortDir;
	        this.sortField = 'sortField' in $stateParams ? $stateParams.sortField : $attrs.sortField;
	        this.sortDir = 'sortDir' in $stateParams ? $stateParams.sortDir : $attrs.sortDir;
	        $attrs.$observe('sortDir', function (sortDir) {
	            return _this.sortDir = sortDir;
	        });
	        $attrs.$observe('sortField', function (sortField) {
	            return _this.sortField = sortField;
	        });
	        this.sortCallback = $scope.sort() ? $scope.sort() : this.sort.bind(this);
	    }
	
	    /**
	     * Return true if a column is being sorted
	     *
	     * @param {Field} field
	     *
	     * @returns {Boolean}
	     */
	
	    _createClass(ListItemController, [{
	        key: 'isSorting',
	        value: function isSorting(field) {
	            return this.sortField === this.getSortName(field);
	        }
	
	        /**
	         * Return 'even'|'odd' based on the index parameter
	         *
	         * @param {Number} index
	         * @returns {string}
	         */
	    }, {
	        key: 'itemClass',
	        value: function itemClass(index) {
	            return index % 2 === 0 ? 'even' : 'odd';
	        }
	
	        /**
	         *
	         * @param {Field} field
	         */
	    }, {
	        key: 'sort',
	        value: function sort(field) {
	            var dir = 'ASC',
	                fieldName = this.getSortName(field);
	
	            if (this.sortField === fieldName) {
	                dir = this.sortDir === 'ASC' ? 'DESC' : 'ASC';
	            }
	
	            this.$location.search('sortField', fieldName);
	            this.$location.search('sortDir', dir);
	        }
	
	        /**
	         * Return fieldName like (view.fieldName) to sort
	         *
	         * @param {Field} field
	         *
	         * @returns {String}
	         */
	    }, {
	        key: 'getSortName',
	        value: function getSortName(field) {
	            return this.$scope.name ? this.$scope.name + '.' + field.name() : field.name();
	        }
	    }, {
	        key: 'getEntryCssClasses',
	        value: function getEntryCssClasses(entry) {
	            var entryCssClasses = this.$scope.entryCssClasses;
	            if (typeof entryCssClasses !== 'function') {
	                return;
	            }
	            var getEntryCssClasses = entryCssClasses();
	            if (typeof getEntryCssClasses !== 'function') {
	                return;
	            }
	            return getEntryCssClasses(entry.values);
	        }
	    }, {
	        key: 'toggleSelect',
	        value: function toggleSelect(entry) {
	            var selection = this.$scope.selection.slice();
	
	            var index = selection.indexOf(entry);
	
	            if (index === -1) {
	                this.$scope.selection = selection.concat(entry);
	                return;
	            }
	            selection.splice(index, 1);
	            this.$scope.selection = selection;
	        }
	    }, {
	        key: 'toggleSelectAll',
	        value: function toggleSelectAll() {
	
	            if (this.$scope.selection.length < this.$scope.entries.length) {
	                this.$scope.selection = this.$scope.entries;
	                return;
	            }
	
	            this.$scope.selection = [];
	        }
	    }]);
	
	    return ListItemController;
	})();
	
	exports['default'] = ListItemController;
	
	ListItemController.$inject = ['$scope', '$location', '$stateParams', '$anchorScroll', '$attrs'];
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function (nga, admin) {
	  return "\n<nav id=\"header-nav\" class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n  <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle pull-left\" ng-click=\"isCollapsed = !isCollapsed\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n      </button>\n      <a href=\"#\" ng-click=\"appController.displayHome()\" class=\"navbar-brand\">\n        {{ ::appController.applicationName }}\n      </a>\n  </div>\n</nav>";
	};
	
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = function (nga, admin) {
	
	    // Customize dashboard
	    return nga.dashboard().template(__webpack_require__(9)).addCollection(nga.collection(nga.entity('areas')).name('areas').title('Areas').perPage(10) // limit to 10 latest
	    .fields([nga.field('thumbnail').template('<div class="item-thumbnail" style="background-image: url({{value}});">'), nga.field('english_name').template('<div class="item-main-link"><a href="#/areas/show/{{entry.values.id}}">{{value}}</a></div>')]));
	};
	
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<section row class=\"dashboard-main\">\n  <h2>Good, Cheap Restaurants In Tokyo</h2>\n</section>\n<tr-dashboard-picker></tr-dashboard-picker>\n<section class=\"row dashboard-content\">\n    <div class=\"col-lg-12\">\n      <tr-dashboard-panel collection=\"dashboardController.collections.areas\" entries=\"dashboardController.entries.areas\" datastore=\"dashboardController.datastore\"></tr-dashboard-panel>\n    </div>\n</section>\n"

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map