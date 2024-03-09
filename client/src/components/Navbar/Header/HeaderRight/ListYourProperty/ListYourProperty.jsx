import { useNavigate } from "react-router-dom";
import Button from "../../../../Buttons/Button";
import routesConfig from "../../../../../configs/routesConfig";
import { useTranslation } from "react-i18next";
import useRegisterToolTipMenuMore from "../../../../../hooks/useRegisterToolTipMenuMore";
function ListYourProperty() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isOpen } = useRegisterToolTipMenuMore();
  const handleClickJoinStaying = () => {
    navigate(routesConfig.join);
  };
  return (
    <Button
      title={t("ListYourProperties.listYourProperties")}
      className={`lg:text-white pr-2 pl-2 items-center lg:justify-center w-full h-[38px] lg:h-14 mt-2 mr-2 rounded-md bg-transparent hover:bg-gray-100 lg:hover:bg-hotel-200 ${
        isOpen ? "flex" : "hidden lg:flex"
      }`}
      fontMedium
      xxl
      onClick={handleClickJoinStaying}
    />
  );
}

export default ListYourProperty;
