import { useEffect, useState } from "react";
import GoogleMapCustom from "./GoogleMap";
import ItemBody from "./ItemBody";
import { IoIosArrowBack } from "react-icons/io";
import Loading from "../../Loading/Loading";
import Filter from "../../../pages/SearchResults/Filter/Filter";
import Icon from "../../Icon/Icon";
import { getSearchResults } from "../../Constants/SearchResults";
function Body() {
  const [visibleItem, setVisibleItem] = useState(true);

  const handleClick = () => {
    setVisibleItem(!visibleItem);
  };

  const [ourHotels, setOurHotels] = useState(getSearchResults);
  const [isLoading, setIsLoading] = useState(false);

  console.log(ourHotels);

  return (
    <div className='relative w-full h-full'>
      <div className='relative flex w-full flex-row h-full'>
        <div className='relative min-w-[265px] float-left h-full z-[1000] overflow-x-hidden overflow-y-auto bg-white dark:bg-primary-700 rounded-tl-lg rounded-bl-lg p-1'>
          <Filter />
        </div>
        <div
          className={`absolute overflow-x-hidden p-[8px] pt-0 z-[999] bg-white dark:bg-primary-700 overflow-y-auto box-border top-0 h-full transition-[left] duration-500 ${
            visibleItem
              ? "left-[265px] w-[380px]"
              : "left-[0] w-[265px] rounded-tl-lg rounded-bl-lg"
          }`}
        >
          <div className='relative'>
            <ItemBody data={ourHotels} />
            {isLoading && <Loading />}
          </div>
        </div>
        <div
          className={`absolute z-50 flex items-center transition-[left] duration-500 justify-center dark:text-white cursor-pointer w-6 h-6 top-3 bg-white dark:bg-primary-600 dark:border-primary-500 shadow-[1px_1px_2px_0px_rgba(100,100,100,0.5)] dark:shadow-[1px_1px_2px_0px_rgba(23,24,25,0.9)] hover:bg-gray-100 rounded-tr-md rounded-br-md border-[1px] ${
            visibleItem ? "left-[645px]" : "left-[268px] rotate-180"
          }`}
          onClick={handleClick}
        >
          <Icon icon={IoIosArrowBack} size={16} />
        </div>
        <div
          className={`absolute right-0 top-0 left-0 bottom-0 transition-[left] duration-500 ${
            visibleItem ? "left-[640px]" : "left-[265px]"
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

export default Body;
