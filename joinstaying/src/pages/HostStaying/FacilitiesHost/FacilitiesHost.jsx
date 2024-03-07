import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postFacilities } from "../../../api/HostStaying/FacilitiesHost";
import routesConfig from "../../../configs/routesConfig";
import useRegisterExtraBed from "../../../hooks/JoinStaying/FacilitiesHost/useRegisterExtraBed";
import useRegisterFacilities from "../../../hooks/JoinStaying/FacilitiesHost/useRegisterFacilities";
import ComponentHost from "../ComponentHost";
import FooterHost from "../FooterHost";
import ComponentFacilities from "./ComponentFacilities";
import ComponentNotificationFacilities from "./ComponentNotificationFacilities";
import { UserContext } from "../../../components/Contexts/AppUserProvider";

function FacilitiesHost() {
  const { facilities } = useRegisterFacilities();
  const navigate = useNavigate();
  const { token } = useContext(UserContext);
  const handleBack = () => {
    navigate(routesConfig.becomeAHostHotelName);
  };

  const { extraBed, checkedType } = useRegisterExtraBed();

  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    const data = {
      extraBed: extraBed,
      childrenSleepInCribs: checkedType[0]?.checked,
      typeOfGuestChildren: checkedType[1]?.checked,
      priceGuestChildren: checkedType[1]?.price,
      childrenOld: checkedType[1]?.old,
      typeOfGuestAdults: checkedType[2]?.checked,
      priceGuestAdults: checkedType[2]?.price,
      serviceAndAmenityId: facilities,
    };

    console.log(data);
    if (token) {
      try {
        setLoading(true);
        const response = await postFacilities(data, token);
        console.log(response);
      } catch (error) {
        console.error("Request Error:", error);
        console.log("Response Data:", error.response.data);
      } finally {
        setLoading(false);
      }
    }

    if (!loading) navigate(routesConfig.becomeAHostHouseRules);
  };

  return <ComponentHost title="What can guests use at your hotel?" componentLeft={<ComponentFacilities />} componentRight={<ComponentNotificationFacilities />} footer={<FooterHost onBack={handleBack} onContinue={handleContinue} disabled={facilities.length === 0} />} loading={loading} />;
}

export default FacilitiesHost;
