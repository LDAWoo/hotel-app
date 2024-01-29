import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { putOwnerHotel } from "../../../api/HostStaying/OwnerHost";
import { UseToken } from "../../../components/Contexts/AppTokenProvider";
import routesConfig from "../../../configs/routesConfig";
import useRegisterFeedBack from "../../../hooks/JoinStaying/FeedBackHost/useRegisterFeedBack";
import useRegisterHotelProperty from "../../../hooks/JoinStaying/HotelPropertyHost/useRegisterHotelProperty";
import useRegisterOwner from "../../../hooks/JoinStaying/OwnerHost/useRegisterOwner";
import ComponentHost from "../ComponentHost";
import FooterHost from "../FooterHost";
import ComponentOwnerHost from "./ComponentOwnerHost";

const OwnerHost = () => {
  const navigate = useNavigate();
  const { token } = useContext(UseToken);

  const { setValueFeedBack } = useRegisterFeedBack();
  const { propertiesValue } = useRegisterHotelProperty();
  const { quantityHotel, activeHotel } = useRegisterOwner();

  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    navigate(routesConfig.becomeAHostProperty);
  };

  const handleContinue = async () => {
    const data = {
      hotelTypeId: propertiesValue,
      ownsManyHotel: false,
      quantityHotel: quantityHotel,
    };
    console.log(data);

    if (token) {
      try {
        setLoading(true);
        const response = await putOwnerHotel(data, token);
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    navigate(routesConfig.becomeAHostFeedBack);
  };

  return <ComponentHost loading={loading} classComponent="p-4 gap-5" title="How many hotels are you listing?" componentLeft={<ComponentOwnerHost />} classFooter="mt-5 2md:mt-0" footer={<FooterHost onBack={handleBack} disabled={activeHotel === ""} onContinue={handleContinue} />} />;
};

export default OwnerHost;
