import paginationTemplate from "../../../templates/shared/pagination.html";

function trPagination() {
    'use strict';

    function link(scope, attrs, element) {
    }

    return {
        restrict: 'E',
        scope: {
            pageData: '=',
        },
        template: paginationTemplate,
        link: link
    };
}

export default trPagination;
