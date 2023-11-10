import ComponentHost from "../ComponentHost";
import ComponentPartner from "./ComponentPartner";
import FooterHost from "../FooterHost";
import { useNavigate } from "react-router-dom";

import routesConfig from "../../../configs/routesConfig";

const PartnerHost = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    window.history.back();
  };

  const handleContinue = () => {
    navigate(routesConfig.becomeAHostHotelName);
  };

  return (
    <ComponentHost
      title='Partner verification'
      componentLeft={<ComponentPartner />}
      componentRight
      footer={<FooterHost onBack={handleBack} onContinue={handleContinue} />}
    />
  );
};

export default PartnerHost;
