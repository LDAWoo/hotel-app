import PropTypes from "prop-types";
import { HotelNameHostData } from "../../../components/Constants/HotelNameHostData";
import Star from "../../../components/Star/Start";
import TextInput from "../../../components/TextInput/TextInput";
import Title from "../../../components/Title/Title";
import useRegisterHotelName from "../../../hooks/JoinStaying/HotelNameHost/useRegisterHotelName";
import { useEffect, useReducer } from "react";

const ComponentHotelName = () => {
  const { data, rating, managerHotel, setField } = useRegisterHotelName();

  const initialState = HotelNameHostData.map((item) => {
    if (item?.type === "text" || item?.type === "number") {
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

  const StarRating = ({ value }) => {
    const stars = [];

    for (let i = 0; i < value; i++) {
      stars.push(<Star key={i} size={20} className="gap-0" />);
    }

    return <div className="flex flex-row">{stars}</div>;
  };

  const handleChangeHotelName = (value, field) => {
    dispatch({ type: "SELECT_OPTION", payload: { value, field } });
  };

  const handleCheckedRating = (type, value) => {
    setField(type, value);
  };

  useEffect(() => {
    state.forEach((item) => setField(item.field, item.selectedValue));
  }, [setField, state]);

  const handleKeyDown = (e, type) => {
    if (e.key === "-" && type === "number") {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      {HotelNameHostData.map((hotelName, index) => (
        <div key={index} className="flex flex-col gap-2">
          <Title title={hotelName?.title} fontBold xl nowrap={false} />

          {hotelName?.data.map((item, index) => (
            <div key={index} className={`${item?.type === "text" ? "flex flex-col gap-2" : "flex flex-row items-center cursor-pointer"} `} htmlFor={item?.id}>
              {item?.type === "text" && <label className="font-medium text-[14px]">{item?.title}</label>}
              {hotelName?.type === "text" || hotelName?.type === "number" ? (
                <TextInput type={hotelName?.type} className="w-full" value={state.find((s) => s.field === item?.field)?.selectedValue || ""} onChange={(e) => handleChangeHotelName(e.target.value, item?.field)} onKeyDown={(e) => handleKeyDown(e, hotelName?.type)} />
              ) : hotelName?.type === "radio" ? (
                <input type="radio" name={item?.name} className="w-4 h-4 mr-[8px] cursor-pointer dark:bg-primary-700" value={item?.value} checked={item?.name === "rating" ? item?.value === rating : item?.value === managerHotel} id={item?.id} onChange={() => handleCheckedRating(item?.name, item?.value)} />
              ) : (
                <></>
              )}

              {hotelName?.type === "radio" && (
                <label className="flex flex-row gap-1 text-[14px] cursor-pointer w-full" htmlFor={item?.id}>
                  {item?.title}
                  {hotelName?.star && <StarRating value={item?.value} />}
                </label>
              )}
            </div>
          ))}

          {hotelName?.subTitle && (
            <div className="mb-5">
              <Title title={hotelName?.subTitle} large xl />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

ComponentHotelName.propTypes = {
  value: PropTypes.number,
};

export default ComponentHotelName;
