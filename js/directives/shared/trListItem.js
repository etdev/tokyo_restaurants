import trListItemController from '../../controllers/trListItemController.js';

export default function trListItem() {
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
        controller: trListItemController,
        template:
`<ul class="tr-item-list">
  <li ng-repeat="entry in entries track by entry.identifierValue" ng-class="getEntryCssClasses(entry)">
    <ma-column ng-repeat="field in fields() track by $index" field="::field" entry="::entry" entity="::entity" datastore="datagrid.datastore"</ma-column>
  </li>
</ul>`
    };
}

trListItem.$inject = [];
