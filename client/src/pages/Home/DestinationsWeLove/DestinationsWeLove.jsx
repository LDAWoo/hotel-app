import PropTypes from "prop-types";
import { useContext, useEffect, useMemo, useState } from "react";
import { Navigation } from "swiper/modules";
import Button from "../../../components/Buttons/Button";
import CarouselCustom from "../../../components/Carousel/CarouselCustom";
import { DeviceContext } from "../../../components/Contexts/AppDeviceProvider";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import HomeTitle from "../HomeTitle";
import ItemDestinationWeLove from "./ItemDestinationsWeLove";
import ItemDestinationsWeLoveSkeleton from "./ItemDestinationsWeLoveSkeleton";
import ItemHeadDestinationWeLoveSkeleton from "./ItemHeadDestinationsWeLoveSkeleton";
import { useTranslation } from "react-i18next";

const DestinationsWeLove = ({ data = [], isLoading }) => {
  const { t } = useTranslation();

  const DestinationWeLoveData = [
    {
      id: 1,
      title: t("Other.regions"),
      key: "hotelGroupPostalCodeResp",
    },
    {
      id: 2,
      title: t("Other.cities"),
      key: "hotelGroupCityResp",
    },
  ];

  const { width } = useRegisterWindowSizeStore();
  const { isMobile } = useContext(DeviceContext);
  const [state, setState] = useState({
    currentDestination: [],
    loading: true,
    chunks: [],
  });

  const chunkSize = 4;
  const maxSize = 4;

  const { currentDestination, chunks } = state;

  useEffect(() => {
    if (data?.length > 0) {
      const destination = data?.filter((v) => v.key.includes(data[3].key));
      setState((prevState) => ({
        ...prevState,
        currentDestination: destination,
      }));
    }
  }, [data]);

  const handleDestination = (key) => {
    if (currentDestination[0].key != key) {
      const destination = data.filter((v) => v.key.includes(key));
      setState((prevState) => ({
        ...prevState,
        currentDestination: destination,
      }));
    }
  };

  useEffect(() => {
    if (currentDestination.length > 0) {
      const newChunks = [];
      for (let i = 0; i < currentDestination[0].data?.length; i += chunkSize) {
        newChunks.push(currentDestination[0].data.slice(i, i + chunkSize));
      }
      setState((prevState) => ({ ...prevState, chunks: newChunks }));
    }
  }, [currentDestination]);

  const lengthSkeleton = useMemo(() => {
    return isLoading
      ? width > 900
        ? maxSize
        : width > 640
        ? maxSize - 1
        : maxSize - 2
      : 0;
  }, [width, maxSize, isLoading]);

  return (
    <div className='w-full mb-5 ml-0 mr-0 mt-0'>
      <div className='flex flex-col w-full'>
        <div className='mb-5'>
          <HomeTitle title={t("WeLove.title")} />
        </div>

        <div className='mb-4'>
          {isLoading ? (
            <div className='flex gap-2'>
              {DestinationWeLoveData.map((_, index) => (
                <ItemHeadDestinationWeLoveSkeleton key={index} />
              ))}
            </div>
          ) : (
            <ul className='list-none flex gap-2'>
              {currentDestination.length > 0 &&
                DestinationWeLoveData.map((item, index) => (
                  <li key={index}>
                    <Button
                      title={item?.title}
                      onClick={() => handleDestination(item.key)}
                      classTitle='capitalize'
                      className={`p-2 rounded-lg duration-200 ${
                        currentDestination[0].key === item.key
                          ? "text-hotel-50"
                          : "font-medium hover:bg-gray-100 dark:hover:bg-primary-500 dark:text-primary-50"
                      }`}
                    />
                    <div
                      className={` ${
                        currentDestination[0].key === item.key
                          ? "border border-b-[1px] border-hotel-75 dark:border-hotel-500"
                          : ""
                      }`}
                    ></div>
                  </li>
                ))}
            </ul>
          )}
        </div>
        {isLoading ? (
          <div className='flex gap-4'>
            {Array.from({ length: lengthSkeleton }, (_, index) => (
              <div key={index} className='flex flex-col'>
                {Array.from({ length: 2 }, (_, index) => (
                  <ItemDestinationsWeLoveSkeleton key={index} />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div>
            <CarouselCustom
              spaceBetween={15}
              navigation={!isMobile}
              modules={[Navigation]}
              slidesPerView={width >= 900 ? 4 : width >= 640 ? 3 : 2}
              slides={chunks}
              component={ItemDestinationWeLove}
            />
          </div>
        )}
      </div>
    </div>
  );
};

DestinationsWeLove.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default DestinationsWeLove;
