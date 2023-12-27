import PropTypes from "prop-types";
import ReactCountryFlag from "react-country-flag";
import en from "react-phone-number-input/locale/en";

import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import SelectInput from "../../SelectInput/SelectInput";

function InputStaying({
  className,
  type,
  placeHolder,
  country,
  countryCode,
  countryValue,
  handleSelectCountry,
  ...props
}) {
  return (
    <div className='relative'>
      {type === "number" && country && (
        <>
          <SelectInput
            className='absolute top-[2px] left-[1px] text-white bottom-[2px] z-[2] border-none w-[32px] h-[32px] opacity-0 m-0'
            onChange={handleSelectCountry}
          >
            {getCountries().map((country) => (
              <option
                key={country}
                value={country}
                data-calling-code={getCountryCallingCode(country)}
                className='text-[14px] text-primary-700 dark:text-white'
              >
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
        placeholder={
          type === "number" && countryValue ? countryValue : placeHolder
        }
        type='text'
        className={`${
          type === "number" && country ? "pl-[40px]" : "pl-[8px]"
        } outline-none border-[1px] focus:shadow-[0_0_0_1px_rgba(0,13,194,.76)] border-primary-400 rounded-[2px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)] w-full h-8 box-border  pr-9 pt-0 pb-0 text-[14px] bg-transparent dark:text-white text-primary-700 placeholder:text-primary-100 ${className}`}
      />
    </div>
  );
}

InputStaying.propTypes = {
  className: PropTypes.string,
};

export default InputStaying;
