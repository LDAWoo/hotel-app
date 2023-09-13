import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { IconHeart } from "../../../assets/Icons/icons";
import Carousel from "../../../components/Carousel/Carousel";
import Star from "../../../components/Star/Start";
import Image from "../../../components/Image/Image";
import Title from "../../../components/Title/Title";
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
                  <Image
                    src={img.image}
                    key={index}
                    //  className='w-full min-h-[300px] max-h-[380px] sm:min-h-[245px] lg:min-h-[245px] sm:max-h-[300px] rounded-tl-lg rounded-tr-lg'
                    className='w-full h-full rounded-tl-lg rounded-tr-lg object-cover'
                  />
                ))}
              </Carousel>
            )}
          </div>

          <div className='w-full pr-2 pb-2 pl-2 pt-1'>
            <div className='flex items-center'>
              <div className='flex-1 '>
                <Title
                  title={title}
                  xl
                  fontMedium
                  colorTitle='dark:text-white'
                  nowrap={false}
                />
              </div>
              {starCount > 0 && <Star starCount={starCount} />}
            </div>
            {description && (
              <div className='mb-2'>
                <Title
                  title={description}
                  xl
                  colorTitle='text-primary-100 dark:text-primary-50'
                />
              </div>
            )}
            {nightAndAdultAndChild && <div>{nightAndAdultAndChild}</div>}
            {price && (
              <div className='flex items-center gap-1'>
                <Title title={price} fontBold xl colorTitle='' />
                <Title title='VND' xl fontBold />
                <Title
                  title={t("OurHotel.night")}
                  xl
                  colorTitle='dark:text-primary-50'
                />
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
