import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoSearchOutline } from "react-icons/io5";
import { PiWarningCircleLight } from "react-icons/pi";
import { useSearchParams } from "react-router-dom";
import Title from "../../../../components/Title/Title";
import useRegisterLocationStore from "../../../../hooks/useRegisterLocationStore";
import ButtonSearch from "../ButtonSearch";
function Location() {
  const {valueLocation,setValueLocation,isOpen} = useRegisterLocationStore();
  const [searchParams] = useSearchParams();
  const currentLocation = searchParams?.get("location") || "";
  const {t} = useTranslation()

  useEffect(() => {
    setValueLocation(currentLocation);
  },[currentLocation])

  const handleChangeLocation = (e) => {
    setValueLocation(e.target.value)
  }

  return (
    <div className='flex flex-col w-full'>
      <Title title={t("HotelDetails.Search.location")} large />
      <ButtonSearch
        icon={IoSearchOutline}
        type='text'
        value={valueLocation}
        placeholder={t("HotelDetails.Search.placeholder")}
        onChange={handleChangeLocation}
      />
      {
        isOpen && (
          <div className="mt-1">
            <ButtonSearch icon={PiWarningCircleLight} type="error" title={t("Error.Search.locationNotBlank")}/>
          </div>
        )
      }
    </div>
  );
}

export default Location;
