import ComponentHost from "../ComponentHost";
import ComponentCalendarSync from "./ComponentCalendarSync";
import FooterHost from "../FooterHost";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";

const CalendarSyncHost = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    window.history.back();
  };

  const handleContinue = () => {
    navigate(routesConfig.becomeAHostPaymentMode);
  };

  return (
    <ComponentHost
      title='Availability'
      componentLeft={<ComponentCalendarSync />}
      componentRight
      footer={<FooterHost onBack={handleBack} onContinue={handleContinue} />}
    />
  );
};

export default CalendarSyncHost;
