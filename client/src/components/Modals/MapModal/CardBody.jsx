import { Link } from "react-router-dom";
import Image from "../../Image/Image";
import CardHeart from "../../../pages/Home/OurHotel/CardHeart";
import Title from "../../Title/Title";
import StayingRating from "../../Staying/StayingRating";
import Icon from "../../Icon/Icon";
import { BsInfoCircle } from "react-icons/bs";
import useRegisterPinMap from "../../../hooks/Map/useRegisterPinMap";

const CardBody = ({
  id,
  name,
  rating,
  image,
  days,
  adults,
  child,
  reviews,
  border,
}) => {
  const { value, setValue } = useRegisterPinMap();

  const handleMouseEnter = (id) => {
    setValue(id);
  };

  const handleMouseLeave = () => {
    setValue(null);
  };
  return (
    <Link
      className={`flex relative flex-row w-full h-full p-2 rounded-lg duration-200 hover:bg-hotel-25 dark:hover:bg-primary-500 shadow-[0_5px_5px_rgba(0,0,0,7%)] ${
        border ? "border" : ""
      }`}
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <div className='absolute top-[10px] bottom-[10px] overflow-hidden w-[35%] rounded-lg'>
        <Image src={image} className='h-full w-full object-cover rounded-lg' />
      </div>

      {/* Heart */}
      <div className='absolute top-[12px] right-[4px] z-[1002]'>
        <CardHeart isWishlist={false} />
      </div>

      <div className='flex flex-col overflow-hidden ml-[38%] w-[55%] h-full'>
        <div className='flex flex-col w-full gap-2'>
          <Title
            title={name}
            fontMedium
            xxxl
            nowrap={false}
            className={`duration-200 ${
              value === id ? "text-secondary-50" : "text-hotel-200"
            }`}
          />

          <div>
            <div className='flex w-full h-auto'>
              <StayingRating rating={rating} />
              <div className='flex flex-row items-end'>
                <Title title={`${reviews} lượt xem`} large />
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-row pl-2 mt-2 w-full h-full'>
          <div className='flex flex-col gap-2 w-full h-full'>
            {/* Categories */}
            <div className='flex flex-col gap-1 w-full dark:text-primary-50'>
              <Title
                title='Studio Có Ban Công'
                colorTitle='dark:text-white'
                fontBold
                large
              />
              <Title title='1 studio nguyên căn • 1 phòng tắm •' large />
              <Title title='1 studio nguyên căn • 1 phòng tắm •' large />
              <Title title='1 studio nguyên căn • 1 phòng tắm •' large />
            </div>
            {/* PriceAndDate */}
            <div className='flex items-end flex-col gap-1 w-full h-full'>
              {/* Date */}
              <Title
                title={`${days} tuần, ${adults} người lớn, ${child} trẻ em`}
                colorTitle='dark:text-primary-50'
                large
              />
              {/* Price */}
              <div className='flex flex-col items-end gap-1 w-full'>
                <Title
                  title='VND 9.526.500'
                  large
                  colorTitle='text-red-600 line-through'
                />

                <div className='flex flex-row gap-1 items-center dark:text-white'>
                  <Title title='VND 37,550,000' xxxl fontMedium />
                  <Icon
                    icon={BsInfoCircle}
                    size={14}
                    classIcon='text-primary-700 dark:text-white'
                  />
                </div>
              </div>

              <Title
                title='Đã bao gồm thuế và phí'
                colorTitle='dark:text-primary-50'
                large
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardBody;
