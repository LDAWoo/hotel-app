import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAddHotelName } from "../../../api/HostStaying/HotelName";
import { UseToken } from "../../../components/Contexts/AppTokenProvider";
import routesConfig from "../../../configs/routesConfig";
import useRegisHotelAddRess from "../../../hooks/JoinStaying/AddRessHost/useRegisterAddRess";
import useRegisterHotelName from "../../../hooks/JoinStaying/HotelNameHost/useRegisterHotelName";
import useRegisterHotelProperty from "../../../hooks/JoinStaying/HotelPropertyHost/useRegisterHotelProperty";
import ComponentHost from "../ComponentHost";
import FooterHost from "../FooterHost";
import ComponentHotelName from "./ComponentHotelName";

function HotelNameHost() {
  const navigate = useNavigate();
  const { propertiesValue } = useRegisterHotelProperty();

  const { country, streetAddress, districtAddress, city, postalCode } =
    useRegisHotelAddRess();

  const { name, rating } = useRegisterHotelName();

  const { token } = useContext(UseToken);

  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    navigate(routesConfig.becomeAHostMap);
  };

  const data = {
    hotelTypeId: propertiesValue,
    name: name,
    rating: rating,
    contactPerson: "Vu Lee",
    phoneNumber: "0352843864",
    phoneNumberTwo: "01887983017",
    managerHotel: false,
    streetAddress: streetAddress,
    districtAddress: districtAddress,
    country: country,
    city: city,
    postalCode: postalCode,
    quantityHotel: 2,
  };

  const handleContinue = async () => {
    setLoading(true);
    try {
      await postAddHotelName(data, token);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    if (!loading) {
      navigate(routesConfig.becomeAHostFacilities);
    }
  };
  return (
    <ComponentHost
      title='Tell us about your hotel'
      componentLeft={<ComponentHotelName />}
      componentRight={<div></div>}
      footer={
        <FooterHost
          onBack={handleBack}
          onContinue={handleContinue}
          disabled={name === ""}
        />
      }
      loading={loading}
    />
  );
}

export default HotelNameHost;
