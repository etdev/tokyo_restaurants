export default function(nga, admin) {
  return `
<nav id="header-nav" class="navbar navbar-default navbar-static-top" role="navigation">
  <div class="navbar-header">
      <button type="button" class="navbar-toggle pull-left" ng-click="isCollapsed = !isCollapsed">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
      </button>
      <a href="#" ng-click="appController.displayHome()" class="navbar-brand">
        {{ ::appController.applicationName }}
      </a>
  </div>
</nav>`;
}
