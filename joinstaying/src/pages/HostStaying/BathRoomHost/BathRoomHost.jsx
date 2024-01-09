import { useNavigate } from "react-router-dom";
import ComponentHost from "../ComponentHost";
import FooterHost from "../FooterHost";
import ComponentBathRoom from "./ComponentBathRoom";
import ComponentNotificationBathRoom from "./ComponentNotificationBathRoom";
import routesConfig from "../../../configs/routesConfig";

function BathRoomHost() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(routesConfig.becomeAHostAddRoom);
  };

  const handleContinue = () => {
    navigate(routesConfig.becomeAHostAmenities);
  };

  return (
    <ComponentHost
      title='Bathroom details'
      componentLeft={<ComponentBathRoom />}
      componentRight={<ComponentNotificationBathRoom />}
      footer={<FooterHost onBack={handleBack} onContinue={handleContinue} />}
    />
  );
}

export default BathRoomHost;
