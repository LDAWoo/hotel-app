import ComponentHost from "../ComponentHost";
import ComponentMap from "./ComponentMap";
import FooterHost from "../FooterHost";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";

const MapHost = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(routesConfig.becomeAHostAddRess);
  };
  const handleContinue = () => {
    navigate(routesConfig.becomeAHostHotelName);
  };

  return (
    <ComponentHost
      title='Pin the location of your property'
      componentLeft={<ComponentMap />}
      componentRight={<div></div>}
      footer={<FooterHost onBack={handleBack} onContinue={handleContinue} />}
    />
  );
};

export default MapHost;
