import ComponentHost from "../ComponentHost";
import ComponentOverviewRoom from "./ComponentOverviewRoom";

const OverviewRoomHost = () => {
  return <ComponentHost componentLeft={<ComponentOverviewRoom />} />;
};

export default OverviewRoomHost;
