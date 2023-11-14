import { useNavigate } from "react-router-dom";
import ComponentHost from "../ComponentHost";
import FooterHost from "../FooterHost";
import ComponentNotificationUnitName from "./ComponentNotificationUnitName";
import ComponentUnitName from "./ComponentUnitName";
import routesConfig from "../../../configs/routesConfig";

function UnitNameHost() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(routesConfig.becomeAHostAmenities);
  };

  const handleContinue = () => {
    navigate(routesConfig.becomeAHostHotelPrice);
  };

  return (
    <ComponentHost
      title='What’s the name of this room?'
      componentLeft={<ComponentUnitName />}
      componentRight={<ComponentNotificationUnitName />}
      footer={<FooterHost onBack={handleBack} onContinue={handleContinue} />}
    />
  );
}

export default UnitNameHost;
