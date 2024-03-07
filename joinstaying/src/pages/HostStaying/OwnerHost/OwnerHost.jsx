import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { putOwnerHotel } from "../../../api/HostStaying/OwnerHost";
import { UserContext } from "../../../components/Contexts/AppUserProvider";
import routesConfig from "../../../configs/routesConfig";
import useRegisterHotelProperty from "../../../hooks/JoinStaying/HotelPropertyHost/useRegisterHotelProperty";
import useRegisterOwner from "../../../hooks/JoinStaying/OwnerHost/useRegisterOwner";
import ComponentHost from "../ComponentHost";
import FooterHost from "../FooterHost";
import ComponentOwnerHost from "./ComponentOwnerHost";

const OwnerHost = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { propertiesValue } = useRegisterHotelProperty();
  const { quantityHotel, activeHotel } = useRegisterOwner();
  const { token } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    navigate(routesConfig.becomeAHostProperty);
  };

  const handleContinue = async () => {
    const newOwner = false;

    if (token) {
      try {
        setLoading(true);
        if (newOwner) {
          const data = {
            hotelTypeId: propertiesValue,
            ownsManyHotel: false,
            quantityHotel: quantityHotel,
          };
          const response = await putOwnerHotel(data, token);
          console.log(response);
        }
        setLoading(false);
        navigate(routesConfig.becomeAHostFeedBack);
      } catch (error) {
        setLoading(false);
      }
    }
  };

  return <ComponentHost loading={loading} classComponent="p-4 gap-5" title={t("HostStaying.Owner.title")} componentLeft={<ComponentOwnerHost />} classFooter="mt-5 2md:mt-0" footer={<FooterHost onBack={handleBack} disabled={activeHotel === ""} onContinue={handleContinue} />} />;
};

export default OwnerHost;
