import { useTranslation } from "react-i18next";
import { MdOutlineAddHome } from "react-icons/md";
import routesConfig from "../../../../../configs/routesConfig";
import useRegisterToolTipMenuMore from "../../../../../hooks/useRegisterToolTipMenuMore";
import MenuButton from "./MenuButton";

function ListYourProperty() {
  const { onClose } = useRegisterToolTipMenuMore();
  const { t } = useTranslation();
  const handleClickJoinStaying = () => {
    window.open(
      routesConfig.join,
      "_blank"
    )
    onClose();
  };
  return (
    <MenuButton
      title={t("ListYourProperties.listYourProperties")}
      className='dark:text-white'
      icon={MdOutlineAddHome}
      size={20}
      onClick={handleClickJoinStaying}
    />
  );
}

export default ListYourProperty;
