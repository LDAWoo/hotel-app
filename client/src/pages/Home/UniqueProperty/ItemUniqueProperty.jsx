import Image from "../../../components/Image/Image";
import Title from "../../../components/Title/Title";
import StayingRating from "../../../components/Staying/StayingRating";
import { Link } from "react-router-dom";

function ItemUniqueProperty({ name, image, location, reviews, ratings }) {
  return (
    <Link className='w-full'>
      <div className='w-full border dark:border-primary-500 rounded-lg shadow-[0_2px_8px_0_rgba(26,26,26,0.16)] dark:shadow-[0_2px_8px_0_rgba(200,200,200,0.16)]'>
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
                <StayingRating rating={ratings} />
                <Title
                  title={`${reviews} reviews`}
                  large
                  colorTitle='dark:text-primary-50'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ItemUniqueProperty;
