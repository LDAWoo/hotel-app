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

import Register from "../pages/Register/Register";
import RegisterContactDetails from "../pages/RegisterContactDetails";
import RegisterPassword from "../pages/RegisterPassword";
import ForgotPassword from "../pages/ForgotPassword";
import ForgotConfirmPassword from "../pages/ForgotConfirmPassword";
import CheckEmail from "../pages/CheckEmail";
import CreateRoom from "../pages/HostStaying/CreateRoom/CreateRoom";
import ThankYouHost from "../pages/HostStaying/ThankYouHost/ThankYouHost";

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
    path: routesConfig.becomeAHostCreateRoom,
    component: CreateRoom,
    layout: HostLayout,
  },
  {
    path: routesConfig.becomeAHostThankYou,
    component: ThankYouHost,
    layout: HostLayout,
  },
];

const privateRoutesPathComponent = [];

export { privateRoutesPathComponent, publicRoutesPathComponent };
