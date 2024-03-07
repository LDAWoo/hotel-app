import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAddHotelName } from "../../../api/HostStaying/HotelName";
import { UserContext } from "../../../components/Contexts/AppUserProvider";
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
  const { country, streetAddress, districtAddress, city, postalCode } = useRegisHotelAddRess();

  const { hotelName, rating, managerHotel, contactPerson, phoneNumberOne, phoneNumberTwo } = useRegisterHotelName();

  const { token } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    navigate(routesConfig.becomeAHostMap);
  };

  const handleContinue = async () => {
    const data = {
      hotelTypeId: propertiesValue,
      name: hotelName,
      rating: rating,
      contactPerson: contactPerson,
      phoneNumber: phoneNumberOne,
      phoneNumberTwo: phoneNumberTwo,
      managerHotel: managerHotel,
      streetAddress: streetAddress,
      districtAddress: districtAddress,
      country: country,
      city: city,
      postalCode: postalCode,
      quantityHotel: 2,
    };
    console.log(data);
    setLoading(true);

    if (token) {
      try {
        const response = await postAddHotelName(data, token);
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

      if (!loading) {
        navigate(routesConfig.becomeAHostFacilities);
      }
    }
  };
  return <ComponentHost title="Tell us about your hotel" componentLeft={<ComponentHotelName />} componentRight={<div></div>} footer={<FooterHost onBack={handleBack} onContinue={handleContinue} disabled={hotelName === ""} />} loading={loading} />;
}

export default HotelNameHost;
