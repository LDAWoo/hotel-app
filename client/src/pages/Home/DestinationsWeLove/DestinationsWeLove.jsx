import HomeTitle from "../HomeTitle";
import CarouselCustom from "../../../components/Carousel/CarouselCustom";
import { useCallback, useEffect, useMemo, useState } from "react";
import ItemDestinationWeLove from "./ItemDestinationsWeLove";
import Button from "../../../components/Buttons/Button";
import { DestinationWeLoveData } from "../../../components/Constants/Home/DestinationsWeLove/DestinationWeLoveData";
import ItemDestinationsWeLoveSkeleton from "./ItemDestinationsWeLoveSkeleton";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import ItemHeadDestinationWeLoveSkeleton from "./ItemHeadDestinationsWeLoveSkeleton";
import PropTypes from "prop-types";

const DestinationsWeLove = ({ data, isLoading }) => {
  const [state, setState] = useState({
    currentDestination: [],
    loading: true,
    chunks: [],
  });

  const chunkSize = 4;
  const maxSize = 4;
  const { width } = useRegisterWindowSizeStore();

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

  const handleDestination = useCallback((key) => {
    if (currentDestination[0].key != key) {
      const destination = data.filter((v) => v.key.includes(key));
      setState((prevState) => ({
        ...prevState,
        currentDestination: destination,
      }));
    }
  });

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
          <HomeTitle title='Destinations we love' />
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
                      className={`p-2  rounded-lg duration-200 ${
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
              size={maxSize}
              data={chunks?.map((chunk, index) => (
                <div key={index} className='flex flex-col gap-2'>
                  {chunk.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <ItemDestinationWeLove
                        name={item.name}
                        properties={item?.quantityRoom}
                      />
                    </div>
                  ))}
                </div>
              ))}
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
