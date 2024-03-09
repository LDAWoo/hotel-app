import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../../components/Title/Title";
import routesConfig from "../../../configs/routesConfig";
import { format } from "date-fns";
function TrendingCard({ destination, areaImage, src, city, maxImage }) {
  const [isHovered, setIsHovered] = useState(false);
  const maxImg = maxImage;

  const url =
    routesConfig.searchResults +
    `?location=${city}&checkin=${format(
      new Date(),
      "yyyy-MM-dd",
    )}&checkout=${format(
      new Date(),
      "yyyy-MM-dd",
    )}&group_adults=1&group_children=0&group_rooms=1`;

  return (
    <div
      className={`w-full h-[180px] sm:h-[200px] md:h-[225px] lg:h-[250px] min-w-[calc((100%_-_12px)_/_${maxImg})] rounded-lg border-[1px] border-transparent hover:border-hotel-50 `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link className='relative w-full h-full' target='_blank' to={url}>
        {isHovered && (
          <div className='absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-b from-primary-700/50 duration-300' />
        )}
        <img src={src} className='w-full h-full object-cover rounded-lg ' />
        <div className='absolute top-6 left-6'>
          <div className='flex flex-col md:flex-row gap-2 items-start md:items-center'>
            {destination && (
              <Title title={destination} className='text-white' fontBold xxxl />
            )}
            {areaImage && (
              <div className='w-6 h-5 rounded-sm'>
                <img
                  src={areaImage}
                  className='w-full h-full object-cover rounded-sm shadow-[0_2px_8px_0_rgba(255,255,255,0.50)]'
                />
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

TrendingCard.propTypes = {
  to: PropTypes.string,
  destination: PropTypes.string,
  areaImage: PropTypes.string,
  src: PropTypes.string.isRequired,
  maxImage: PropTypes.number.isRequired,
};

export default TrendingCard;
