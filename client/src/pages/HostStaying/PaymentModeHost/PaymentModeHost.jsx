import ComponentHost from "../ComponentHost";
import ComponentPaymentMode from "./ComponentPaymentMode";
import FooterHost from "../FooterHost";
import ComponentNotificationPayment from "./ComponentNotificationPayment";

const PaymentModeHost = () => {
  const handleBack = () => {
    window.history.back();
  };

  const handleContinue = () => {};
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
