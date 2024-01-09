import { Link } from "react-router-dom";
import Title from "../../../Title/Title";
import routesConfig from "../../../../configs/routesConfig";

function HeaderLeft() {
  return (
    <div className="flex items-center">
      <Link to={routesConfig.home}>
        <Title title="Staying.com" fontBold extraLarge5 className="text-white" />
      </Link>
    </div>
  );
}

export default HeaderLeft;
