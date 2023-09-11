import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { IconHeart } from "../../../assets/Icons/icons";
import Carousel from "./Carousel";
import Star from "../../../components/Star/Start";
function HotelCard({
  to,
  title,
  images,
  nightAndAdultAndChild,
  price,
  starCount,
  description,
  isWishlist,
}) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [heartColor, setHeartColor] = useState({
    fill: "rgba(0,0,0,0.5)",
    stroke: "#fff",
  });

  useEffect(() => {
    isWishlist
      ? setHeartColor({ fill: "rgb(255,56,92)", stroke: "#fff" }) // Add closing parenthesis after "92"
      : setHeartColor({ fill: "rgba(0,0,0,0.5)", stroke: "#fff" });
  }, [isWishlist]);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };
  return (
    <div
      className={`relative w-full h-full dark:bg-primary-600 bg-gray-100 pb-2 rounded-lg border dark:border-primary-500 `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link className='w-full h-full' to={to}>
        <div className='flex flex-col w-full'>
          <div className='mb-3'>
            {images && (
              <Carousel visible={visible}>
                {images?.map((img, index) => (
                  <img
                    src={img.image}
                    key={index}
                    className='w-full min-h-[300px] max-h-[380px] sm:min-h-[245px] lg:min-h-[245px] sm:max-h-[300px] rounded-tl-lg rounded-tr-lg'
                  />
                ))}
              </Carousel>
            )}
          </div>

          <div className='w-full pr-2 pb-2 pl-2 pt-1'>
            <div className='flex items-center'>
              <div className='flex-1 font-semibold dark:text-white'>
                {title}
              </div>
              {starCount > 0 && <Star starCount={starCount} />}
            </div>
            {description && (
              <div className='font-normal mb-2 text-[16px] text-primary-100 dark:text-primary-50'>
                {description}
              </div>
            )}
            {nightAndAdultAndChild && <div>{nightAndAdultAndChild}</div>}
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
        </div>
      </Link>
      <div
        className={`absolute top-[3%] right-[3%] cursor-pointer  z-[5] ${
          isWishlist ? "text-hotel-50" : "text-primary-500 opacity-90"
        }`}
      >
        <IconHeart fill={heartColor.fill} stroke={heartColor.stroke} />
      </div>
    </div>
  );
}

HotelCard.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.array,
  price: PropTypes.number,
  starCount: PropTypes.number,
  description: PropTypes.string,
  isWishlist: PropTypes.bool,
  nightAndAdultAndChild: PropTypes.string,
};

export default HotelCard;
