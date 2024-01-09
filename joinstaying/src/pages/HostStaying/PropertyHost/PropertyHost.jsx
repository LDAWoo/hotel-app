import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";
import ComponentHost from "../ComponentHost";
import FooterHost from "../FooterHost";
import ComponentPropertyHost from "./ComponentPropertyHost";
import useRegisterHotelProperty from "../../../hooks/JoinStaying/HotelPropertyHost/useRegisterHotelProperty";

const PropertyHost = () => {
  const { propertiesValue, setPropertiesValue } = useRegisterHotelProperty();
  const navigate = useNavigate();

  const handleChooseProperty = (property) => {
    setPropertiesValue(property);
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
          active={propertiesValue}
        />
      }
      footer={
        <FooterHost
          onBack={handleBack}
          onContinue={handleContinue}
          disabled={propertiesValue === ""}
        />
      }
    />
  );
};

export default PropertyHost;
