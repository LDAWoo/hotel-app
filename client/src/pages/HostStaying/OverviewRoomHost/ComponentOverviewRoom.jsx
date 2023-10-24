import { OverviewData } from "../../../components/Constants/OverviewHostData";
import ItemComponentOverview from "./ItemComponentOverview";

const ComponentOverviewRoom = () => {
  const handleClick = (e) => {
    console.log(e);
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
