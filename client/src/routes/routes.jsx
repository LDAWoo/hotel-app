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
import JoinStaying from "../pages/JoinStaying/JoinStaying";
import JoinLayout from "../components/Layouts/JoinLayout/JoinLayout";
import HostLayout from "../components/Layouts/JoinLayout/HostLayout/HostLayout";
import CategoryHost from "../pages/HostStaying/CategoryHost/CategoryHost";
import PropertyHost from "../pages/HostStaying/PropertyHost/PropertyHost";
import OwnerHost from "../pages/HostStaying/OwnerHost/OwnerHost";
import FeedBackHost from "../pages/HostStaying/FeedBackHost/FeedBackHost";
import AddRessHost from "../pages/HostStaying/AddressHost/AddressHost";
import MapHost from "../pages/HostStaying/MapHost/MapHost";
import HotelNameHost from "../pages/HostStaying/HotelNameHost/HotelNameHost";
import FacilitiesHost from "../pages/HostStaying/FacilitiesHost/FacilitiesHost";

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
  {
    path: routesConfig.join,
    component: JoinStaying,
    layout: JoinLayout,
  },
  {
    path: routesConfig.becomeAHostCategory,
    component: CategoryHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostProperty,
    component: PropertyHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostOwner,
    component: OwnerHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostFeedBack,
    component: FeedBackHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostAddRess,
    component: AddRessHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostMap,
    component: MapHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostHotelName,
    component: HotelNameHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostFacilities,
    component: FacilitiesHost,
    layout: HostLayout,
  },
];

const privateRoutesPathComponent = [];

export { privateRoutesPathComponent, publicRoutesPathComponent };
