import { useTranslation } from "react-i18next";
import useRegisterGuestStore from "../../../hooks/useRegisterGuestStore";
import GuestItem from "./GuestItem";

function GuestAdult() {
  const { t } = useTranslation();
  const { adult, setAdult } = useRegisterGuestStore();

  const handleMinusAdult = () => {
    setAdult(adult - 1);
  };

  const handlePlusAdult = () => {
    setAdult(adult + 1);
  };

  return (
    <GuestItem
      title={t("Search.Guest.Adult.title")}
      value={adult}
      minValue={1}
      maxValue={30}
      handleMinus={handleMinusAdult}
      handlePlus={handlePlusAdult}
    />
  );
}

export default GuestAdult;
