import { useTranslation } from "react-i18next";
import { AiOutlineClose } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useRegisterLocationStore from "../../../hooks/useRegisterLocationStore";
import useRegisterToolTipLocation from "../../../hooks/useRegisterToolTipLocation";
import TitleComponent from "../../TitleComponent/TitleComponent";
import RegisterToolTip from "../../ToolTip/RegisterToolTip/RegisterToolTip";
import ToolTipAlert from "../../ToolTip/ToolTipAlert";
import SearchBox from "../SearchBox/SearchItem";
import LocationMenu from "./LocationMenu";

function LocationBox() {
  const [searchParams] = useSearchParams();
  const currentLocation = searchParams?.get("location")?.split("+").join(" ");
  const { valueLocation, setValueLocation, isOpen } =
    useRegisterLocationStore();
  const { t } = useTranslation();
  const handleChangeInput = (e) => {
    setValueLocation(e.target.value);
  };

  useEffect(() => {
    setValueLocation(currentLocation);
  }, []);

  const handleClose = () => {
    setValueLocation("");
  };

  return (
    <div className='relative w-full'>
      <SearchBox
        input
        placeholder={t("Search.location")}
        icon={SlLocationPin}
        size={14}
        iconClose={AiOutlineClose}
        sizeClose={14}
        value={valueLocation}
        handleChangeInput={handleChangeInput}
        handleClose={handleClose}
      />
      <RegisterToolTip
        userRegisterToolTip={useRegisterToolTipLocation}
        component={<TitleComponent title='Enter destination' />}
        zIndex='z-[999]'
        render={<LocationMenu />}
        width={0}
      />

      <ToolTipAlert
        isOpen={isOpen}
        content='Please enter a destination to start searching.'
      />
    </div>
  );
}

export default LocationBox;
