import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Image from "../../../components/Image/Image";
import StayingRating from "../../../components/Staying/StayingRating";
import Title from "../../../components/Title/Title";
function ItemUniqueProperty({
  name,
  image,
  districtAddress,
  city,
  country,
  reviews,
  ratings,
}) {
  const location = districtAddress + ", " + city + ", " + country;
  return (
    <Link className='w-full'>
      <div className='w-full border dark:border-primary-500 rounded-lg shadow-[0_2px_8px_0_rgba(26,26,26,0.16)] dark:shadow-[0_2px_8px_0_rgba(200,200,200,0.16)]'>
        <div className='flex flex-col'>
          <div className='flex flex-col '>
            <div className='flex aspect-[20/20]'>
              <Image
                imageBase={image}
                className='aspect-[20/20] object-cover rounded-tl-lg rounded-tr-lg'
              />
            </div>
            <div className='flex flex-col w-full m-0 p-3'>
              <div className='flex w-full dark:text-white'>
                <Title
                  title={name}
                  fontBold
                  nowrap={false}
                  titleCustom='text-[14px]'
                />
              </div>
              <div className='flex w-full items-center gap-1'>
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

ItemUniqueProperty.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, // Assuming it's a URL or base64 string
  districtAddress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  reviews: PropTypes.number.isRequired,
  ratings: PropTypes.number.isRequired,
};

export default ItemUniqueProperty;
