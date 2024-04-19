import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import CarouselCustom from "../../../components/Carousel/CarouselCustom";
import { getLocale } from "../../../components/Locale/Locale";
import HomeTitle from "../HomeTitle";
import RecentSearchBox from "./RecentSearchBox";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import { DeviceContext } from "../../../components/Contexts/AppDeviceProvider";
import { useContext, useEffect } from "react";
import { Navigation } from "swiper/modules";
import useRegisterRecentSearches from "../../../hooks/Home/useRegisterRecentSearches";

function RecentSearch() {
  const { t } = useTranslation();
  const locale = getLocale();
  const { width } = useRegisterWindowSizeStore();
  const { isMobile } = useContext(DeviceContext);
  const city = "Ho Chi Minh";
  const country = "Vietnam";
  const apiKey = 'AIzaSyC3tkfodNtN9EdcS5QKtA6C7kHB5bOTHoU';

  const imageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(city + ', ' + country)}&zoom=10&size=400x400&key=${apiKey}`;
  const {recentSearches} = useRegisterRecentSearches();


  console.log(imageUrl);

  useEffect(() => {
    
  },[])

  return (
    <div className='w-full mb-5 ml-0 mr-0 mt-0'>
      <div className='flex flex-col w-full'>
        <div className='mb-5'>
          <HomeTitle title={t("RecentSearch.title")} />
        </div>
        <div className='w-full '>
          <CarouselCustom
            slides={[1,2,3,4,5]}
            spaceBetween={15}
            navigation={!isMobile}
            modules={[Navigation]}
            slidesPerView={width >= 900 ? 3 : width >= 640 ? 2 : 1}
            component={RecentSearchBox}
          />
        </div>
      </div>
    </div>
  );
}

export default RecentSearch;
