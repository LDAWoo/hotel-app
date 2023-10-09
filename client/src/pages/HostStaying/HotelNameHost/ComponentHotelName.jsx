import { HotelNameHostData } from "../../../components/Constants/HotelNameHostData";
import TextInput from "../../../components/TextInput/TextInput";
import Title from "../../../components/Title/Title";
import Star from "../../../components/Star/Start";
import PropTypes from "prop-types";

const ComponentHotelName = () => {
  const StarRating = ({ value }) => {
    const stars = [];

    for (let i = 0; i < value; i++) {
      stars.push(<Star key={i} size={20} className='gap-0' />);
    }

    return <div className='flex flex-row'>{stars}</div>;
  };

  return (
    <div>
      {HotelNameHostData.map((hotelName, index) => (
        <div key={index} className='flex flex-col gap-2'>
          <Title title={hotelName?.title} fontBold xl />
          {hotelName?.data.map((item, index) => (
            <div
              key={index}
              className={`${
                item?.type === "text"
                  ? "flex flex-col gap-2"
                  : "flex flex-row items-center cursor-pointer"
              } `}
              htmlFor={item?.id}
            >
              {item?.type === "text" && (
                <label className='font-medium text-[14px]'>{item?.title}</label>
              )}
              {item?.type === "text" ? (
                <TextInput
                  type='text'
                  classBorder='border border-primary-100 rounded-sm'
                  classInput='w-full focus:outline-none placeholder:text-[14px] text-[14px] border-[1px] pt-[5px] pb-[5px] pl-[3px] pr-[3px] border-transparent focus:border-hotel-75 dark:focus:border-hotel-500 dark:bg-primary-700 dark:text-white'
                />
              ) : item?.type === "radio" ? (
                <input
                  type='radio'
                  name={item?.name}
                  className='w-4 h-4 mr-[8px] cursor-pointer dark:bg-primary-700'
                  value={item?.value}
                  id={item?.id}
                />
              ) : (
                <></>
              )}

              {item?.type === "radio" && (
                <label
                  className='flex flex-row gap-1 text-[14px] cursor-pointer w-full'
                  htmlFor={item?.id}
                >
                  {item?.title}
                  <StarRating value={item?.value} />
                </label>
              )}
            </div>
          ))}

          {hotelName?.subTitle && (
            <div className='mb-5'>
              <Title title={hotelName?.subTitle} large />
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
