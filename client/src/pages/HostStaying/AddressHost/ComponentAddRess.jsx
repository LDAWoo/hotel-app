import { useEffect, useReducer, useRef } from "react";
import { AddRessData } from "../../../components/Constants/AddRessData";
import SelectInput from "../../../components/SelectInput/SelectInput";
import TextInput from "../../../components/TextInput/TextInput";
import useRegisterAddRess from "../../../hooks/JoinStaying/AddRessHost/useRegisterAddRess";

const ComponentAddRess = () => {
  const { country, setField, data } = useRegisterAddRess();
  const prevCountryRef = useRef(country);

  const initialState = AddRessData.map((item) => {
    if (item.type === "text") {
      const field = item.data[0].field;
      const initValue = data[field];
      const selectedValue = initValue;
      return { field, selectedValue };
    }
    return {};
  });

  const reducer = (state, action) => {
    switch (action.type) {
      case "SELECT_OPTION":
        return state.map((item) => {
          if (item.field === action.payload.field) {
            return { ...item, selectedValue: action.payload.value };
          }
          return item;
        });

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const resetOtherFields = () => {
      const fieldsToReset = [
        "streetAddress",
        "districtAddress",
        "city",
        "postalCode",
      ];
      fieldsToReset.forEach((field) => setField(field, ""));
      fieldsToReset.forEach((field) =>
        dispatch({ type: "SELECT_OPTION", payload: { value: "", field } }),
      );
    };

    if (prevCountryRef.current !== data.country) {
      resetOtherFields();
    }

    prevCountryRef.current = country;
  }, [country, data.country, setField, state]);

  const handleSelectCountry = (e) => {
    const countries = e.target.value;
    setField("country", countries);
  };

  const handleChooseOption = (value, field) => {
    dispatch({ type: "SELECT_OPTION", payload: { value, field } });
  };

  useEffect(() => {
    state.forEach((item) => setField(item.field, item.selectedValue));
  }, [state, setField]);

  console.log(data);
  console.log(state);

  return (
    <div>
      {AddRessData.map((item, index) => (
        <div key={index}>
          <div className='flex flex-col gap-2'>
            {item?.type === "select" && item?.data && (
              <div>
                {item?.data.map((item, index) => (
                  <div key={index} className='flex flex-col gap-2'>
                    <label className='font-medium text-[14px]'>
                      {item?.name}
                    </label>
                    <SelectInput onChange={handleSelectCountry} value={country}>
                      <option
                        className='text-[14px] text-primary-700 dark:text-white'
                        value=''
                      >
                        Select {item?.name}
                      </option>
                      {item?.data.map((country, index) => (
                        <option
                          key={index}
                          value={country.name}
                          className='text-[14px] text-primary-700 dark:text-white'
                        >
                          {country.name}
                        </option>
                      ))}
                    </SelectInput>
                  </div>
                ))}
              </div>
            )}
            {item?.type === "text" && item?.data && (
              <>
                {country !== "" && (
                  <div>
                    {item?.data.map((item, index) => (
                      <div key={index} className='flex flex-col gap-2'>
                        <label className='font-medium text-[14px]'>
                          {item?.name}
                        </label>
                        <TextInput
                          className={`mb-5 ${
                            index === 2 ? "w-[50%]" : "w-full"
                          }`}
                          classBorder='border border-primary-100 rounded-sm'
                          classInput='w-full focus:outline-none placeholder:text-[14px] text-[14px] border-[1px] pt-[5px] pb-[5px] pl-[3px] pr-[3px] border-transparent focus:border-hotel-75 dark:focus:border-hotel-500 dark:bg-primary-700 dark:text-white'
                          placeholder={item?.placeHolder}
                          value={
                            state.find((s) => s.field === item?.field)
                              ?.selectedValue || ""
                          }
                          onChange={(e) =>
                            handleChooseOption(e.target.value, item?.field)
                          }
                        />
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComponentAddRess;
