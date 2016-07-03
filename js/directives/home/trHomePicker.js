import homePickerTemplate from '../../../templates/home/homePicker.html';

function homePicker() {
    'use strict';

    return {
        restrict: 'E',
        controller: function($scope) {
                    $scope.areasClass = "active";
                    $scope.restaurantsClass = "";
                    $scope.genresClass = "";
                    $scope.setActive = function(name){
                      if (name === "areas") {
                        $scope.areasClass = "active";
                        $scope.restaurantsClass = "";
                        $scope.genresClass = "";
                      } else if (name === "restaurants") {
                        $scope.areasClass = "";
                        $scope.restaurantsClass = "active";
                        $scope.genresClass = "";
                      } else if (name === "genres") {
                        $scope.areasClass = "";
                        $scope.restaurantsClass = "";
                        $scope.genresClass = "active";
                      }
                    };
                },
        template: homePickerTemplate
    };
}

export default homePicker;
