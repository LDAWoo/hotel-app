import ComponentHost from "../ComponentHost";
import ComponentHotelPriceOverview from "./ComponentHotelPriceOverview";
import FooterHost from "../FooterHost";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";

const HotelPriceOverviewHost = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    window.history.back();
  };

  const handleContinue = () => {
    navigate(routesConfig.becomeAHostOverviewRoom);
  };

  return (
    <ComponentHost
      title='Rate plan'
      componentLeft={<ComponentHotelPriceOverview />}
      componentRight
      footer={<FooterHost onBack={handleBack} onContinue={handleContinue} />}
    />
  );
};

export default HotelPriceOverviewHost;
