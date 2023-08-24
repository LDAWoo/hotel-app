import routesConfig from '../configs/routesConfig';
import DefaultLayout from '../components/Layouts/DefaultLayout/DefaultLayout';

import Home from '../pages/Home/Home';


const publicRoutesPathComponent =[
  {path: routesConfig.home,component: Home, layout: DefaultLayout}
]

const privateRoutesPathComponent = []

export {publicRoutesPathComponent, privateRoutesPathComponent};
