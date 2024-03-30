import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import Button from "../../../../components/Buttons/Button";
import StayingRating from "../../../../components/Staying/StayingRating";
import Title from "../../../../components/Title/Title";
import ToolTip from "../../../../components/ToolTip/ToolTip";
import useRegisterHotelDetails from "../../../../hooks/HotelDetails/useRegisterHotelDetails";
import HeaderSkeleton from "./HeaderSkeleton";
import Location from "./Location/Location";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { hotels, loading } = useRegisterHotelDetails();
  const {t} = useTranslation()
  const [loadingWishList, setLoadingWishList] = useState(false);
  const isWhiteList = true
  return (
    <div className='w-full'>
      {loading ? (
        <HeaderSkeleton />
      ) : (
        <div className='w-full flex flex-col'>
          <div></div>
          <div className='flex w-full'>
            <div className='flex flex-1 items-center'>
              <Title
                title={hotels?.name}
                fontBold
                extraLarge5
                className='dark:text-white'
              />
            </div>
            <div className="flex items-center justify-center mr-4 hover:bg-hotel-25 rounded-sm duration-200">
              <ToolTip content={`${isWhiteList ? t("SearchResults.propertyIsSaved") : t("SearchResults.save")}`} >
                <div>
                  <Button icon={isWhiteList ? RiHeartFill : RiHeartLine} loading={loadingWishList || loading} classLoading="w-[22px] h-[22px]" classIcon={`${isWhiteList && 'text-error-100'} ${loadingWishList && 'hidden'}`} className="p-0" classButton="w-full ml-1 mt-1 mb-1" size={24}/>
                </div>
              </ToolTip>
            </div>
            {hotels?.rating > 0 && <StayingRating rating={hotels?.rating} />}
          </div>
          <Location data={hotels} />
        </div>
      )}
    </div>
  );
}

export default Header;
