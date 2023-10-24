import ComponentHost from "../ComponentHost";
import ComponentHouseRules from "./ComponentHouseRules";
import ComponentNotificationHouseRules from "./ComponentNotificationHouseRules";
import FooterHost from "../FooterHost";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";

function HouseRules() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(routesConfig.becomeAHostFacilities);
  };

  const handleContinue = () => {
    navigate(routesConfig.becomeAHostOverviewRoom);
  };
  return (
    <ComponentHost
      title='House rules'
      componentLeft={<ComponentHouseRules />}
      componentRight={<ComponentNotificationHouseRules />}
      footer={<FooterHost onBack={handleBack} onContinue={handleContinue} />}
    />
  );
}

export default HouseRules;
