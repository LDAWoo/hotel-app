import { useContext, useEffect, useState } from "react";
import CarouselCustom from "../../../components/Carousel/CarouselCustom";
import HomeTitle from "../HomeTitle";
import ItemGuestLove from "./ItemGuestLove";
import { DeviceContext } from "../../../components/Contexts/AppDeviceProvider";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import { Navigation } from "swiper/modules";
import ItemGuestLoveSkeleton from "./ItemGuestLoveSkeleton";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types'

function GuestLove({ data, isLoading }) {
  const { t } = useTranslation();
  const [guestsLove, setGuestsLove] = useState([]);
  const { width } = useRegisterWindowSizeStore();
  const { isMobile } = useContext(DeviceContext);

  useEffect(() => {
    if (!isLoading && data.length > 0) {
      setGuestsLove(data[2]?.data);
    }
  }, [data, isLoading]);
  return (
    <div className='w-full mb-5 ml-0 mr-0 mt-0'>
      <div className='flex flex-col w-full'>
        <div className='mb-5'>
          <HomeTitle title={t("GuestLove.title")} />
        </div>
        {isLoading ? (
          <div className='grid grid-cols-2 sm:grid-cols-3 2md:grid-cols-4 gap-4'>
            {Array.from({ length: 4 }).map((_, index) => (
              <ItemGuestLoveSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div>
            <CarouselCustom
              spaceBetween={15}
              navigation={!isMobile}
              modules={[Navigation]}
              slidesPerView={width >= 900 ? 4 : width >= 640 ? 3 : 2}
              size={4}
              slides={guestsLove}
              component={ItemGuestLove}
            />
          </div>
        )}
      </div>
    </div>
  );
}
GuestLove.propTypes ={
  data: PropTypes.array,
  isLoading: PropTypes.bool
}


export default GuestLove;
