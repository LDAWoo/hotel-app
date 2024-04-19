import Button from "../../../../components/Buttons/Button";
import StayingRating from "../../../../components/Staying/StayingRating";
import Title from "../../../../components/Title/Title";
import ToolTip from "../../../../components/ToolTip/ToolTip";
import useRegisterHotelDetails from "../../../../hooks/HotelDetails/useRegisterHotelDetails";
import HeaderSkeleton from "./HeaderSkeleton";
import Location from "./Location/Location";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useRegisterWishlist from "../../../../hooks/Wishlist/useRegisterWishlist";
import { addHotelFavorite, deleteHotelFavorite } from "../../../../api/User/Wishlist";
import routesConfig from "../../../../configs/routesConfig";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../components/Contexts/AppUserProvider";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

function Header() {
  const navigate = useNavigate()
  const {user, token} = useContext(UserContext)
  const { hotels,loading } = useRegisterHotelDetails();
  const {t} = useTranslation()
  const [isWhiteList, setIsWhiteList] = useState(false);
  const {wishlist, addToWishlist,removeFromWishlist, loadingWishlist} = useRegisterWishlist();
  const [loadingUpdateWishlist, setLoadingUpdateWishlist] = useState(false)

  useEffect(() => {
    if (wishlist.length > 0) {
       const isWhiteList = wishlist.find(item => item.hotelId === hotels?.hotelId)
       setIsWhiteList(isWhiteList)
    }
  },[wishlist,hotels])

  const handleUpdateWishlist = async () => {
    if(Object.keys(user).length === 0) {
      navigate(routesConfig.login)
      return;
    }
    if(loading) return;

    try{
      setLoadingUpdateWishlist(true)
      if(isWhiteList){
        await deleteHotelFavorite(hotels?.hotelId, token)
        removeFromWishlist(hotels)
        setLoadingUpdateWishlist(false)
        return;
      }
      await addHotelFavorite(hotels?.hotelId, token);
      addToWishlist(hotels)
      setLoadingUpdateWishlist(false)
    }catch(e){
      setLoadingUpdateWishlist(true)
    }
  }

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
                    <Button icon={isWhiteList ? IoMdHeart : IoMdHeartEmpty} spin={loadingUpdateWishlist || loadingWishlist} classSpin="w-6 h-6" classIcon={`${isWhiteList && 'text-error-100'} ${loadingUpdateWishlist || loadingWishlist && 'hidden'}`} className="p-0" classButton="w-full ml-1 mt-1 mb-1" size={24} onClick={() => handleUpdateWishlist()}/>
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
