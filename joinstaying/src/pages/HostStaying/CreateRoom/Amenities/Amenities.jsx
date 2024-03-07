import { useContext, useState } from "react";
import { postFacilities } from "../../../../api/HostStaying/FacilitiesHost";
import { UserContext } from "../../../../components/Contexts/AppUserProvider";
import Title from "../../../../components/Title/Title";
import useRegisterExtraBed from "../../../../hooks/JoinStaying/FacilitiesHost/useRegisterExtraBed";
import useRegisterFacilities from "../../../../hooks/JoinStaying/FacilitiesHost/useRegisterFacilities";
import ComponentHost from "../../ComponentHost";
import FooterHost from "../../FooterHost";
import ComponentAmenities from "./ComponentAmenities";
import ComponentNotificationFacilities from "./ComponentNotificationFacilities";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../../configs/routesConfig";
import useRegisterCreateRoom from "../../../../hooks/JoinStaying/CreateRoom/useRegisterCreateRoom";
import { useTranslation } from "react-i18next";

const Amenities = () => {
  const { t } = useTranslation();
  const { token, sessionToken } = useContext(UserContext);
  const { facilities } = useRegisterFacilities();
  const { checkedType, extraBed } = useRegisterExtraBed();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setComplete } = useRegisterCreateRoom();

  const handleSaveAndContinue = async () => {
    const data = {
      extraBed: extraBed,
      childrenSleepInCribs: checkedType[0]?.checked,
      typeOfGuestChildren: checkedType[1]?.checked,
      childrenOld: checkedType[1]?.old,
      priceGuestChildren: checkedType[1]?.price,
      typeOfGuestAdults: checkedType[2]?.checked,
      priceGuestAdults: checkedType[2]?.price,
      serviceAndAmenityId: facilities,
    };

    try {
      setLoading(true);
      await postFacilities(data, token, sessionToken);
      setLoading(false);
      setComplete("completeAmenities", true);
      navigate(`${routesConfig.becomeAHostCreateRoom}${`?token=${sessionToken}&source=photos`}`);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleBack = () => {
    navigate(`${routesConfig.becomeAHostCreateRoom}${`?token=${sessionToken}&source=composition`}`);
  };

  return (
    <div className="flex flex-col">
      <div className="p-4 gap-4 flex flex-col">
        <div className="flex flex-col">
          <Title title={t("HostStaying.CreateRoom.items.amenities.name")} nowrap={false} fontBold extraLarge4 colorTitle="dark:text-white" />
          <Title title={t("HostStaying.CreateRoom.items.amenities.subTitle")} nowrap={false} xl />
        </div>
      </div>

      <ComponentHost componentLeft={<ComponentAmenities />} componentRight={<ComponentNotificationFacilities />} footer={<FooterHost disabled={loading || facilities.length === 0} onContinue={handleSaveAndContinue} onBack={handleBack} />} loading={loading} />
    </div>
  );
};

Amenities.propTypes = {};

export default Amenities;
