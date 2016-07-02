export default function(nga, admin) {

// Customize dashboard
return nga.dashboard()
    .template(require("raw!../../templates/dashboardPanel.txt"))
    .addCollection(nga.collection(nga.entity('areas'))
        .name('areas')
        .title('Areas')
        .perPage(10) // limit to 10 latest
        .fields([
            nga.field('thumbnail')
               .template('<div class="item-thumbnail" style="background-image: url({{value}});">'),
            nga.field('english_name')
               .template('<div class="item-main-link"><a href="#/areas/show/{{entry.values.id}}">{{value}}</a></div>')
        ])
      );
}
