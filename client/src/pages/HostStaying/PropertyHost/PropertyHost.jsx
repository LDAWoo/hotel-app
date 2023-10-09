import { useState } from "react";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";
import ComponentHost from "../ComponentHost";
import FooterHost from "../FooterHost";
import ComponentPropertyHost from "./ComponentPropertyHost";

const PropertyHost = () => {
  const [activeProperty, setActiveProperty] = useState("");
  const navigate = useNavigate();

  const handleChooseProperty = (property) => {
    setActiveProperty(property);
  };

  const handleBack = () => {
    navigate(routesConfig.becomeAHostCategory);
  };

  const handleContinue = () => {
    navigate(routesConfig.becomeAHostOwner);
  };

  return (
    <ComponentHost
      title='From the list below, which property category is most similar to your place?'
      classComponentLeft='p-0'
      componentLeft={
        <ComponentPropertyHost
          onClick={handleChooseProperty}
          active={activeProperty}
        />
      }
      footer={<FooterHost onBack={handleBack} onContinue={handleContinue} />}
    />
  );
};

export default PropertyHost;
