import restaurantListTemplate from '../../../templates/restaurants/list.html';

function trRestaurantList() {
    'use strict';
    return {
        restrict: 'E',
        scope: {
          restaurants: '=',
          loading: '=',
        },
        template: restaurantListTemplate
    };
}

export default trRestaurantList;
