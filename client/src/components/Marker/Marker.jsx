import PropTypes from "prop-types";
import React from "react";
import useRegisterHotelSelected from "../../hooks/Map/useRegisterHotelSelected";
import useRegisterWindowSizeStore from "../../hooks/useRegisterWindowSizeStore";
import CardBody from "../Modals/MapModal/CardBody";
import ToolTip from "../ToolTip/ToolTip";

const Marker = ({
  id,
  image,
  rating,
  name,
  days,
  adults,
  child,
  reviews,
  isActive,
}) => {
  const { width } = useRegisterWindowSizeStore();
  const { onOpen, items } = useRegisterHotelSelected();

  const handleShowHotel = (
    id,
    image,
    rating,
    name,
    days,
    adults,
    child,
    reviews,
  ) => {
    onOpen({
      id,
      image,
      rating,
      name,
      days,
      adults,
      child,
      reviews,
    });

    console.log(id);
  };

  return (
    <div>
      {width >= 900 ? (
        <ToolTip
          interactive={false}
          width={380}
          typeToolTip='TippyHeadless'
          items={
            <CardBody
              name={name}
              rating={rating}
              image={image}
              days={days}
              adults={adults}
              child={child}
              reviews={reviews}
            />
          }
        >
          <div className='absolute -translate-y-[100%] -translate-x-[50%] w-[28px] h-[34px] duration-200 cursor-pointer fill-hotel-600 hover:fill-hotel-50'>
            <div className='w-[28px] h-[34px] relative pointer-events-none cursor-pointer after:content-[""] after:absolute after:block after:left-0 after:top-0 after:w-full after:h-full'>
              <div
                className={`absolute w-[28px] h-[34px] top-0 left-0 z-[2] pointer-events-none ${
                  isActive ? "animate-bounce fill-hotel-50" : ""
                }`}
              >
                <div className='cursor-pointer w-[10px] h-[10px] bg-white border-white border rounded-[50%] absolute top-[9px] left-[9px] pointer-events-none z-[1002]'></div>
                <svg
                  viewBox='-1 -1 26 32'
                  className='stroke-white stroke-[1px] pointer-events-none z-[1]'
                >
                  <path d='M24 12.4286C24 19.2927 12 29 12 29C12 29 0 19.2927 0 12.4286C0 5.56446 5.37258 0 12 0C18.6274 0 24 5.56446 24 12.4286Z'></path>
                </svg>
              </div>
              <svg
                className='fill-black dark:fill-white absolute w-3 h-1 top-[30px] left-2 opacity-25 dark:opacity-70'
                viewBox='0 0 12 4'
              >
                <ellipse cx='6' cy='2' rx='6' ry='2'></ellipse>
              </svg>
            </div>
          </div>
        </ToolTip>
      ) : (
        <div className='absolute -translate-y-[100%] -translate-x-[50%]'>
          <div className='cursor-pointer inline-block h-auto relative text-center w-full'>
            <div
              className={`${
                items.id === id
                  ? "bg-hotel-75 before:border-hotel-75"
                  : "bg-hotel-600 hover:bg-hotel-75 before:hover:border-hotel-75 before:border-hotel-600"
              } z-[1004]  border border-white rounded-[4px] relative bottom-[6px] p-1 text-white whitespace-nowrap before:absolute before:border-t-[5px]  before:w-0 before:h-0 before:border-l-[5px] before:hover:border-l-transparent before:hover:border-r-transparent before:border-l-transparent before:border-r-[5px] before:border-r-transparent before:left-[42%] before:top-[100%] duration-75`}
              onClick={() =>
                handleShowHotel(
                  id,
                  image,
                  rating,
                  name,
                  days,
                  adults,
                  child,
                  reviews,
                )
              }
            >
              VND&nbsp;1,200,000
            </div>
            <svg
              className='fill-black dark:fill-white absolute w-3 h-1 top-[20px] left-[41%] opacity-25 dark:opacity-70'
              viewBox='0 0 12 4'
            >
              <ellipse cx='6' cy='2' rx='6' ry='2'></ellipse>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

Marker.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
  adults: PropTypes.number.isRequired,
  child: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default React.memo(Marker);
