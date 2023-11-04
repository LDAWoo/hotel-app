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
import HouseRulesHost from "../pages/HostStaying/HouseRulesHost/HouseRulesHost";
import OverviewRoomHost from "../pages/HostStaying/OverviewRoomHost/OverviewRoomHost";
import AddRoomHost from "../pages/HostStaying/AddRoomHost/AddRoomHost";
import BathRoomHost from "../pages/HostStaying/BathRoomHost/BathRoomHost";
import AmenityHost from "../pages/HostStaying/AmenityHost/AmenityHost";
import PhotoHost from "../pages/HostStaying/PhotoHost/PhotoHost";
import HotelPriceHost from "../pages/HostStaying/HotelPriceHost/HotelPriceHost";
import HotelPriceOverviewHost from "../pages/HostStaying/HotelPriceOverviewHost/HotelPriceOverviewHost";
import HotelDiscountHost from "../pages/HostStaying/HotelDiscountHost/HotelDiscountHost";
import HotelPolicyHost from "../pages/HostStaying/HotelPolicyHost/HotelPolicyHost";
import UnitNameHost from "../pages/HostStaying/UnitNameHost/UnitNameHost";

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
  {
    path: routesConfig.becomeAHostHouseRules,
    component: HouseRulesHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostOverviewRoom,
    component: OverviewRoomHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostAddRoom,
    component: AddRoomHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostBathRoom,
    component: BathRoomHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostAmenities,
    component: AmenityHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostUnitName,
    component: UnitNameHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostHotelPrice,
    component: HotelPriceHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostHotelPriceOverview,
    component: HotelPriceOverviewHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostHotelGroupDiscount,
    component: HotelDiscountHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostHotelPolicy,
    component: HotelPolicyHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostPhoto,
    component: PhotoHost,
    layout: HostLayout,
  },
];

const privateRoutesPathComponent = [];

export { privateRoutesPathComponent, publicRoutesPathComponent };
