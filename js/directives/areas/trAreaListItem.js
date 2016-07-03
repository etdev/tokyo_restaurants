import areaListItemTemplate from '../../../templates/areas/list_item.html';

function trAreaListItem() {
    'use strict';
    return {
        restrict: 'E',
        priority: '1001', // to execute before ng-repeat
        scope: {
          area: '='
        },
        controller: function($scope) {
                },
        template: areaListItemTemplate
    };
}

export default trAreaListItem;
