import { Link } from "react-router-dom";
import Image from "../../../components/Image/Image";
import Title from "../../../components/Title/Title";

import PropTypes from "prop-types";
import routesConfig from "../../../configs/routesConfig";
import { format } from "date-fns";
function TrendingCardCarousel({ item }) {
  const url =
    routesConfig.searchResults +
    `?location=${item?.city}&checkin=${format(
      new Date(),
      "yyyy-MM-dd",
    )}&checkout=${format(
      new Date(),
      "yyyy-MM-dd",
    )}&group_adults=1&group_children=0&group_rooms=1`;
  return (
    <Link to={url} target='_blank' className='flex flex-col w-full h-full '>
      <div className='flex w-full flex-col '>
        <div className='w-full relative'>
          <div style={{ aspectRatio: "20/19" }}>
            <Image src={item?.src} className='w-full h-full object-cover' />
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
