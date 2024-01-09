import routesConfig from "../configs/routesConfig";
import Login from "../pages/Login/Login";
import LoginLayout from "../components/Layout/LoginLayout/LoginLayout";
import JoinStaying from "../pages/JoinStaying/JoinStaying";
import JoinLayout from "../components/Layout/JoinLayout/JoinLayout";
import HostLayout from "../components/Layout/JoinLayout/HostLayout/HostLayout";
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
import NonRefundableHost from "../pages/HostStaying/NonRefundableHost/NonRefundableHost";
import CalendarSyncHost from "../pages/HostStaying/CalendarSyncHost/CalendarSyncHost";
import PaymentModeHost from "../pages/HostStaying/PaymentModeHost/PaymentModeHost";
import InvoicingHost from "../pages/HostStaying/InvoicingHost/InvoicingHost";
import PartnerHost from "../pages/HostStaying/PartnerHost/PartnerHost";
import Register from "../pages/Register/Register";
import RegisterContactDetails from "../pages/RegisterContactDetails";
import RegisterPassword from "../pages/RegisterPassword";

const publicRoutesPathComponent = [
  {
    path: routesConfig.login,
    component: Login,
    layout: LoginLayout,
  },
  {
    path: routesConfig.register,
    component: Register,
    layout: LoginLayout,
  },
  {
    path: routesConfig.contactDetails,
    component: RegisterContactDetails,
    layout: LoginLayout,
  },
  {
    path: routesConfig.registerPassword,
    component: RegisterPassword,
    layout: LoginLayout,
  },
  {
    path: routesConfig.home,
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
    path: routesConfig.becomeAHostNonRefundable,
    component: NonRefundableHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostCalendarSync,
    component: CalendarSyncHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostPaymentMode,
    component: PaymentModeHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostInvoicing,
    component: InvoicingHost,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostPartner,
    component: PartnerHost,
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
