import { BsInfoCircle } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../../../components/Buttons/Button";
import Icon from "../../../../components/Icon/Icon";
import Image from "../../../../components/Image/Image";
import StayingRating from "../../../../components/Staying/StayingRating";
import Title from "../../../../components/Title/Title";
import CardHeart from "../../../Home/OurHotel/CardHeart";
import MoneyFormatStaying from "../../../../components/Staying/MoneyFormatStaying";
import routesConfig from "../../../../configs/routesConfig";

const CardResult = ({ items }) => {
  const queryParams = new URLSearchParams();
  queryParams.set("location", items?.city);
  queryParams.set("checkin", items?.checkInDate);
  queryParams.set("checkout", items?.checkOutDate);
  queryParams.set("group_adults", items?.adults);
  queryParams.set("group_children", items?.children);
  queryParams.set("group_rooms", items?.quantityRoom);
  const queryString = queryParams.toString();

  return (
    <div className='flex flex-row w-full p-4 border rounded-lg duration-200 dark:border-primary-500 hover:bg-hotel-25 dark:hover:bg-primary-500'>
      <div className='flex flex-row gap-2 w-full'>
        {/* Image */}
        <Link
          to={`${
            routesConfig.hotelDetails +
            "?id=" +
            items?.hotelId +
            "&" +
            queryString
          }`}
          className='relative rounded-lg min-w-[20px] sm:min-w-[200px] max-w-[350px] min-h-[150px] max-h-[200px]'
        >
          <Image
            imageBase={items?.picByte}
            className='h-full w-full object-cover rounded-lg'
          />
          {/* Heart */}
          <div className='absolute top-[3%] right-[3%] z-[1]'>
            <CardHeart isWishlist={false} />
          </div>
        </Link>

        <div className='flex flex-col w-full'>
          <Link className='flex flex-row w-full'>
            <div className='flex-1'>
              <Title
                title={items?.name}
                colorTitle='text-hotel-200 hover:text-primary-700 dark:hover:text-white duration-200'
                fontBold
                extraLarge4
                nowrap={false}
              />
            </div>

            <div className='flex flex-row gap-2 items-center'>
              <div className='flex flex-col items-end'>
                <Title
                  title={`Điểm đánh giá`}
                  fontMedium
                  xl
                  className='dark:text-white'
                />
                <Title
                  title={`${items?.countReview + " đánh giá"}`}
                  large
                  className='dark:text-primary-50'
                />
              </div>
              <div>
                <StayingRating rating={items?.rating} />
              </div>
            </div>
          </Link>

          {/* Location */}
          <div className='flex flex-row gap-2'>
            <Title
              title={`${items?.districtAddress + ", " + items?.city}`}
              colorTitle='text-hotel-100 underline cursor-pointer hover:text-hotel-300'
              large
              fontMedium
            />
            <Title
              title='Xem trên bản đồ'
              colorTitle='text-hotel-100 underline cursor-pointer hover:text-hotel-300'
              large
              fontMedium
            />
          </div>

          <div className='flex flex-row  pl-2 mt-2 w-full'>
            <div className='flex flex-col sm:flex-row gap-2 w-full'>
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
              <div className='flex items-end flex-col gap-1 w-full'>
                {/* Date */}
                <Title
                  title={`${
                    items?.totalDay +
                    " tuần, " +
                    items?.adults +
                    " người lớn, " +
                    items?.children +
                    " trẻ em"
                  }`}
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

                <div>
                  <Button
                    title='Xem chỗ trống'
                    className='pt-[6px] pb-[6px] pr-2 pl-2 rounded-md justify-end'
                    fontMedium
                    xl
                    background
                    icon={MdKeyboardArrowRight}
                    classTitle='-translate-y-[1px]'
                    titlePosition='before'
                    size={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardResult;
