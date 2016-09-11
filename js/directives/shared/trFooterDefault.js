import footerTemplate from "../../../templates/shared/footer.html";

function trFooterDefault() {
    'use strict';

    function link(scope, attrs, element) {
    }

    return {
        restrict: 'E',
        scope: true,
        template: footerTemplate,
        link: link
    };
}

export default trFooterDefault;
