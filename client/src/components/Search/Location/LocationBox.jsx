import { useTranslation } from "react-i18next";
import { AiOutlineClose } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";

import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useRegisterAutoCompletePlace from "../../../hooks/Map/useRegisterAutoCompletePlace";
import useRegisterLocationStore from "../../../hooks/useRegisterLocationStore";
import useRegisterToolTipLocation from "../../../hooks/useRegisterToolTipLocation";
import AutoCompletePlace from "../../AutoCompletePlace/AutoCompletePlace";
import TitleComponent from "../../TitleComponent/TitleComponent";
import RegisterToolTip from "../../ToolTip/RegisterToolTip/RegisterToolTip";
import ToolTipAlert from "../../ToolTip/ToolTipAlert";
import SearchBox from "../SearchBox/SearchItem";
import LocationSearch from "./LocationSearch";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";

function LocationBox({onKeyDown}) {
  const [searchParams] = useSearchParams();
  const currentLocation = searchParams?.get("location")?.split("+").join(" ");
  const { valueLocation, setValueLocation, isOpen, onCloseAlert } =
    useRegisterLocationStore();
  const { t } = useTranslation();
  const {onOpen: openToolTipLocation} = useRegisterToolTipLocation()
  const {isOpen: open, onOpen,onClose} = useRegisterAutoCompletePlace()
  const {width} = useRegisterWindowSizeStore()

  const handleChangeInput = (e) => {
    setValueLocation(e.target.value);
  };

  useEffect(() => {
    setValueLocation(currentLocation);
  }, []);

  const handleClose = () => {
    setValueLocation("");
  };

  const handleKeydown = () => {
    onKeyDown();
  }

  const handleFocus = () => {
    onOpen();
    onCloseAlert();
    openToolTipLocation();
  }

  const handleClickLocation = (location) => {
    setValueLocation(location.name);
    if(width < 1024){
      onKeyDown();
    }
    onClose();
  }

  return (
    <div className='relative w-full'>
      <AutoCompletePlace 
        isOpen={open && width >= 1024}
        onClose={onClose}
        popular
        address={valueLocation}
        onClick={handleClickLocation}
        width={420}
        >
        <SearchBox
          onFocus={handleFocus}
          input
          placeholder={t("Search.location")}
          icon={SlLocationPin}
          size={14}
          iconClose={AiOutlineClose}
          sizeClose={14}
          value={valueLocation}
          handleChangeInput={handleChangeInput}
          handleClose={handleClose}
          componentError={
            <ToolTipAlert
              isOpen={isOpen}
              content={t("Error.Search.locationNotBlank")}
            />
          }
          onKeyDown={handleKeydown}
        />
      </AutoCompletePlace>
      <RegisterToolTip
        userRegisterToolTip={useRegisterToolTipLocation}
        component={<TitleComponent title={t("Search.title")} />}
        zIndex='z-[999]'
        render={
          <AutoCompletePlace 
            className="bg-white"
            clickOutside={false}
            isOpen={open}
            onClose={onClose}
            popular
            address={valueLocation}
            onClick={handleClickLocation}
            width={10}
          >
            <LocationSearch onKeyDown={handleKeydown}/>
          </AutoCompletePlace>}
        width={0}
      />
    </div>
  );
}

LocationBox.propTypes = {
  onKeyDown: PropTypes.func
};

export default LocationBox;
