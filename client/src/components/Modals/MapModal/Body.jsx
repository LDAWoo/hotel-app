import { memo, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import useRegisterHotelSelected from "../../../hooks/Map/useRegisterHotelSelected";
import useRegisterSearchHotelResult from "../../../hooks/SearchResults/useRegisterSearchHotelResult";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import Filter from "../../../pages/SearchResults/Filter/Filter";
import Icon from "../../Icon/Icon";
import Loading from "../../Loading/Loading";
import CardBody from "./CardBody";
import GoogleMapCustom from "./GoogleMap";
import ItemBody from "./ItemBody";
import NoItem from "./NoItem";
function Body() {
  const [visibleItem, setVisibleItem] = useState(true);

  const handleClick = () => {
    setVisibleItem(!visibleItem);
  };
  const { width } = useRegisterWindowSizeStore();

  const { ourHotels, setOurHotels } = useRegisterSearchHotelResult();

  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, items } = useRegisterHotelSelected();

  const currentHotelsLength = ourHotels.length;
  return (
    <div className='relative w-full h-full'>
      <div className='relative flex w-full flex-row h-full'>
        <>
          {width >= 900 ? (
            <>
              {currentHotelsLength > 0 && (
                <div className='relative min-w-[265px] float-left h-full z-[1000] overflow-x-hidden overflow-y-auto bg-white dark:bg-primary-700 rounded-tl-lg rounded-bl-lg p-1'>
                  <Filter />
                </div>
              )}
              <div
                className={`absolute overflow-x-hidden p-[8px] pt-0 z-[999]  bg-white dark:bg-primary-700 overflow-y-auto box-border top-0 h-full transition-[left] duration-500 ${
                  visibleItem
                    ? currentHotelsLength > 0
                      ? "left-[265px] w-[380px] opacity-1"
                      : "left-0 w-[265px] rounded-tl-lg rounded-bl-lg"
                    : currentHotelsLength > 0
                    ? "left-0 w-[265px] rounded-tl-lg rounded-bl-lg"
                    : "-left-[265px] w-[265px] p-[0px] opacity-0"
                }`}
              >
                <div className='relative'>
                  {currentHotelsLength > 0 ? (
                    <ItemBody data={ourHotels} />
                  ) : (
                    <NoItem />
                  )}
                  {isLoading && <Loading />}
                </div>
              </div>
              <div
                className={`absolute z-50 flex items-center transition-[left] duration-500 justify-center dark:text-white cursor-pointer w-6 h-6 top-3 bg-white dark:bg-primary-600 dark:border-primary-500 shadow-[1px_1px_2px_0px_rgba(100,100,100,0.5)] dark:shadow-[1px_1px_2px_0px_rgba(23,24,25,0.9)] hover:bg-gray-100 rounded-tr-md rounded-br-md border-[1px] ${
                  visibleItem
                    ? currentHotelsLength > 0
                      ? "left-[645px]"
                      : "left-[268px]"
                    : currentHotelsLength > 0
                    ? "left-[268px] rotate-180"
                    : "left-[0px] rotate-180"
                }`}
                onClick={handleClick}
              >
                <Icon icon={IoIosArrowBack} size={16} />
              </div>
            </>
          ) : (
            <>
              {isOpen && (
                <div className='absolute inset-[auto_8px_8px] z-[401]'>
                  <CardBody
                    background
                    id={items?.id}
                    image={items?.image}
                    name={items?.name}
                    rating={items?.rating}
                    reviews={items?.reviews}
                    days={items?.days}
                    adults={items?.adults}
                    child={items?.child}
                  />
                </div>
              )}
            </>
          )}
        </>

        <div
          className={`absolute right-0 top-0 left-0 bottom-0 rounded-tl-[0px] rounded-bl-[0px] rounded-tr-lg rounded-br-lg transition-[left] duration-500 ${
            visibleItem
              ? currentHotelsLength > 0
                ? "left-0 2md:left-[640px]"
                : "left-0 2md:left-[268px]"
              : currentHotelsLength > 0
              ? "left-0 2md:left-[265px]"
              : "left-0"
          }`}
        >
          <div className='relative w-full h-full'>
            <GoogleMapCustom data={ourHotels} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Body);
