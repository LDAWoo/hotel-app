import Filter from "./Filter/Filter";
import ItemResults from "./ItemResults/ItemResults";
import { ourHotels } from "../../components/Constants/OurHotel";
import { TbFilterEdit } from "react-icons/tb";
import { BsFillMapFill } from "react-icons/bs";
import Map from "./Map/Map";
import Button from "../../components/Buttons/Button";
import useRegisterWindowSizeStore from "../../hooks/useRegisterWindowSizeStore";
import useRegisterModalFilter from "../../hooks/useRegisterModalFilter";
import { useEffect } from "react";
function SearchResult() {
  const { width } = useRegisterWindowSizeStore();
  const { onOpen, onClose } = useRegisterModalFilter();
  const handleShowModalFilter = () => {
    onOpen();
  };

  useEffect(() => {
    onClose();
  }, [width]);

  return (
    <div className='w-full'>
      <div className='w-full m-auto lg:max-w-[1100px] mt-10 p-[10px] bg-transparent'>
        <div className='flex flex-col w-full'>
          <div>Home</div>
          {width < 900 && (
            <Button
              title='Filter'
              className='w-[20%] h-[40px] mt-5 mb-5 border-[2px] duration-500 rounded-md dark:border-primary-500 dark:text-white hover:border-hotel-50 hover:dark:border-hotel-50 font-medium'
              icon={TbFilterEdit}
              size={24}
              onClick={handleShowModalFilter}
            />
          )}

          {width < 900 && (
            <Button
              className='fixed p-2 left-[42%] bottom-[10%] z-[9] bg-white dark:bg-primary-600 dark:text-white hover:scale-105 hover:dark:shadow-[0_2px_6px_2px_rgba(245,246,247,0.2)] hover:shadow-[0_2px_6px_2px_rgba(24,25,26,0.2)] duration-500 border-[2px] border-hotel-50 rounded-full font-medium'
              title='Show map'
              icon={BsFillMapFill}
            />
          )}

          <div className='relative flex w-full gap-2'>
            <div className=' hidden 2md:flex flex-col w-full 2md:w-[24%] absolute 2md:relative'>
              <Map />
              <Filter />
            </div>

            <div className='w-full 2md:w-[74%]'>
              <ItemResults data={ourHotels} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
