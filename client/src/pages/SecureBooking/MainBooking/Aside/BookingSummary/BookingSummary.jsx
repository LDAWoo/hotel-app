import { format } from "date-fns";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Title from "../../../../../components/Title/Title";
import Border from "../../../../../components/Border/Border";
import Button from "../../../../../components/Buttons/Button";
import Icon from "../../../../../components/Icon/Icon";
import { getLocale } from "../../../../../components/Locale/Locale";

function BookingSummary({ data }) {
  const locale = getLocale();

  const [showNights, setShowNights] = useState(false);

  const handleShowNight = () => {
    setShowNights(!showNights);
  };

  console.log(data);

  return (
    <div className='flex flex-col gap-4 dark:text-white'>
      <Title title='Your booking details' fontBold xxl nowrap={false} />
      <div className='flex flex-row gap-4 justify-between dark:text-primary-50'>
        <div className='flex flex-col '>
          <Title title='Check-in' xl />
          {data?.checkInDate && (
            <time>
              <span className='font-bold dark:text-white'>
                {format(new Date(data?.checkInDate), "EEE, MMM dd, yyyy", {
                  locale,
                })}
              </span>
            </time>
          )}
        </div>
        <div className='border-r dark:border-primary-500' />
        <div className='flex flex-col'>
          <Title title='Check-out' xl />
          {data?.checkOutDate && (
            <time>
              <span className='font-bold dark:text-white'>
                {format(new Date(data?.checkOutDate), "EEE, MMM dd, yyyy", {
                  locale,
                })}
              </span>
            </time>
          )}
        </div>
      </div>
      <div className='flex flex-col'>
        <Title
          title='Total length of stay'
          fontMedium
          xl
          nowrap={false}
          className='dark:text-primary-50'
        />
        {data?.totalDay && (
          <Title
            title={`${data?.totalDay} nights`}
            fontBold
            xl
            nowrap={false}
          />
        )}
      </div>
      <Border className='mb-0' />

      <div className='flex flex-col gap-1 '>
        <div className='cursor-pointer' onClick={handleShowNight}>
          <Title
            title='Your selected'
            fontMedium
            xl
            nowrap={false}
            className='dark:text-primary-50'
          />
          <div className='flex flex-row items-center justify-between'>
            <Title
              title={`${data?.quantityRoom} for ${data?.quantityAdult} adults, ${data?.quantityChildren} children`}
              fontBold
              xxl
              nowrap={false}
            />
            <Icon
              icon={IoIosArrowDown}
              size={18}
              classIcon={`${
                showNights ? "rotate-180" : "rotate-0"
              } duration-300`}
            />
          </div>
        </div>

        {showNights && (
          <div className='flex flex-col dark:text-primary-50'>
            <Title
              title={`${data?.quantityRoom} x Double room`}
              fontMedium
              xl
            />
            <Title title={`${data?.quantityAdult} adults`} xl />
            <Title title={`${data?.quantityChildren} children`} xl />
          </div>
        )}
        <Link>
          <Button
            title='Change your selection'
            className='pt-1 pb-1 hover:bg-hotel-25 dark:hover:bg-primary-500 text-hotel-75 duration-300 rounded-md -translate-x-[6px]'
            fontBold
            xl
          />
        </Link>
      </div>
    </div>
  );
}

BookingSummary.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BookingSummary;
