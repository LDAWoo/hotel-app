import ComponentHost from "../ComponentHost";
import ComponentAmenity from "./ComponentAmenity";
import FooterHost from "../FooterHost";
import ComponentNotificationAmenity from "./ComponentNotificationAmenity";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";

function AmenityHost() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(routesConfig.becomeAHostBathRoom);
  };

  const handleContinue = () => {
    navigate(routesConfig.becomeAHostUnitName);
  };
  return <ComponentHost title="What can guests use in this room?" componentLeft={<ComponentAmenity />} componentRight={<ComponentNotificationAmenity />} footer={<FooterHost onBack={handleBack} onContinue={handleContinue} />} />;
}

export default AmenityHost;
