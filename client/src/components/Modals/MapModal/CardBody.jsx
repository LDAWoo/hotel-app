import PropTypes from "prop-types";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";
import useRegisterPinMap from "../../../hooks/Map/useRegisterPinMap";
import CardHeart from "../../../pages/Home/OurHotel/CardHeart";
import Icon from "../../Icon/Icon";
import Image from "../../Image/Image";
import MoneyFormatStaying from "../../Staying/MoneyFormatStaying";
import StayingRating from "../../Staying/StayingRating";
import Title from "../../Title/Title";

const CardBody = ({ items = [], background, border }) => {
  const { value, setValue } = useRegisterPinMap();
  const queryParams = new URLSearchParams();
  queryParams.set("location", items?.city);
  queryParams.set("checkin", items?.checkInDate);
  queryParams.set("checkout", items?.checkOutDate);
  queryParams.set("group_adults", items?.adults);
  queryParams.set("group_children", items?.children);
  queryParams.set("group_rooms", items?.quantityRoom);
  const queryString = queryParams.toString();

  const handleMouseEnter = (id) => {
    setValue(id);
  };

  const handleMouseLeave = () => {
    setValue(null);
  };

  return (
    <Link
      to={`${
        routesConfig.hotelDetails + "?id=" + items?.hotelId + "&" + queryString
      }`}
      className={`flex relative flex-row w-full h-full p-2 rounded-lg duration-200 ${
        background ? "bg-white dark:bg-primary-700" : ""
      } hover:bg-hotel-25 dark:hover:bg-primary-500 shadow-[0_5px_5px_rgba(0,0,0,7%)] ${
        border ? "border dark:border-primary-500" : ""
      }`}
      onMouseEnter={() => handleMouseEnter(items?.hotelId)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <div className='absolute top-[10px] bottom-[10px] overflow-hidden w-[35%] rounded-lg'>
        <Image
          imageBase={items?.picByte}
          className='h-full w-full object-cover rounded-lg'
        />
      </div>

      {/* Heart */}
      <div className='absolute top-[12px] right-[4px] z-[1002]'>
        <CardHeart isWishlist={false} />
      </div>

      <div className='absolute top-[50%] right-0 text-primary-50 dark:text-white'>
        <Icon icon={MdArrowForwardIos} size={20} />
      </div>

      <div className='flex flex-col overflow-hidden ml-[39%] w-[55%] h-full'>
        <div className='flex flex-col w-full gap-2'>
          <Title
            title={items?.name}
            fontMedium
            xxxl
            nowrap={false}
            className={`duration-200 ${
              value === items?.hotelId ? "text-secondary-50" : "text-hotel-200"
            }`}
          />

          <div>
            <div className='flex w-full h-auto gap-1'>
              <StayingRating rating={items?.rating} />
              <div className='flex flex-row items-end'>
                <Title title={`${items?.countView} lượt xem`} large />
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
                title={`${items?.totalDay} tuần, ${items?.adults} người lớn, ${items?.children} trẻ em`}
                colorTitle='dark:text-primary-50'
                large
              />
              {/* Price */}
              <div className='flex flex-col items-end gap-1 w-full'>
                {items?.discountPercent > 0 && (
                  <MoneyFormatStaying
                    price={items?.totalMoneyOriginal}
                    className='text-red-600 line-through text-[12px]'
                    prefix='VND '
                  />
                )}

                <div className='flex flex-row gap-1 items-center dark:text-white'>
                  <MoneyFormatStaying
                    price={items?.totalMoneyPromotion}
                    className='font-medium text-[16px] sm:text-[18px] '
                    prefix='VND '
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

CardBody.propTypes = {
  items: PropTypes.object,
  background: PropTypes.bool,
  border: PropTypes.bool,
};

export default CardBody;
