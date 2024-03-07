import { useEffect, useState } from "react";
import Title from "../../../../components/Title/Title";
import useRegisterCompositionAndPrice from "../../../../hooks/JoinStaying/CreateRoom/CompositionAndPrice/useRegisterCompositionAndPrice";
import ComponentHost from "../../ComponentHost";
import FooterHost from "../../FooterHost";
import ComponentCompositionAndPrice from "./ComponentCompositionAndPrice";
import CurrentRoom from "./CurrentRoom";
import ComponentNotificationGroup from "./ComponentNotificationGroup";
import { useTranslation } from "react-i18next";
import { validateNameLength } from "../../../../Regexs/Validate";
const CompositionAndPrice = () => {
  const { t, i18n } = useTranslation();
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const { rooms, roomType, roomName, nameCustom, quantityRoom, roomArea, maxOccupancy, bedName, pricePerNight, setField } = useRegisterCompositionAndPrice();

  const [active, setActive] = useState(false);

  const validate = (prevState) => {
    let isValid = true;

    if (!validateNameLength(prevState.nameCustom) && prevState.nameCustom.length > 0) {
      setField("errorNameCustom", t("HostStaying.CreateRoom.Error.composition.errors.optionalNameNotName"));
      isValid = false;
    } else {
      setField("errorNameCustom", "");
    }

    if (prevState.quantityRoom === 0 || prevState.quantityRoom === "") {
      setField("errorQuantityRoom", t("HostStaying.CreateRoom.Error.composition.errors.quantityRoomNotGreaterThan"));
      isValid = false;
    } else {
      setField("errorQuantityRoom", "");
    }

    if (prevState.roomArea === 0 || prevState.roomArea === "") {
      setField("errorRoomArea", t("HostStaying.CreateRoom.Error.composition.errors.roomSizeNotGreaterThan"));
      isValid = false;
    } else {
      setField("errorRoomArea", "");
    }

    if (prevState.pricePerNight < 1 || prevState.pricePerNight === "") {
      setField("errorPricePerNight", t("HostStaying.CreateRoom.Error.composition.errors.priceNotGreaterThan"));
      isValid = false;
    } else {
      setField("errorPricePerNight", "");
    }

    return isValid;
  };

  const checkValidateCompositionAndPrice = () => {
    return validate({ nameCustom, quantityRoom, roomArea, pricePerNight });
  };

  useEffect(() => {
    checkValidateCompositionAndPrice();
  }, [i18n.language]);

  useEffect(() => {
    checkValidateCompositionAndPrice() ? setDisabled(false) : setDisabled(true);
  }, [nameCustom, quantityRoom, roomArea, pricePerNight]);

  const handleAddNewRoom = () => {
    setActive(true);
  };

  const handleAddRoom = () => {
    setField("rooms", { roomType, roomName, nameCustom, quantityRoom, roomArea, maxOccupancy, bedName, pricePerNight });
    setActive(false);
  };

  const handleEdit = () => {
    setActive(true);
  };

  const handleDelete = () => {
    setField("rooms", {});
    handleResetField();
  };

  const handlePrev = () => {
    setActive(false);
  };

  const handleResetField = () => {
    setField("roomType", "");
    setField("roomName", "");
    setField("nameCustom", "");
    setField("quantityRoom", 0);
    setField("roomArea", 0);
    setField("maxOccupancy", 0);
    setField("pricePerNight", 0);
  };

  return (
    <div className="flex flex-col">
      <div className="p-4 gap-4 flex flex-col">
        <div className="flex flex-col">
          <Title title={t("HostStaying.CreateRoom.items.composition.name")} nowrap={false} fontBold extraLarge4 colorTitle="dark:text-white" />
          <Title title={t("HostStaying.CreateRoom.items.composition.subTitle")} nowrap={false} xl />
        </div>

        {!active && <CurrentRoom room={rooms} loading={loading} setLoading={setLoading} handleEdit={handleEdit} handleDelete={handleDelete} handleAddNewRoom={handleAddNewRoom} />}
      </div>

      <ComponentHost componentLeft={active && <ComponentCompositionAndPrice />} componentRight={active && <ComponentNotificationGroup />} footer={active && <FooterHost onBack={handlePrev} onContinue={handleAddRoom} disabled={disabled} />} loading={loading} />
    </div>
  );
};

CompositionAndPrice.propTypes = {};

export default CompositionAndPrice;
