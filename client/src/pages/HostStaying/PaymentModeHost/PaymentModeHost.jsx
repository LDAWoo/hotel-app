import ComponentHost from "../ComponentHost";
import ComponentPaymentMode from "./ComponentPaymentMode";
import FooterHost from "../FooterHost";
import ComponentNotificationPayment from "./ComponentNotificationPayment";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";

const PaymentModeHost = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    window.history.back();
  };

  const handleContinue = () => {
    navigate(routesConfig.becomeAHostInvoicing);
  };

  return (
    <ComponentHost
      title='Payments'
      componentLeft={<ComponentPaymentMode />}
      componentRight={<ComponentNotificationPayment />}
      footer={<FooterHost onBack={handleBack} onContinue={handleContinue} />}
    />
  );
};

export default PaymentModeHost;
