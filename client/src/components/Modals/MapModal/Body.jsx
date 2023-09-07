import { useState } from "react";
import GoogleMapCustom from "./GoogleMap";
import ItemBody from "./ItemBody";
import { IoIosArrowBack } from "react-icons/io";
import Loading from "../../Loading/Loading";
import Filter from "../../../pages/SearchResults/Filter/Filter";
function Body() {
  const [visibleItem, setVisibleItem] = useState(true);

  const handleClick = () => {
    setVisibleItem(!visibleItem);
  };
  return (
    <div className='relative w-full h-full'>
      <div className='relative flex w-full flex-row h-full'>
        <div className='relative w-[265px] float-left h-full z-[1000] overflow-x-hidden overflow-y-auto bg-white dark:bg-primary-700 rounded-tl-lg rounded-bl-lg p-1'>
          <Filter />
        </div>
        <div
          className={`absolute overflow-x-hidden duration-500 p-[8px] pt-0 z-[999] bg-white dark:bg-primary-700 overflow-y-auto box-border w-[380px] top-0 h-full ${
            visibleItem
              ? "left-[265px]"
              : "left-[0] w-[200px] rounded-tl-lg rounded-bl-lg"
          }`}
        >
          <div className='relative'>
            <ItemBody />
            <Loading />
          </div>
        </div>
        <div
          className={`absolute flex items-center duration-500 justify-center text-hotel-200 cursor-pointer w-6 h-6 top-3 bg-white shadow-[1px_1px_2px_0px_rgba(100,100,100,0.5)] hover:bg-gray-100 rounded-tr-md rounded-br-md border-[1px] ${
            visibleItem ? "left-[645px]" : "left-[268px] rotate-180"
          }`}
          onClick={handleClick}
        >
          <IoIosArrowBack size={18} />
        </div>
        <div>
          <GoogleMapCustom />
        </div>
      </div>
    </div>
  );
}

export default Body;
