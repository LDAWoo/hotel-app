import { OverviewData } from "../../../components/Constants/OverviewHostData";
import ItemComponentOverview from "./ItemComponentOverview";
import routesConfig from "../../../configs/routesConfig";
import { useNavigate } from "react-router-dom";
const ComponentOverviewRoom = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    console.log(e);

    if (e === "Photos") {
      navigate(routesConfig.becomeAHostPhoto);
    }
  };

  return (
    <div>
      {OverviewData.map((item, index) => (
        <ItemComponentOverview
          index={index}
          step={item?.step}
          title={item?.title}
          subTitle={item?.subTitle}
          icon={item?.icon}
          nameButton={item?.nameButton}
          key={index}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default ComponentOverviewRoom;
