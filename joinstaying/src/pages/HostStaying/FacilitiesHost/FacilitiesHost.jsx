import ComponentHost from "../ComponentHost";
import ComponentFacilities from "./ComponentFacilities";
import ComponentNotificationFacilities from "./ComponentNotificationFacilities";
import FooterHost from "../FooterHost";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";
import useRegisterFacilities from "../../../hooks/JoinStaying/FacilitiesHost/useRegisterFacilities";
function FacilitiesHost() {
  const { facilities } = useRegisterFacilities();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(routesConfig.becomeAHostHotelName);
  };

  const handleContinue = () => {
    const fetchData = async () => {
      // const response = await postFacilities()
    };

    navigate(routesConfig.becomeAHostHouseRules);
  };

  return (
    <ComponentHost
      title='What can guests use at your hotel?'
      componentLeft={<ComponentFacilities />}
      componentRight={<ComponentNotificationFacilities />}
      footer={
        <FooterHost
          onBack={handleBack}
          onContinue={handleContinue}
          disabled={facilities.length === 0}
        />
      }
    />
  );
}

export default FacilitiesHost;
