import ComponentHost from "../ComponentHost";
import FooterHost from "../FooterHost";
import ComponentAddRoom from "./ComponentAddRoom";
import ComponentNotificationAddRoom from "./ComponentNotificationAddRoom";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";

function AddRoomHost() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(routesConfig.becomeAHostOverviewRoom);
  };

  const handleContinue = () => {
    navigate(routesConfig.becomeAHostBathRoom);
  };

  return (
    <ComponentHost
      title='Room details'
      componentLeft={<ComponentAddRoom />}
      componentRight={<ComponentNotificationAddRoom />}
      footer={<FooterHost onBack={handleBack} onContinue={handleContinue} />}
    />
  );
}

export default AddRoomHost;
