import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";
import ComponentHost from "../ComponentHost";
import FooterHost from "../FooterHost";
import ComponentPropertyHost from "./ComponentPropertyHost";
import useRegisterHotelProperty from "../../../hooks/JoinStaying/HotelPropertyHost/useRegisterHotelProperty";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { postHotelProperty } from "../../../api/HostStaying/HotelPropertyHost";
import { UserContext } from "../../../components/Contexts/AppUserProvider";
import setCookie from "../../../hooks/useRegisterSetCookie";
import removeCookie from "../../../hooks/useRegisterRemoveCookie";

const PropertyHost = () => {
  const { propertiesValue, setPropertiesValue } = useRegisterHotelProperty();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { token, setSessionToken } = useContext(UserContext);

  const handleChooseProperty = (property) => {
    setPropertiesValue(property);
  };

  const handleBack = () => {
    navigate(routesConfig.becomeAHostCategory);
  };

  const handleContinue = async () => {
    try {
      setLoading(true);
      const data = {
        hotelTypeId: propertiesValue,
      };
      const response = await postHotelProperty(data, token);
      removeCookie("sessionJwtToken");
      setCookie("sessionJwtToken", response.data);
      setSessionToken(response.data);
      setLoading(false);
      navigate(routesConfig.becomeAHostOwner);
    } catch (e) {
      setLoading(true);
    }
  };

  return <ComponentHost title={t("HostStaying.Property.title")} loading={loading} classComponentLeft="p-0" componentLeft={<ComponentPropertyHost onClick={handleChooseProperty} active={propertiesValue} />} footer={<FooterHost onBack={handleBack} onContinue={handleContinue} disabled={propertiesValue === 0} />} />;
};

export default PropertyHost;
