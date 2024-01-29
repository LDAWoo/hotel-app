import { OverviewData } from "../../../components/Constants/OverviewHostData";
import ItemComponentOverview from "./ItemComponentOverview";
import { useNavigate } from "react-router-dom";
const ComponentOverviewRoom = () => {
  const navigate = useNavigate();
  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <div>
      {OverviewData.map((item, index) => (
        <ItemComponentOverview index={index} item={item} key={index} onClick={handleClick} />
      ))}
    </div>
  );
};

export default ComponentOverviewRoom;
