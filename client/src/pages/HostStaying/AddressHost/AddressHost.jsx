import ComponentHost from "../ComponentHost";
import ComponentAddRess from "./ComponentAddRess";
import ComponentNotificationAddRess from "./ComponentNotificationAddRess";
import FooterHost from "../FooterHost";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";

const AddRessHost = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(routesConfig.becomeAHostFeedBack);
  };

  const handleContinue = () => {
    navigate(routesConfig.becomeAHostMap);
  };

  return (
    <ComponentHost
      title="Where is the property you're listing?"
      componentLeft={<ComponentAddRess />}
      componentRight={<ComponentNotificationAddRess />}
      footer={<FooterHost onBack={handleBack} onContinue={handleContinue} />}
    />
  );
};

export default AddRessHost;
