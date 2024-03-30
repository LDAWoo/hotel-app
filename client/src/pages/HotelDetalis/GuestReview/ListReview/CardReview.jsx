import { format } from "date-fns";
import PropTypes from "prop-types";
import { useState } from "react";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { BsCalendar4 } from "react-icons/bs";
import Icon from "../../../../components/Icon/Icon";
import Image from "../../../../components/Image/Image";
import { getLocale } from "../../../../components/Locale/Locale";
import StayingRating from "../../../../components/Staying/StayingRating";
import Title from "../../../../components/Title/Title";
import Body from "../../DescriptionHighlight/Description/Description/Body";
import BodyReview from "./BodyReview";
import { useTranslation } from "react-i18next";
const CardReview = ({ vertical, border, style, onReadMoreClick, item }) => {
  const {t} = useTranslation()
  const [maxSegments, setMaxSegments] = useState(1);
  const reviewResponseLength = item?.feedbacks && item?.feedbacks.length;
  const handleReadMore = () => {
    setMaxSegments(reviewResponseLength);
  };

  const words = item?.fullName.split(" ");
  const abbreviatedName = words.map(word => word.substring(0, 1)).join("");

  const locale = getLocale();
  return (
    <div
      className={`box-border w-full h-full ${
        style
          ? border
            ? "border-b pb-4 pt-4 pl-0 pr-0"
            : "border-none"
          : "border p-4"
      } dark:border-primary-500`}
    >
      <div
        className={`flex relative ${
          style
            ? vertical
              ? "flex-col"
              : "flex-col sm:flex-row gap-5"
            : "flex-col gap-1"
        }`}
      >
        {/* Avatar  */}
        <div
          className={`flex flex-row ${
            style ? "items-start" : "items-center"
          } gap-1`}
        >
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row items-center gap-2'>
              <div className='w-[32px] h-[32px] rounded-full flex items-center justify-center border-[2px] border-secondary-50 bg-secondary-50'>
                {item?.src ? <Image
                  src={item?.src}
                  className='h-full w-full rounded-full object-cover'
                />
                  :
                  <Title title={abbreviatedName} fontBold large/>
              }
              </div>
              <div>
                <Title
                  title={item?.fullName}
                  fontBold
                  xl
                  className='dark:text-white'
                />
              </div>
            </div>

            {style && (
              <div className='flex flex-col p-2 sm:p-0 sm:border-none border dark:border-primary-500 rounded-sm'>
                {item?.reviewDate && (
                  <div className='flex flex-row gap-2 items-center text-primary-100 dark:text-white'>
                    <Icon icon={BsCalendar4} size={16} />
                    <Title
                      title={format(
                        new Date(item?.reviewDate),
                        "EEE, d MMMM yyyy",
                        {locale},
                      )}
                      large
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {/* Content */}
        {!style ? (
          <div className='flex flex-row w-full'>
            <Body
              maxSegments={1}
              data={item?.reviewContent}
              className='break-words whitespace-pre-line text-[14px] dark:text-primary-50'
            />
          </div>
        ) : (
          <>
            {/* Rating */}
            {item?.rating && (
              <StayingRating
                rating={item?.rating}
                className='absolute right-0 top-0 sm:-top-2'
              />
            )}

            <div className='flex flex-col gap-2 w-full'>
              {item?.reviewDate && (
                <div className='flex flex-row w-full'>
                  {/* CheckInDate */}
                  <Title
                    title={`${t("HotelDetails.Categories.guestsLove.haveEvaluated")} ${format(
                      new Date(item?.reviewDate),
                      "dd MMMM MM yyyy",
                      {locale},
                    )}`}
                    large
                    className='text-primary-100 dark:text-gray-50'
                  />
                </div>
              )}
              {/* Description */}
              <div className='flex flex-row w-full pr-5'>
                <Title
                  title={item?.reviewContent}
                  nowrap={false}
                  xl
                  className='dark:text-primary-50'
                />
              </div>

              {/* Review Response */}
              {item?.feedbacks && item?.feedbacks.length > 0 && (
                <div className='flex flex-col w-full h-auto gap-1 relative mt-2'>
                  <div className='flex flex-col w-full p-4 bg-gray-100 rounded-md dark:bg-primary-500 before:absolute before:border-b-[8px] before:border-gray-100 dark:before:border-primary-500 dark:before:border-l-transparent dark:before:border-r-transparent before:w-0 before:h-0 before:border-l-[8px] before:border-l-transparent before:border-r-[8px] before:border-r-transparent before:left-[50%] before:bottom-[100%]'>
                    <div className='flex items-center flex-row gap-2 mb-2 dark:text-white'>
                      <Icon icon={BiSolidMessageRoundedDots} size={24} />
                      <Title title={t("HotelDetails.Categories.guestsLove.ownerResponse.title")} fontBold large />
                    </div>

                    <BodyReview
                      data={item?.feedbacks}
                      maxSegments={maxSegments}
                      className='text-[14px] dark:text-primary-50'
                    />

                    {maxSegments !== reviewResponseLength && (
                      <button
                        type='button'
                        className='flex items-center text-hotel-200 dark:text-hotel-50 hover:underline text-[14px] cursor-pointer'
                        onClick={handleReadMore}
                      >
                        {t("HotelDetails.Categories.guestsLove.readMore")}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* ReadMore */}
        {!style && (
          <div
            className='flex flex-row w-full'
            onClick={() => onReadMoreClick(item)}
          >
            <Title
              title={t("HotelDetails.Categories.guestsLove.readMore")}
              className='text-hotel-50 hover:underline cursor-pointer duration-300'
              large
            />
          </div>
        )}
      </div>
    </div>
  );
};

CardReview.propTypes = {
  item: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  border: PropTypes.bool,
  style: PropTypes.bool,
  onReadMoreClick: PropTypes.func,
  vertical: PropTypes.bool,
};

export default CardReview;
