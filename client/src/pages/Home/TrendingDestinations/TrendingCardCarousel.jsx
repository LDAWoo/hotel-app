import { Link } from "react-router-dom";
import Image from "../../../components/Image/Image";
import Title from "../../../components/Title/Title";

import PropTypes from "prop-types";
function TrendingCardCarousel({ item }) {
  return (
    <Link to={{}} className='flex flex-col w-full h-full '>
      <div className='flex w-full flex-col '>
        <div className='w-full relative'>
          <div style={{ aspectRatio: "20/19" }}>
            <Image src={item?.url} className='w-full h-full object-cover' />
          </div>
          <div className='absolute top-[5%] left-[5%] w-full h-[40px]'>
            <Image src={item?.areaImage} className='w-[10%]' />
          </div>
        </div>
        <div className='flex flex-col mt-2 '>
          <Title
            title={item?.destination}
            fontMedium
            xl
            colorTitle='dark:text-white'
          />
          <Title
            title={`${item?.quantityRoom} properties`}
            large
            colorTitle='dark:text-primary-50'
          />
        </div>
      </div>
    </Link>
  );
}
TrendingCardCarousel.propTypes = {
  item: PropTypes.shape({
    src: PropTypes.string.isRequired,
    areaImage: PropTypes.string,
    destination: PropTypes.string,
  }).isRequired,
};
export default TrendingCardCarousel;
