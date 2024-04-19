import PropTypes from 'prop-types';
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";
import useRegisterLocationStore from "../../../hooks/useRegisterLocationStore";
import useRegisterToolTipLocation from "../../../hooks/useRegisterToolTipLocation";
import Button from '../../Buttons/Button';
import Icon from "../../Icon/Icon";

function LocationSearch({onKeyDown}) {
  const { t } = useTranslation();
  const { valueLocation, setValueLocation } = useRegisterLocationStore();
  const {onOpen} = useRegisterToolTipLocation();
  const inputRef = useRef();

  const handleChangeLocation = (e) => {
    setValueLocation(e.target.value);
  };

  const handleClearValue = () => {
    setValueLocation("");
    inputRef.current.focus();
  };

  useEffect(() => {
    if(inputRef.current){
      if(onOpen){
        setTimeout(() => {
          inputRef.current.focus();
        },800)
      }
    }
  },[onOpen])

  return (
    <div className='w-full bg-transparent'>
        <div className='w-full flex items-center border-t-[3px] border-b-[3px] border-secondary-50 overflow-hidden rounded-[0px]'>
            <div className='ml-2'>
              <Icon icon={AiOutlineSearch} size={24} />
            </div>
            <input 
            ref={inputRef}
            type="text"
            placeholder={t("Search.location")}  className="outline-offset-0 ml-1 w-full p-[6px_4px] text-[14px] focus:outline-none bg-transparent" value={valueLocation}
            onChange={handleChangeLocation} 
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onKeyDown();
              }
            }}/>
          {valueLocation?.length > 0 && 
            <Button title={t("Search.clear")} xl onClick={handleClearValue} className="h-full p-[0_6px] text-hotel-50 hover:text-hotel-75 duration-200" fontMedium/>
          }
        </div>
    </div>
  );
}
LocationSearch.propTypes ={
  onKeyDown: PropTypes.func.isRequired
}

export default LocationSearch;
