import { Link } from "react-router-dom";
import Image from "../../../components/Image/Image";
import Title from "../../../components/Title/Title";
import StayingRating from "../../../components/Staying/StayingRating";

function ItemGuestLove({ item }) {
  const location =
    item?.streetAddress +
    ", " +
    item?.districtAddress +
    ", " +
    item?.city +
    ", " +
    item?.country;
  return (
    <Link className='w-full'>
      <div className='w-full h-full rounded-lg shadow-[0_2px_8px_0_rgba(26,26,26,0.16)] dark:shadow-[0_2px_8px_0_rgba(255,255,255,0.16)]'>
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <Image
              src={item?.urlImage}
              className='aspect-[20/20] object-cover rounded-tl-lg rounded-tr-lg'
            />
            <div className='flex flex-col w-full m-0 p-3'>
              <div className='flex w-full dark:text-white'>
                <Title
                  title={item?.nameHotel}
                  fontBold
                  nowrap={false}
                  titleCustom='text-[14px]'
                />
              </div>
              <div className='flex w-full'>
                <Title
                  title={location}
                  nowrap={false}
                  large
                  colorTitle='dark:text-primary-50'
                />
              </div>
              <div className='flex flex-row items-center gap-2 mt-1'>
                {item?.reviewRating > 0 && (
                  <StayingRating
                    rating={item?.reviewRating}
                    className='text-[12px]'
                  />
                )}
                {item?.countReview > 0 && (
                  <Title
                    title={`${item?.countReview} reviews`}
                    large
                    colorTitle='dark:text-primary-50'
                  />
                )}
              </div>
              <div>
                <div className='flex flex-col items-end justify-end font-normal text-[12px] dark:text-primary-50'>
                  <Title title='Starting from' large />
                  <Title
                    title={`VND ${item?.price}`}
                    xl
                    fontBold
                    colorTitle='dark:text-white ml-1'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ItemGuestLove;
