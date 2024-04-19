import { Link } from "react-router-dom";
import Title from "../../../Title/Title";
import routesConfig from "../../../../configs/routesConfig";

function HeaderLeft() {
  return (
    <Link className='flex items-center' to={routesConfig.home}>
      <Title
        title='Staying.com'
        fontBold
        extraLarge5
        className='text-white'
      />
    </Link>
  );
}

export default HeaderLeft;
