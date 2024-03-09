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
