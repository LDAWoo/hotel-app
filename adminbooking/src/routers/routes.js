import routesConfig from "../config/routesConfig";
import HomeLayout from "../components/Layout/HomeLayout";
import Home from "../pages/Home";
import Reservations from "../pages/Reservations";

const publicRoutesPathComponent = [
  { path: routesConfig.home, component: Home, layout: HomeLayout },
  { path: routesConfig.reservations, component: Reservations, layout: HomeLayout },
];
const privateRoutesPathComponent = [];

export { privateRoutesPathComponent, publicRoutesPathComponent };
