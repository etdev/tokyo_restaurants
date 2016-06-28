export default function(nga, admin) {

// Customize dashboard
return nga.dashboard()
    .template(require("raw!../../templates/dashboard.txt"))
    .addCollection(nga.collection(nga.entity('areas'))
        .name('areas')
        .title('Areas')
        .perPage(10) // limit to 10 latest
        .fields([
            nga.field('name')
            .template('<a href="#/areas/show/{{entry.values.id}}">{{value}}</a>')
        ])
      );
}
