import routesConfig from "../config/routesConfig";
import HomeLayout from "../components/Layout/HomeLayout";
import Home from "../pages/Home";
import Reservations from "../pages/Reservations";
import Reviews from "../pages/Reviews";
import Finance from "../pages/Finance";

const publicRoutesPathComponent = [
  { path: routesConfig.home, component: Home, layout: HomeLayout },
  { path: routesConfig.reservations, component: Reservations, layout: HomeLayout },
  { path: routesConfig.reviews, component: Reviews, layout: HomeLayout },
  { path: routesConfig.finance, component: Finance, layout: HomeLayout },
];
const privateRoutesPathComponent = [];

export { privateRoutesPathComponent, publicRoutesPathComponent };
