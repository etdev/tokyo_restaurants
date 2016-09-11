import areaListTemplate from '../../../templates/areas/list.html';

function trAreaList() {
    'use strict';
    function link(scope, attrs, element) {
    }

    return {
        restrict: 'E',
        scope: {
          areas: '=',
          loading: '=',
        },
        link: link,
        template: areaListTemplate
    };
}

export default trAreaList;
