import HomeLayout from "../components/Layout/HomeLayout";
import routesConfig from "../config/routesConfig";
import Home from "../pages/Home";

const publicRoutesPathComponent = [{ path: routesConfig.home, component: Home, layout: HomeLayout }];
const privateRoutesPathComponent = [];

export { privateRoutesPathComponent, publicRoutesPathComponent };
