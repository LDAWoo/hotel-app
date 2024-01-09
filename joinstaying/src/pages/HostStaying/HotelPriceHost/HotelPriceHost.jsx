import ComponentHost from "../ComponentHost";
import FooterHost from "../FooterHost";
import ComponentHotelPrice from "./ComponentHotelPrice";
import ComponentNotificationHotelPrice from "./ComponentNotificationHotelPrice";
import useRegisterHotelPriceValue from "../../../hooks/JoinStaying/HotelPriceHost/useRegisterHotelPriceValue";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";

const HotelPriceHost = () => {
  const navigate = useNavigate();
  const { value } = useRegisterHotelPriceValue();

  const handleBack = () => {
    window.history.back();
  };

  const handleContinue = () => {
    navigate(routesConfig.becomeAHostHotelPriceOverview);
  };

  return (
    <ComponentHost
      title='Set the price per night for this room'
      componentLeft={<ComponentHotelPrice />}
      componentRight={<ComponentNotificationHotelPrice />}
      footer={
        <FooterHost
          onBack={handleBack}
          onContinue={handleContinue}
          disabled={value < 1}
        />
      }
    />
  );
};

export default HotelPriceHost;
