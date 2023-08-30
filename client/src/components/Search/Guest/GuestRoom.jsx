import GuestItem from "./GuestItem";
import { useTranslation } from "react-i18next";
import useRegisterGuestStore from "../../../hooks/useRegisterGuestStore";

function GuestRoom() {
  const { t } = useTranslation();
  const { rooms, setRooms } = useRegisterGuestStore();

  const handleMinusRoom = () => {
    setRooms(rooms - 1);
  };

  const handlePlusRoom = () => {
    setRooms(rooms + 1);
  };

  return (
    <GuestItem
      title={t("Search.Guest.Room.title")}
      value={rooms}
      minValue={1}
      maxValue={30}
      handleMinus={handleMinusRoom}
      handlePlus={handlePlusRoom}
    />
  );
}

export default GuestRoom;
