import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigation } from "swiper/modules";
import CarouselCustom from "../../../components/Carousel/CarouselCustom";
import { DeviceContext } from "../../../components/Contexts/AppDeviceProvider";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import HomeTitle from "../HomeTitle";
import ItemUniqueProperty from "./ItemUniqueProperty";
import ItemUniquePropertySkeleton from "./ItemUniquePropertySkeleton";
import "./UniquePropertyStyle.scss";
const UniqueProperty = ({ data = [], isLoading }) => {
  const { width } = useRegisterWindowSizeStore();
  const { isMobile } = useContext(DeviceContext);

  const [currentUniqueProperty, setCurrentUniqueProperty] = useState([]);

  useEffect(() => {
    if (!isLoading && data.length > 0) {
      setCurrentUniqueProperty(data[1]?.data);
    }
  }, [data, isLoading]);

  const { t } = useTranslation();
  return (
    <div className='w-full mb-5 ml-0 mr-0 mt-0'>
      <div className='flex flex-col w-full'>
        <div className='mb-5'>
          <HomeTitle
            title='Stay at our top unique properties'
            subTitle="From castles and villas to boats and igloos, we've got it all "
          />
        </div>
        {isLoading ? (
          <div className='flex gap-4'>
            {Array.from({ length: 4 }).map((_, index) => (
              <ItemUniquePropertySkeleton key={index} />
            ))}
          </div>
        ) : (
          <div>
            <CarouselCustom
              spaceBetween={15}
              navigation={!isMobile}
              modules={[Navigation]}
              slidesPerView={width >= 900 ? 4 : width >= 640 ? 3 : 2}
              slides={currentUniqueProperty}
              component={ItemUniqueProperty}
            />
          </div>
        )}
      </div>
    </div>
  );
};

UniqueProperty.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default UniqueProperty;
