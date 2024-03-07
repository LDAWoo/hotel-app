import countryList from "country-list";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import SelectInput from "../../../../components/SelectInput/SelectInput";
import TextError from "../../../../components/TextError/TextError";
import TextInput from "../../../../components/TextInput/TextInput";
import Title from "../../../../components/Title/Title";
import useRegisterPayment from "../../../../hooks/JoinStaying/CreateRoom/Payment/useRegisterPayment";

const countries = countryList.getData();

const ComponentBusiness = () => {
  const { t } = useTranslation();

  const { country, streetAddress, errorStreetAddress, districtAddress, errorDistrictAddress, city, errorCity, setField } = useRegisterPayment();

  const handleSelectCountry = (e) => {
    const countries = e.target.value;
    setField("country", countries);
  };

  const handleChangeStreetAddress = (value) => {
    setField("streetAddress", value);
  };

  const handleChangeDistrictAddress = (value) => {
    setField("districtAddress", value);
  };

  const handleChangeCity = (value) => {
    setField("city", value);
  };

  const onKeyDownName = (e, value) => {
    if (e.key === " " && value.trim() === "") {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col gap-2">
        <label className="font-medium text-[14px]">{t("HostStaying.CreateRoom.items.payment.information.nameCountry")}</label>
        <SelectInput onChange={handleSelectCountry} value={country}>
          <option className="text-[14px] text-primary-700 dark:text-white" value="">
            {t("HostStaying.CreateRoom.items.payment.information.selectCountry")}
          </option>
          {countries.map((country, index) => (
            <option key={index} value={country.name} className="text-[14px] text-primary-700 dark:text-white">
              {country.name}
            </option>
          ))}
        </SelectInput>
      </div>

      {country && (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <Title title={t("HostStaying.CreateRoom.items.payment.information.nameStreet")} fontMedium xl nowrap={false} />

            <div className="flex flex-col gap-1">
              <div className="flex flex-col w-full">
                <TextInput type="text" className="w-full" placeholder={t("HostStaying.CreateRoom.items.payment.information.nameStreetPlaceholder")} value={streetAddress} error={errorStreetAddress.length > 0} sizeIcon={20} onChange={(e) => handleChangeStreetAddress(e.target.value)} onKeyDown={(e) => onKeyDownName(e, streetAddress)} />
                <TextError error={errorStreetAddress} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Title title={t("HostStaying.CreateRoom.items.payment.information.nameDistrict")} fontMedium xl nowrap={false} />

            <div className="flex flex-col gap-1">
              <div className="flex flex-col w-full">
                <TextInput type="text" className="w-full" value={districtAddress} error={errorDistrictAddress.length > 0} sizeIcon={20} onChange={(e) => handleChangeDistrictAddress(e.target.value)} onKeyDown={(e) => onKeyDownName(e, districtAddress)} />
                <TextError error={errorDistrictAddress} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Title title={t("HostStaying.CreateRoom.items.payment.information.nameCity")} fontMedium xl nowrap={false} />

            <div className="flex flex-col gap-1">
              <div className="flex flex-col w-full">
                <TextInput type="text" className="w-full" value={city} error={errorCity.length > 0} sizeIcon={20} onChange={(e) => handleChangeCity(e.target.value)} onKeyDown={(e) => onKeyDownName(e, city)} />
                <TextError error={errorCity} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(ComponentBusiness);
