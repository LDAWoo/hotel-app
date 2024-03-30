import { BsInfoCircle } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../../../components/Buttons/Button";
import Icon from "../../../../components/Icon/Icon";
import Image from "../../../../components/Image/Image";
import StayingRating from "../../../../components/Staying/StayingRating";
import Title from "../../../../components/Title/Title";
import PropTypes from "prop-types";
import MoneyFormatStaying from "../../../../components/Staying/MoneyFormatStaying";
import routesConfig from "../../../../configs/routesConfig";
import { useTranslation } from "react-i18next";
import { RiHeartLine } from "react-icons/ri";
import { RiHeartFill } from "react-icons/ri";
import { useState } from "react";
import ToolTip from "../../../../components/ToolTip/ToolTip";
import {format} from 'date-fns'
import { getLocale } from "../../../../components/Locale/Locale";
import Border from "../../../../components/Border/Border";

const CardResult = ({ items }) => {
  const { t } = useTranslation();
  const locale = getLocale();
  const queryParams = new URLSearchParams();
  queryParams.set("location", items?.city);
  queryParams.set("checkin", items?.checkInDate);
  queryParams.set("checkout", items?.checkOutDate);
  queryParams.set("group_adults", items?.adults);
  queryParams.set("group_children", items?.children);
  queryParams.set("group_rooms", items?.quantityRoom);
  const queryString = queryParams.toString();
  const [loading, setLoading] =useState(false)

  const handleSeeAvailability = () => {
    const url =
      routesConfig.hotelDetails +
      "?id=" +
      items?.hotelId +
      "&" +
      queryString;
    window.open(url, "_blank");
  }

  const isWhiteList = true;

  console.log(items);

  return (
    <div className='flex flex-row w-full p-4 border rounded-lg duration-200 dark:border-primary-500 hover:bg-hotel-25 dark:hover:bg-primary-500'>
      <div className='flex flex-row gap-2 w-full'>
        {/* Image */}
        <Link
          target='_blank'
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
            src={items?.urlImage}
            className='w-[230px] h-full object-cover rounded-lg'
          />
          {/* Heart */}
            <div className='absolute top-[3%] right-[3%] z-[1] bg-white p-[3px] flex justify-center items-center rounded-full'>
              <ToolTip content={`${isWhiteList ? t("SearchResults.propertyIsSaved") : t("SearchResults.save")}`} >
                <div><Button icon={isWhiteList ? RiHeartFill : RiHeartLine} loading={loading} classLoading="w-[20px] h-[20px]" classIcon={`${isWhiteList && 'text-error-100'} ${loading && 'hidden'}`} className="p-0" classButton="w-full ml-1 mt-1 mb-1" size={20}/></div>
              </ToolTip>
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
                  title={t("SearchResults.pointEvaluation")}
                  fontMedium
                  xl
                  className='dark:text-white capitalize'
                />
                <Title
                  title={`${items?.countReview} ${t("SearchResults.evaluate")}`}
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
              title={`${
                items?.streetAddress +
                ", " +
                items?.districtAddress +
                ", " +
                items?.city
              }`}
              colorTitle='text-hotel-100 underline cursor-pointer hover:text-hotel-300'
              large
              fontMedium
            />
            {/* <Title
              title={t("SearchResults.seeOnMap")}
              className='text-hotel-100 underline cursor-pointer hover:text-hotel-300'
              large
              fontMedium
            /> */}
          </div>

          <div className='flex flex-row  pl-2 mt-2 w-full'>
            <div className='flex flex-col sm:flex-row gap-2 w-full'>
              {/* Categories */}
              <div className='flex flex-col gap-1 w-full dark:text-primary-50'>
                {/* <Title
                  title='Studio Có Ban Công'
                  colorTitle='dark:text-white'
                  fontBold
                  large
                />
                <Title title='1 studio nguyên căn • 1 phòng tắm •' large />
                <Title title='1 studio nguyên căn • 1 phòng tắm •' large />
                <Title title='1 studio nguyên căn • 1 phòng tắm •' large /> */}
              </div>
              {/* PriceAndDate */}
              <div className='flex items-end flex-col gap-1 w-full'>
                {/* Date */}
                <Title
                  title={`${items?.totalDay} ${t("SearchResults.nights")}, ${
                    items?.adults
                  } ${t("SearchResults.adults")}, ${items?.children} ${t(
                    "SearchResults.children",
                  )}`}
                  className='dark:text-primary-50'
                  large
                />
                {/* Price */}
                <div className='flex flex-col items-end gap-1 w-full'>
                  {items?.discountPercent > 0 && (
                    <MoneyFormatStaying
                      price={items?.totalMoneyOriginal}
                      decimalScale={0}
                      className='text-red-600 line-through text-[12px]'
                      prefix='VND '
                    />
                  )}

                  <div className='flex flex-row gap-1 items-center dark:text-white'>
                    <MoneyFormatStaying
                      price={items?.totalMoneyPromotion}
                      decimalScale={0}
                      className='font-medium text-[16px] sm:text-[18px] '
                      prefix='VND '
                    />
                    <ToolTip width={360} typeToolTip="TippyHeadless" items={
                      <div className="flex flex-col gap-3 p-4 text-[14px] shadow-[0px_2px_8px_0px_rgba(26,26,26,.16)] rounded-lg">
                        <div className="flex flex-row items-center justify-between">
                          <div className="flex flex-row items-center gap-1">
                            <MoneyFormatStaying
                              price={items?.totalMoneyOriginal / items?.totalDay}
                              decimalScale={0}
                              className=''
                              prefix='VND '
                            />
                            <span>x</span>
                            <Title title={`${items?.totalDay} ${t("SearchResults.nights")}`}/>
                          </div>
                          <div>
                            <MoneyFormatStaying
                              price={items?.totalMoneyOriginal}
                              decimalScale={0}
                              className=''
                              prefix='VND '
                            />
                          </div>
                        </div>

                        <div className="text-[12px]">
                            <Title nowrap={false} title={`${t("SearchResults.propertyOfferingDiscount")} ${format(new Date(items?.checkInDate), 'dd LLLL',{locale})} - ${format(new Date(items?.checkOutDate), 'dd LLLL',{locale})} ${format(new Date(items?.checkOutDate), 'yyyy',{locale})}`}/>
                        </div>

                        <div>
                          <Border/>
                        </div>

                        <div className="flex flex-row items-center justify-between">
                            <Title title={t("SearchResults.total")} fontMedium xxl/>
                            <MoneyFormatStaying
                              price={items?.totalMoneyPromotion}
                              decimalScale={0}
                              className='font-medium text-[14px] sm:text-[16px] '
                              prefix='VND '
                            />
                        </div>
                      </div>
                    }>
                      <div>
                        <Icon
                          icon={BsInfoCircle}
                          size={14}
                          classIcon='text-primary-700 dark:text-white'
                        />
                      </div>
                    </ToolTip>
                  </div>
                </div>

                <Title
                  title={t("SearchResults.taxesAndFees")}
                  className='dark:text-primary-50 capitalize'
                  large
                />

                <div>
                  <Button
                    title={t("SearchResults.seeAvailability")}
                    className='pt-[6px] pb-[6px] pr-2 pl-5 rounded-md justify-end capitalize'
                    fontMedium
                    xl
                    background
                    icon={MdKeyboardArrowRight}
                    classTitle='-translate-y-[1px]'
                    titlePosition='before'
                    size={24}
                    onClick={handleSeeAvailability}
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

CardResult.propTypes = {
  items: PropTypes.object,
};

export default CardResult;
