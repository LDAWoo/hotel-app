import { BsInfoCircle } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../../../components/Buttons/Button";
import Icon from "../../../../components/Icon/Icon";
import Image from "../../../../components/Image/Image";
import StayingRating from "../../../../components/Staying/StayingRating";
import Title from "../../../../components/Title/Title";
import CardHeart from "../../../Home/OurHotel/CardHeart";

const CardResult = () => {
  return (
    <div className='flex flex-row w-full p-4 border rounded-lg duration-200 dark:border-primary-500 hover:bg-hotel-25 dark:hover:bg-primary-500'>
      <div className='flex flex-row gap-2 w-full'>
        {/* Image */}
        <Link className='relative rounded-lg aspect-[20/20]'>
          <Image
            src='https://cf.bstatic.com/xdata/images/hotel/square200/411708796.webp?k=6be1f267544f29559b966e9bb461eb95c7f304ec19ba4ad6a3eeefb2e0bce159&o='
            className='min-h-full min-w-full object-cover rounded-lg'
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
                title='Beryl Signature Hotel & Travel'
                colorTitle='text-hotel-200 hover:text-primary-700 dark:hover:text-white duration-200'
                fontBold
                extraLarge4
              />
            </div>

            <div>
              <StayingRating rating={4.5} />
            </div>
          </Link>

          {/* Location */}
          <div className='flex flex-row gap-2'>
            <Title
              title='Quan Tay Ho'
              colorTitle='text-hotel-100 underline cursor-pointer hover:text-hotel-300'
              large
              fontMedium
            />
            <Title
              title='Xem tren ban do'
              colorTitle='text-hotel-100 underline cursor-pointer hover:text-hotel-300'
              large
              fontMedium
            />
          </div>

          <div className='flex flex-row border-l-[2px] dark:border-primary-500 pl-2 mt-2 w-full'>
            <div className='flex flex-row gap-2 w-full'>
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
                  title='1 tuần, 2 người lớn'
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

                <Button
                  title='Xem chỗ trống'
                  className='pt-[6px] pb-[6px] pr-2 pl-2 rounded-md w-full justify-center'
                  fontMedium
                  xxl
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
  );
};

export default CardResult;
