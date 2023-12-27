import { Fragment, useEffect, useReducer } from "react";
import { BsCheck } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { getCountryCallingCode } from "react-phone-number-input";
import { YourDetailsData } from "../../../../../components/Constants/SecureBooking/YourDetailsData";
import Icon from "../../../../../components/Icon/Icon";
import SelectInput from "../../../../../components/SelectInput/SelectInput";
import InputStaying from "../../../../../components/Staying/Input";
import Title from "../../../../../components/Title/Title";
import useRegisterYourDetails from "../../../../../hooks/SecureBooking/useRegisterYourDetails";
import Control from "./Control";

function YourDetails() {
  const { firstName, lastName, email, country, phoneNumber, setField } =
    useRegisterYourDetails();

  const initState = YourDetailsData.map((item) => {
    const id = item.data[0]?.id;
    let selectedValue = { countryCode: "VN", countryValue: "84", value: "" };
    return { id, selectedValue, success: true, status: false, count: -1 };
  });

  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_OPTION":
        return state.map((item) => {
          if (item.id === action.payload.id) {
            const updatedSelectedValue = { value: action.payload.value };
            return {
              ...item,
              selectedValue: {
                ...item.selectedValue,
                ...updatedSelectedValue,
              },
            };
          }

          return item;
        });

      case "SELECT_OPTION":
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              selectedValue: {
                ...item.selectedValue,
                countryCode: action.payload.countryCode,
                countryValue: action.payload.countryValue,
              },
            };
          }
          return item;
        });

      case "FOCUS_OPTION":
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              status: action.payload.status,
              count: action.payload.count,
            };
          }
          return item;
        });
      case "BLUR_OPTION":
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              success: action.payload.success,
              status: action.payload.status,
              count: action.payload.count,
            };
          }
          return item;
        });
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const handleChange = (id, value, country) => {
    dispatch({ type: "CHANGE_OPTION", payload: { id, value, country } });
  };

  const handleFocus = (id) => {
    const count = state.find((s) => s.id === id).count;

    dispatch({
      type: "FOCUS_OPTION",
      payload: { id, status: true, count: count + 1 },
    });
  };

  const handleBlur = (id) => {
    const check = state.find((s) => s.id === id).selectedValue.value;
    const count = state.find((s) => s.id === id).count;

    let successFully = true;

    check.length > 0 && check !== ""
      ? (successFully = true)
      : (successFully = false);

    dispatch({
      type: "BLUR_OPTION",
      payload: { id, success: successFully, status: true, count: count + 1 },
    });
  };

  useEffect(() => {
    state.forEach((item) => {
      const id = item.id;
      const selectedValue = item.selectedValue;

      if (id === "phoneNumber" && selectedValue) {
        const phoneNumber = {
          number: selectedValue.value || "",
          countryCode: selectedValue.countryCode || "",
          countryValue: selectedValue.countryValue || "",
        };

        setField(id, phoneNumber);
      } else {
        setField(id, selectedValue?.value || "");
      }
    });
  }, [state, setField]);

  const handleSelectCountry = (id, value) => {
    const selectedCountryCode = value;
    const countryCode = selectedCountryCode;
    const countryValue = getCountryCallingCode(selectedCountryCode);
    dispatch({
      type: "SELECT_OPTION",
      payload: { id, countryCode, countryValue },
    });
  };

  return (
    <div className='flex flex-col gap-4 w-full dark:text-white'>
      <Title title='Enter your details' fontBold extraLarge4 />
      <div className='grid grid-cols-1 2md:grid-cols-2 gap-4 w-full'>
        {YourDetailsData.map((item, index) => (
          <div key={index} className='flex flex-col w-full'>
            {item?.type == "input" && (
              <Fragment>
                {item?.data &&
                  item?.data.map((x, index) => {
                    const selectedState =
                      state.find((s) => s.id === x?.id) || {};
                    const selectedValue = selectedState.selectedValue;

                    const { countryCode, countryValue, value } = selectedValue;
                    const { success, status, count } = selectedState;
                    return (
                      <Fragment key={index}>
                        {success ? (
                          <div className='flex flex-row gap-1'>
                            <Title title={x?.name} fontBold xl nowrap={false} />
                            <abbr>*</abbr>
                          </div>
                        ) : (
                          <div className='flex flex-row gap-1'>
                            <Title
                              title={x?.nameError}
                              fontBold
                              xl
                              nowrap={false}
                              className='text-[#a30000] dark:text-error-100'
                            />
                            <abbr className='opacity-0'>*</abbr>
                          </div>
                        )}
                        <div className='relative w-full'>
                          <InputStaying
                            type={x?.type}
                            placeHolder={x?.placeHolder}
                            country={x?.country}
                            handleSelectCountry={(e) =>
                              handleSelectCountry(x?.id, e.target.value)
                            }
                            countryCode={countryCode}
                            countryValue={"+" + countryValue}
                            className={`rounded-md h-[36px] ${
                              success
                                ? count > 0
                                  ? "focus:shadow-[0_0_0_1px_rgba(0,128,9,1)]"
                                  : ""
                                : count > 0
                                ? "border-[rgb(204,0,0)] focus:shadow-[0_0_0_1px_rgba(204,0,0,1)]"
                                : "focus:shadow-[0_0_0_1px_rgba(204,0,0,1)]"
                            }`}
                            value={value}
                            onFocus={() => handleFocus(x?.id)}
                            onBlur={() => handleBlur(x?.id)}
                            onChange={(e) =>
                              handleChange(x?.id, e.target.value, x?.country)
                            }
                          />
                          {status && count > 0 && (
                            <Icon
                              classIcon={`absolute flex items-center justify-center top-0 right-0 rounded-tr-md rounded-br-md bottom-0 text-white ${
                                success ? "bg-success-50" : "bg-error-100"
                              }`}
                              icon={success ? BsCheck : IoIosClose}
                              size={24}
                            />
                          )}
                        </div>
                        {x?.subName && (
                          <Title
                            title={x?.subName}
                            xl
                            nowrap={false}
                            className='dark:text-primary-50'
                          />
                        )}
                      </Fragment>
                    );
                  })}
              </Fragment>
            )}
            {item?.type === "select" && (
              <>
                {item?.data &&
                  item?.data.map((x, index) => {
                    const success = state.find((s) => s?.id === x?.id)?.success;

                    return (
                      <Fragment key={index}>
                        {success ? (
                          <div className='flex flex-row gap-1'>
                            <Title title={x?.name} fontBold xl nowrap={false} />
                            <abbr>*</abbr>
                          </div>
                        ) : (
                          <div className='flex flex-row gap-1'>
                            <Title
                              title={x?.nameError}
                              fontBold
                              xl
                              nowrap={false}
                              className='text-[#a30000]'
                            />
                            <abbr className='opacity-0'>*</abbr>
                          </div>
                        )}
                        <SelectInput
                          onChange={(e) => handleChange(x?.id, e.target.value)}
                          onFocus={() => handleFocus(x?.id)}
                          onBlur={() => handleBlur(x?.id)}
                          value={country}
                          className='h-[36px] rounded-md focus:shadow-[0_0_0_1px_rgba(0,13,194,.76)] mb-[0px]'
                        >
                          <option
                            className='text-[14px] text-primary-700 dark:text-white'
                            value=''
                          >
                            Select country/region
                          </option>
                          {x?.data.map((country, index) => (
                            <option
                              key={index}
                              value={country.name}
                              className='text-[14px] text-primary-700 dark:text-white'
                            >
                              {country.name}
                            </option>
                          ))}
                        </SelectInput>
                      </Fragment>
                    );
                  })}
              </>
            )}
          </div>
        ))}
      </div>

      <Control />
    </div>
  );
}

export default YourDetails;
