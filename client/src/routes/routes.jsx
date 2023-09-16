import DefaultLayout from "../components/Layouts/DefaultLayout/DefaultLayout";
import routesConfig from "../configs/routesConfig";

import LayoutHotelDetail from "../components/Layouts/DefaultLayout/LayoutHotelDetail/LayoutHotelDetail";
import LoginLayout from "../components/Layouts/LoginLayout/LoginLayout";
import Home from "../pages/Home/Home";
import HotelDetails from "../pages/HotelDetalis/HotelDetalis";
import Login from "../pages/Login/Login";
import Check from "../pages/Register/Check/Check";
import Register from "../pages/Register/Register";
import SearchResult from "../pages/SearchResults/SearchResults";

const publicRoutesPathComponent = [
  { path: routesConfig.login, component: Login, layout: LoginLayout },
  { path: routesConfig.register, component: Register, layout: LoginLayout },
  { path: routesConfig.checkEmail, component: Check, layout: LoginLayout },
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

export { privateRoutesPathComponent, publicRoutesPathComponent };
