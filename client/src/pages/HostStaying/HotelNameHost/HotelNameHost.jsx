import ComponentHost from "../ComponentHost";
import ComponentHotelName from "./ComponentHotelName";
import FooterHost from "../FooterHost";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";

function HotelNameHost() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(routesConfig.becomeAHostMap);
  };

  const handleContinue = () => {
    navigate(routesConfig.becomeAHostFacilities);
  };
  return (
    <ComponentHost
      title='Tell us about your hotel'
      componentLeft={<ComponentHotelName />}
      componentRight={<div></div>}
      footer={<FooterHost onBack={handleBack} onContinue={handleContinue} />}
    />
  );
}

export default HotelNameHost;
