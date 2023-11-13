import ComponentHost from "../ComponentHost";
import ComponentAddRess from "./ComponentAddRess";
import ComponentNotificationAddRess from "./ComponentNotificationAddRess";
import FooterHost from "../FooterHost";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";
import useRegisterAddRess from "../../../hooks/JoinStaying/AddRessHost/useRegisterAddRess";

const AddRessHost = () => {
  const navigate = useNavigate();
  const { country, streetAddress } = useRegisterAddRess();

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
      footer={
        <FooterHost
          onBack={handleBack}
          onContinue={handleContinue}
          disabled={country === "" || streetAddress === ""}
        />
      }
    />
  );
};

export default AddRessHost;
