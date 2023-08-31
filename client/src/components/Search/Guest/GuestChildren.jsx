import { useTranslation } from "react-i18next";
import useRegisterGuestStore from "../../../hooks/useRegisterGuestStore";
import GuestItem from "./GuestItem";
function GuestChildren() {
  const { t } = useTranslation();
  const { child, setChildren } = useRegisterGuestStore();

  const handleMinusChild = () => {
    setChildren(child - 1);
  };

  const handlePlusChild = () => {
    setChildren(child + 1);
  };
  return (
    <GuestItem
      title={t("Search.Guest.Children.title")}
      value={child}
      minValue={0}
      maxValue={10}
      handleMinus={handleMinusChild}
      handlePlus={handlePlusChild}
    />
  );
}

export default GuestChildren;
