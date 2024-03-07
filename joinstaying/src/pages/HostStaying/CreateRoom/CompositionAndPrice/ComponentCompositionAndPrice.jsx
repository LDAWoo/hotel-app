import { useContext, useEffect, useState } from "react";
import { validateName } from "../../../../Regexs/Validate";
import { getRoomName, getRoomType } from "../../../../api/HostStaying/AddRoomHost";
import { AddRoomData } from "../../../../components/Constants/AddRoomData";
import { UserContext } from "../../../../components/Contexts/AppUserProvider";
import SelectInput from "../../../../components/SelectInput/SelectInput";
import TextError from "../../../../components/TextError/TextError";
import TextInput from "../../../../components/TextInput/TextInput";
import Title from "../../../../components/Title/Title";
import useRegisterCompositionAndPrice from "../../../../hooks/JoinStaying/CreateRoom/CompositionAndPrice/useRegisterCompositionAndPrice";
import BedRoom from "./BedRoom";
import HotelPrice from "./HotelPrice";
import SizeRoom from "./SizeRoom";
import { useTranslation } from "react-i18next";

const ComponentCompositionAndPrice = () => {
  const { roomType, roomName, nameCustom, errorNameCustom, quantityRoom, errorQuantityRoom, roomArea, errorRoomArea, setField } = useRegisterCompositionAndPrice();
  const { t } = useTranslation();
  const [roomsType, setRoomsType] = useState([]);
  const [roomsName, setRoomsName] = useState([]);
  const { token } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getRoomType(token);
        setRoomsType(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getRoomName(token);
        setRoomsName(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    if (roomType && roomType.length === 0) {
      setField("roomType", roomsType[0]?.id);
    }
  }, [roomsType, roomType]);

  useEffect(() => {
    if (roomName && roomName.length === 0) {
      setField("roomName", roomsName[0]?.name);
    }
  }, [roomsName, roomName]);

  const handleSelectRoomType = (value) => {
    setField("roomType", value);
  };

  const handleSelectRoomName = (value) => {
    setField("roomName", value);
  };

  const handleChangeNameCustom = (value) => {
    setField("nameCustom", value);
  };

  const handleChangeQuantityRoom = (value) => {
    const roundedNum = parseInt(value, 10);
    if (value.length > 0) {
      setField("quantityRoom", roundedNum);
    } else {
      setField("quantityRoom", parseInt(0));
    }
  };

  const handleChangeSizeRoom = (value) => {
    const roundedNum = parseInt(value, 10);
    if (value.length > 0) {
      setField("roomArea", roundedNum);
    } else {
      setField("roomArea", parseInt(0));
    }
  };

  const onKeyDownName = (e, value) => {
    if (!validateName(e.key)) {
      e.preventDefault();
    } else if (e.key === " " && value.trim() === "") {
      e.preventDefault();
    }
  };

  const handleKeyDownNumber = (e, value) => {
    if (e.key === "-") {
      e.preventDefault();
    }

    if (e.key === "0" && value === "") {
      e.preventDefault();
    }
  };

  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-1">
          <Title title={t("HostStaying.CreateRoom.items.composition.information.roomType")} fontMedium xl />
          <div className="flex flex-row justify-between space-x-5">
            <div className="flex flex-col gap-2 w-full">
              <SelectInput value={roomType} onChange={(e) => handleSelectRoomType(e.target.value)}>
                {roomsType.map((roomType, index) => (
                  <option key={index} value={roomType?.id}>
                    {roomType.name}
                  </option>
                ))}
              </SelectInput>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Title title={t("HostStaying.CreateRoom.items.composition.information.roomName")} fontMedium xl />
          <div className="flex flex-row justify-between space-x-5">
            <div className="flex flex-col gap-2 w-full">
              <SelectInput value={roomName} onChange={(e) => handleSelectRoomName(e.target.value)}>
                {roomsName.map((roomName, index) => (
                  <option key={index} value={roomName?.name}>
                    {roomName.name}
                  </option>
                ))}
              </SelectInput>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 w-full mb-5">
          <Title title={t("HostStaying.CreateRoom.items.composition.information.optionalName")} fontMedium xl nowrap={false} />
          <TextInput type="text" value={nameCustom} sizeIcon={20} error={errorNameCustom.length > 0} onChange={(e) => handleChangeNameCustom(e.target.value)} onKeyDown={(e) => onKeyDownName(e, nameCustom)} />
          <TextError error={errorNameCustom} />
          <Title title={t("HostStaying.CreateRoom.items.composition.information.subOptionalName")} large nowrap={false} />
        </div>

        <div className="flex flex-col gap-1 mb-5">
          <Title title={t("HostStaying.CreateRoom.items.composition.information.numberOfRoom")} fontMedium xl />
          <TextInput type="text" name="room-type-number" sizeIcon={20} error={errorQuantityRoom.length > 0} value={quantityRoom} onChange={(e) => handleChangeQuantityRoom(e.target.value)} onKeyDown={(e) => handleKeyDownNumber(e, quantityRoom)} />
          <TextError error={errorQuantityRoom} />
        </div>

        <div className="flex flex-col gap-5 mb-5">
          <BedRoom data={AddRoomData[0].data} />
          <SizeRoom onKeyDown={(e) => handleKeyDownNumber(e, roomArea)} error={errorRoomArea} value={roomArea} onChange={(e) => handleChangeSizeRoom(e.target.value)} />
        </div>

        <div>
          <HotelPrice />
        </div>
      </div>
    </div>
  );
};

ComponentCompositionAndPrice.propTypes = {};

export default ComponentCompositionAndPrice;
