import ComponentHost from "../ComponentHost";
import ComponentFacilities from "./ComponentFacilities";
import ComponentNotificationFacilities from "./ComponentNotificationFacilities";
import FooterHost from "../FooterHost";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";
function FacilitiesHost() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(routesConfig.becomeAHostHotelName);
  };

  const handleContinue = () => {};

  return (
    <ComponentHost
      title='What can guests use at your hotel?'
      componentLeft={<ComponentFacilities />}
      componentRight={<ComponentNotificationFacilities />}
      footer={<FooterHost onBack={handleBack} onContinue={handleContinue} />}
    />
  );
}

export default FacilitiesHost;
