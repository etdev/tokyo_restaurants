import HomeListCtrl from "./home/list_ctrl";
import AreasShowCtrl from "./areas/show_ctrl";
import RestaurantsShowCtrl from "./restaurants/show_ctrl";

export default function(tokyoRestaurants) {
  return {
    HomeListCtrl: HomeListCtrl,
    AreasShowCtrl: AreasShowCtrl,
    RestaurantsShowCtrl: RestaurantsShowCtrl
  };
}
