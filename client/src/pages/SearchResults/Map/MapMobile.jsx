import { BsFillMapFill } from "react-icons/bs";
import Button from "../../../components/Buttons/Button";
import useRegisterModalMap from "../../../hooks/useRegisterModalMap";
import { useTranslation } from "react-i18next";

function MapMobile() {
  const { onOpen } = useRegisterModalMap();
  const {t} = useTranslation()
  const handleShowMap = () => {
    onOpen();
  };
  return (
    <Button
      className='w-full text-hotel-50 hover:bg-hotel-25 pt-2 pb-2  justify-center'
      title={t("SearchResults.map.title")}
      icon={BsFillMapFill}
      size={14}
      xl
      onClick={handleShowMap}
    />
  );
}

export default MapMobile;
