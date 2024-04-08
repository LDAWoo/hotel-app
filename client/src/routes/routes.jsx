import DefaultLayout from "../components/Layouts/DefaultLayout/DefaultLayout";
import routesConfig from "../configs/routesConfig";

import LayoutHotelDetail from "../components/Layouts/DefaultLayout/LayoutHotelDetail/LayoutHotelDetail";
import LoginLayout from "../components/Layouts/LoginLayout/LoginLayout";
import Home from "../pages/Home/Home";
import HotelDetails from "../pages/HotelDetalis/HotelDetalis";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SearchResult from "../pages/SearchResults/SearchResults";
import SecureBooking from "../pages/SecureBooking/SecureBooking";
import RegisterContactDetails from "../pages/RegisterContactDetails";
import RegisterPassword from "../pages/RegisterPassword";
import ForgotPassword from "../pages/ForgotPassword";
import ForgotConfirmPassword from "../pages/ForgotConfirmPassword";
import CheckEmail from "../pages/CheckEmail";
import Successfully from "../pages/Successfully/Successfully";
import Profile from "../pages/Profile/Profile";
import Information from "../pages/Profile/Information/Information";
import Security from "../pages/Profile/Security/Security";
import BookingTrip from "../pages/BookingTrip/BookingTrip";
import MyBooking from "../pages/MyBooking/MyBooking";

const publicRoutesPathComponent = [
  { path: routesConfig.login, component: Login, layout: LoginLayout },
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
    path: routesConfig.forgotPassword,
    component: ForgotPassword,
    layout: LoginLayout,
  },
  {
    path: routesConfig.forgotConfirmation,
    component: ForgotConfirmPassword,
    layout: LoginLayout,
  },
  {
    path: routesConfig.checkEmail,
    component: CheckEmail,
    layout: LoginLayout,
  },
  { path: routesConfig.home,
    component: Home, 
    layout: DefaultLayout 
  },
  {
    path: routesConfig.mytrip, 
    component: BookingTrip, 
    layout: LayoutHotelDetail
  },
  {
    path: routesConfig.mybooking, 
    component: MyBooking, 
    layout: LayoutHotelDetail
  },
  { path: routesConfig.profile, 
    component: Profile, 
    layout: DefaultLayout 
  },
  { path: routesConfig.profileInformation, 
    component: Information, 
    layout: DefaultLayout 
  },
  { path: routesConfig.profileSecurity, 
    component: Security, 
    layout: DefaultLayout 
  },
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
    path: routesConfig.secureBooking,
    component: SecureBooking,
    layout: LayoutHotelDetail,
  },
  {
    path: routesConfig.successfully,
    component: Successfully,
    layout: LayoutHotelDetail,
  },
];

const privateRoutesPathComponent = [];

export { privateRoutesPathComponent, publicRoutesPathComponent };
