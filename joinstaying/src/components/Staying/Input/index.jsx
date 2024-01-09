import PropTypes from "prop-types";
import ReactCountryFlag from "react-country-flag";
import en from "react-phone-number-input/locale/en";

import { getCountries, getCountryCallingCode } from "react-phone-number-input/input";
import SelectInput from "../../SelectInput/SelectInput";
import Icon from "../../Icon/Icon";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";

function InputStaying({ className, classBorder, error, type, placeHolder, country, countryCode, countryValue, handleSelectCountry, classIcon, icon, sizeIcon, ...props }) {
  const [active, setActive] = useState(false);

  const handleFocus = () => {
    setActive(true);
  };

  const handleBlur = () => {
    setActive(false);
  };
  return (
    <div className="relative">
      <div className={`relative w-full rounded-[4px] duration-200 outline-none   ${!classBorder ? `border-[1px] ${active ? "border-hotel-100 shadow-[0_0_0_1px_rgba(0,13,194,.76)]" : `${error ? "border-red-500 shadow-[0_0_0_1px_rgba(204,0,0,1)]" : "border-gray-300 dark:border-primary-500"}`}` : classBorder}`}>
        {type === "number" && country && (
          <>
            <SelectInput className="absolute top-[2px] left-[1px] text-white bottom-[2px] z-[2] border-none w-[32px] h-[32px] opacity-0 m-0" onChange={handleSelectCountry}>
              {getCountries().map((country) => (
                <option key={country} value={country} data-calling-code={getCountryCallingCode(country)} className="text-[14px] text-primary-700 dark:text-white">
                  {en[country]} +{getCountryCallingCode(country)}
                </option>
              ))}
            </SelectInput>
            <div className='absolute top-[4px] left-[8px] z-[1] bottom-[2px] w-[32px] h-[32px] before:absolute before:top-[35%] before:left-[22px] before:text-[6px] before:content-["\25BC"]'>
              <ReactCountryFlag
                svg
                countryCode={countryCode}
                style={{
                  fontSize: "1.15em",
                }}
              />
            </div>
          </>
        )}
        <input
          {...props}
          onBlur={handleBlur}
          onFocus={handleFocus}
          type="tel"
          placeholder={type === "number" && countryValue ? countryValue : placeHolder}
          className={`${type === "number" && country ? "pl-[40px]" : "pl-[8px]"} ${className ? className : "outline-none border-[1px] focus:shadow-[0_0_0_1px_rgba(0,13,194,.76)] border-primary-400 rounded-[2px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)] w-full h-8 box-border pr-9 pt-0 pb-0 text-[14px] bg-transparent dark:text-white text-primary-700 placeholder:text-primary-100 "}`}
        />
        {icon && (
          <div className={`${!classIcon ? "absolute top-0 bottom-0 flex justify-center items-center pl-2 text-primary-100 dark:text-primary-50" : classIcon}`}>
            <Icon icon={icon} size={sizeIcon} />
          </div>
        )}

        {error && !active && (
          <div
            className={`absolute top-0 bottom-0 right-0 flex justify-center items-center pl-2 text-red-500 dark:text-primary-50"
          }`}
          >
            <Icon icon={MdOutlineErrorOutline} size={sizeIcon} />
          </div>
        )}
      </div>
    </div>
  );
}

InputStaying.propTypes = {
  className: PropTypes.string,
  classBorder: PropTypes.string,
  error: PropTypes.bool,
  type: PropTypes.string,
  placeHolder: PropTypes.string,
  country: PropTypes.bool,
  countryCode: PropTypes.string,
  countryValue: PropTypes.string,
  handleSelectCountry: PropTypes.func,
  classIcon: PropTypes.string,
  icon: PropTypes.object,
  sizeIcon: PropTypes.number,
};

export default InputStaying;
