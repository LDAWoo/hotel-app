import { Link } from "react-router-dom";
import Image from "../../../components/Image/Image";
import Title from "../../../components/Title/Title";
import StayingRating from "../../../components/Staying/StayingRating";

function ItemGuestLove({ name, image, location, reviews, ratings, price }) {
  return (
    <Link className='w-full'>
      <div className='w-full h-full rounded-lg shadow-[0_2px_8px_0_rgba(26,26,26,0.16)] dark:shadow-[0_2px_8px_0_rgba(255,255,255,0.16)]'>
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <Image
              src={image}
              className='w-full h-full object-cover rounded-tl-lg rounded-tr-lg'
            />
            <div className='flex flex-col w-full m-0 p-3'>
              <div className='flex w-full dark:text-white'>
                <Title
                  title={name}
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
                {ratings > 0 && <StayingRating rating={ratings} />}
                {reviews > 0 && (
                  <Title
                    title={`${reviews} reviews`}
                    large
                    colorTitle='dark:text-primary-50'
                  />
                )}
              </div>
              <div>
                <div className='flex flex-col items-end justify-end font-normal text-[12px] dark:text-primary-50'>
                  <Title title='Starting from' large />
                  <Title
                    title={`VND ${price}`}
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
