import { Link } from "react-router-dom";
import Title from "../../../Title/Title";
import routesConfig from "../../../../configs/routesConfig";

function HeaderLeft() {
  return (
    <Link className='flex items-center' to={routesConfig.login}>
      <Title
        title='Staying.com'
        fontMedium
        extraLarge5
        colorTitle='text-white'
      />
    </Link>
  );
}

export default HeaderLeft;
