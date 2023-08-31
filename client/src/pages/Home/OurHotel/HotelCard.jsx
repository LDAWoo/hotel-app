import { Link } from "react-router-dom";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
function HotelCard({
  to,
  title,
  src,
  price,
  starCount,
  description,
  isWishlist,
}) {
  const { t } = useTranslation();

  return (
    <div className={`relative w-full h-full`}>
      <Link className='w-full h-full' to={to}>
        <div className='flex flex-col w-full'>
          <div className='mb-3'>
            {src && (
              <img
                src={src}
                className='w-full min-h-[300px] max-h-[350px] sm:min-h-[245px] lg:min-h-[245px] sm:max-h-[245px] rounded-lg object-cover'
              />
            )}
          </div>

          <div className='flex items-center'>
            <div className='flex-1 font-semibold dark:text-white'>{title}</div>
            {starCount > 0 && (
              <div className='flex items-center gap-1 dark:text-white'>
                <AiFillStar size={18} />
                <span>{starCount}</span>
              </div>
            )}
          </div>
          {description && (
            <div className='font-normal text-[16px] text-primary-100 dark:text-primary-50'>
              {description}
            </div>
          )}
          {price && (
            <div className='font-semibold dark:text-white'>
              $ {price}&nbsp;VND
              <span className='font-normal text-[15px] dark:text-primary-50'>
                {" "}
                {t("OurHotel.night")}
              </span>
            </div>
          )}
        </div>
      </Link>
      <div
        className={`absolute top-[3%] right-[3%] cursor-pointer  z-[5] ${
          isWishlist ? "text-hotel-50" : "text-primary-500 opacity-90"
        }`}
      >
        <AiFillHeart size={26} />
      </div>
    </div>
  );
}

HotelCard.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  price: PropTypes.number,
  starCount: PropTypes.number,
  description: PropTypes.string,
  isWishlist: PropTypes.bool,
};

export default HotelCard;
