import areaListTemplate from '../../../templates/areas/list.html';

function trAreaList() {
    'use strict';
    return {
        restrict: 'E',
        scope: {
          areas: '=',
          loading: '=',
        },
        template: areaListTemplate
    };
}

export default trAreaList;
