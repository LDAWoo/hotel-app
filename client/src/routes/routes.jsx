import routesConfig from "../configs/routesConfig";
import DefaultLayout from "../components/Layouts/DefaultLayout/DefaultLayout";

import Home from "../pages/Home/Home";
import SearchResult from "../pages/SearchResults/SearchResults";

const publicRoutesPathComponent = [
  { path: routesConfig.home, component: Home, layout: DefaultLayout },
  {
    path: routesConfig.searchResults,
    component: SearchResult,
    layout: DefaultLayout,
  },
];

const privateRoutesPathComponent = [];

export { publicRoutesPathComponent, privateRoutesPathComponent };
