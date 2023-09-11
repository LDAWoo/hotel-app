import routesConfig from "../configs/routesConfig";
import DefaultLayout from "../components/Layouts/DefaultLayout/DefaultLayout";

import Home from "../pages/Home/Home";
import SearchResult from "../pages/SearchResults/SearchResults";
import HotelDetails from "../pages/HotelDetalis/HotelDetalis";
import LayoutHotelDetail from "../components/Layouts/DefaultLayout/LayoutHotelDetail/LayoutHotelDetail";

const publicRoutesPathComponent = [
  { path: routesConfig.home, component: Home, layout: DefaultLayout },
  {
    path: routesConfig.searchResults,
    component: SearchResult,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.hotelDetails,
    component: HotelDetails,
    layout: LayoutHotelDetail,
  },
];

const privateRoutesPathComponent = [];

export { publicRoutesPathComponent, privateRoutesPathComponent };
