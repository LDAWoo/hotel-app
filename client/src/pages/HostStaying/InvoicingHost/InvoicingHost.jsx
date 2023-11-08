import ComponentHost from "../ComponentHost";
import FooterHost from "../FooterHost";
import ComponentInvoicing from "./ComponentInvoicing";

const InvoicingHost = () => {
  const handleBack = () => {
    window.history.back();
  };

  const handleContinue = () => {};

  return (
    <ComponentHost
      title='Invoicing'
      componentLeft={<ComponentInvoicing />}
      componentRight
      footer={<FooterHost onBack={handleBack} onContinue={handleContinue} />}
    />
  );
};

export default InvoicingHost;
