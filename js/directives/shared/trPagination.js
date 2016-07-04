import paginationTemplate from "../../../templates/shared/pagination.html";

function trPagination() {
  'use strict';
  return {
    restrict: 'E',
    scope: {
      totalItems: '=',
      perPage: '=',
      currentPage: '=',
      next: '=',
      prev: '='
    },
    template: paginationTemplate
  };
}

export default trPagination;
