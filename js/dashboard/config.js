export default function(nga, admin) {

// Customize dashboard
return nga.dashboard()
    .template(require("raw!../../templates/dashboard.txt"))
    .addCollection(nga.collection(nga.entity('areas'))
        .name('areas')
        .title('Areas')
        .perPage(10) // limit the panel to the 5 latest posts
        .fields([
            nga.field('name').isDetailLink(true)
        ])
      );
}
