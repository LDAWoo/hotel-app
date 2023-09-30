import PropTypes from "prop-types";
import { useState } from "react";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { BsCalendar4 } from "react-icons/bs";
import Icon from "../../../../components/Icon/Icon";
import Image from "../../../../components/Image/Image";
import StayingRating from "../../../../components/Staying/StayingRating";
import Title from "../../../../components/Title/Title";
import Body from "../../DescriptionHighlight/Description/Description/Body";

const CardReview = ({ vertical, border, style, onReadMoreClick, ...props }) => {
  const [maxSegments, setMaxSegments] = useState(1);
  const reviewResponseLength =
    props?.reviewResponse && props?.reviewResponse.length;
  const handleReadMore = () => {
    setMaxSegments(reviewResponseLength);
  };

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
              <div className='w-[32px] h-[32px] rounded-full border-[2px] border-secondary-50'>
                <Image
                  src={props?.src}
                  className='h-full w-full rounded-full object-cover'
                />
              </div>
              <div>
                <Title
                  title={props?.displayName}
                  fontBold
                  xl
                  colorTitle='dark:text-white'
                />
              </div>
            </div>

            {style && (
              <div className='flex flex-col p-2 sm:p-0 sm:border-none border dark:border-primary-500 rounded-sm'>
                <div className='flex flex-row gap-2 items-center text-primary-100 dark:text-white'>
                  <Icon icon={BsCalendar4} size={16} />
                  <Title title='4 ngày · tháng 9/2023' large />
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Content */}
        {!style ? (
          <div className='flex flex-row w-full'>
            <Body
              maxSegments={1}
              data={props?.description}
              className='break-words whitespace-pre-line text-[14px] dark:text-primary-50'
            />
          </div>
        ) : (
          <>
            {/* Rating */}
            {props?.rating && (
              <StayingRating
                rating={props?.rating}
                className='absolute right-0 top-0 sm:-top-2'
              />
            )}

            <div className='flex flex-col gap-2 w-full'>
              <div className='flex flex-row w-full'>
                {/* CheckInDate */}
                <Title
                  title={`Đã đánh giá: ngày 21 tháng 9 năm 2023`}
                  large
                  colorTitle='text-primary-100 dark:text-gray-50'
                />
              </div>
              {/* Description */}
              <div className='flex flex-row w-full pr-5'>
                <Title
                  title={props?.description}
                  nowrap={false}
                  xl
                  colorTitle='dark:text-primary-50'
                />
              </div>

              {/* Review Response */}
              {props?.reviewResponse && (
                <div className='flex flex-col w-full h-auto gap-1 relative mt-2'>
                  <div className='flex flex-col w-full p-4 bg-gray-100 rounded-md dark:bg-primary-500 before:absolute before:border-b-[8px] before:border-gray-100 dark:before:border-primary-500 dark:before:border-l-transparent dark:before:border-r-transparent before:w-0 before:h-0 before:border-l-[8px] before:border-l-transparent before:border-r-[8px] before:border-r-transparent before:left-[50%] before:bottom-[100%]'>
                    <div className='flex items-center flex-row gap-2 mb-2 dark:text-white'>
                      <Icon icon={BiSolidMessageRoundedDots} size={24} />
                      <Title title='Phản hồi của chỗ nghỉ:' fontBold large />
                    </div>

                    <Body
                      data={props?.reviewResponse}
                      maxSegments={maxSegments}
                      className='text-[14px] dark:text-primary-50'
                    />

                    {maxSegments !== reviewResponseLength && (
                      <button
                        type='button'
                        className='flex items-center text-hotel-200 dark:text-hotel-50 hover:underline text-[14px]'
                        onClick={handleReadMore}
                      >
                        Read more
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
          <div className='flex flex-row w-full' onClick={onReadMoreClick}>
            <Title
              title='Read More'
              titleCustom='text-hotel-50 hover:underline cursor-pointer duration-300'
              large
            />
          </div>
        )}
      </div>
    </div>
  );
};

CardReview.propTypes = {
  border: PropTypes.bool,
  style: PropTypes.bool,
  onReadMoreClick: PropTypes.func,
  description: PropTypes.string.isRequired,
};

export default CardReview;
