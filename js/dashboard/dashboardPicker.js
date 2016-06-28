import dashboardPickerTemplate from './dashboardPicker.html';

function dashboardPicker() {
    'use strict';

    return {
        restrict: 'E',
        controller: function($scope) {
                    $scope.areasClass = "active";
                    $scope.restaurantsClass = "";
                    $scope.genresClass = "";
                    $scope.setActive = function(name){
                      console.log(name)
                      if (name === "areas")
                        $scope.areasClass = "active";
                        $scope.restaurantsClass = "";
                        $scope.genresClass = "";
                      if (name === "restaurants")
                        $scope.areasClass = "";
                        $scope.restaurantsClass = "active";
                        $scope.genresClass = "";
                      if (name === "genres")
                        $scope.areasClass = "";
                        $scope.restaurantsClass = "";
                        $scope.genresClass = "active";
                    };
                },
        template: dashboardPickerTemplate
    };
}

export default dashboardPicker;
