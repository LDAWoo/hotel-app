import { useTranslation } from "react-i18next";
import routesConfig from "../../../../../configs/routesConfig";
import Button from "../../../../Buttons/Button";
function ListYourProperty() {
  const { t } = useTranslation();
  
  const handleClickJoinStaying = () => {
    window.open(
      routesConfig.join,
      "_blank",
    )
  };
  return (
    <Button
      title={t("ListYourProperties.listYourProperties")}
      className={`hidden lg:flex lg:text-white pr-2 pl-2 items-center lg:justify-center w-full h-[38px] lg:h-14 mt-2 mr-2 rounded-md bg-transparent hover:bg-gray-100 lg:hover:bg-hotel-200`}
      fontMedium
      xxl
      onClick={handleClickJoinStaying}
    />
  );
}

export default ListYourProperty;
