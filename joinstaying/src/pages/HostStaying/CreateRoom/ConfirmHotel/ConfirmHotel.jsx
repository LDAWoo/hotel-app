import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postConfirmHotel } from "../../../../api/HostStaying/ConfirmHotel";
import { UserContext } from "../../../../components/Contexts/AppUserProvider";
import Title from "../../../../components/Title/Title";
import routesConfig from "../../../../configs/routesConfig";
import useRegisterConfirmHotel from "../../../../hooks/JoinStaying/CreateRoom/ConfirmHotel/useRegisterConfirmHotel";
import useRegisterCreateRoom from "../../../../hooks/JoinStaying/CreateRoom/useRegisterCreateRoom";
import ComponentHost from "../../ComponentHost";
import FooterHost from "../../FooterHost";
import ComponentConfirmHotel from "./ComponentConfirmHotel";
import { useTranslation } from "react-i18next";
import useRegisterExtraBed from "../../../../hooks/JoinStaying/FacilitiesHost/useRegisterExtraBed";
import useRegisterFacilities from "../../../../hooks/JoinStaying/FacilitiesHost/useRegisterFacilities";
import useRegisterAddRess from "../../../../hooks/JoinStaying/AddRessHost/useRegisterAddRess";
import useRegisterHotelName from "../../../../hooks/JoinStaying/HotelNameHost/useRegisterHotelName";

const ConfirmHotel = () => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const { token, sessionToken } = useContext(UserContext);
  const { statusConfirm } = useRegisterConfirmHotel();
  const { setComplete } = useRegisterCreateRoom();

  const { resetAllAddress } = useRegisterAddRess();
  const { resetAllHotelName } = useRegisterHotelName();
  const { resetAllFacilities } = useRegisterFacilities();
  const { resetAllExtraBed } = useRegisterExtraBed();

  const navigate = useNavigate();

  const handleSaveAndChange = async () => {
    try {
      const data = {};
      statusConfirm.map((s) => {
        data[s.id] = true;
      });
      setLoading(true);
      await postConfirmHotel(data, token, sessionToken);
      setLoading(false);
      setComplete("completeConfirm", true);
      navigate(`${routesConfig.becomeAHostThankYou}${`?token=${sessionToken}`}`);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    statusConfirm && statusConfirm.length > 1 ? setDisabled(false) : setDisabled(true);
  }, [statusConfirm]);
  return (
    <div className="flex flex-col">
      <div className="p-4 gap-4 flex flex-col">
        <div className="flex flex-col">
          <Title title={t("HostStaying.CreateRoom.items.confirm.name")} nowrap={false} fontBold extraLarge4 colorTitle="dark:text-white" />
          <Title title={t("HostStaying.CreateRoom.items.confirm.title")} nowrap={false} xl />
        </div>
      </div>

      <ComponentHost componentLeft={<ComponentConfirmHotel />} footer={<FooterHost disabled={disabled || loading} onContinue={handleSaveAndChange} />} loading={loading} />
    </div>
  );
};

ConfirmHotel.propTypes = {};

export default ConfirmHotel;
