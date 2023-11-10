import routesConfig from "../../../configs/routesConfig";
import ComponentHost from "../ComponentHost";
import FooterHost from "../FooterHost";
import ComponentInvoicing from "./ComponentInvoicing";
import { useNavigate } from "react-router-dom";

const InvoicingHost = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    window.history.back();
  };

  const handleContinue = () => {
    navigate(routesConfig.becomeAHostPartner);
  };

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
