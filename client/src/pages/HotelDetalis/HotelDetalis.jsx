import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMapFill } from "react-icons/bs";
import Button from "../../components/Buttons/Button";
import useRegisterWindowSizeStore from "../../hooks/useRegisterWindowSizeStore";
import HotelGallery from "./HotelGallery/HotelGallery";
import SideBar from "./SideBar/SideBar";
import useRegisterModalSearch from "../../hooks/useRegisterModalSearch";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import HotelProperty from "./HotelProperty/HotelProperty";
function HotelDetails() {
  const { width } = useRegisterWindowSizeStore();
  const { onOpen, onClose } = useRegisterModalSearch();
  const { t } = useTranslation();

  const handleShowModalSearch = () => {
    onOpen();
  };
  useEffect(() => {
    onClose();
  }, [width]);
  return (
    <div className='w-full'>
      <div className='w-full m-auto lg:max-w-[1100px] mt-10 p-[10px] bg-transparent'>
        <div className='flex flex-col w-full'>
          <div className='relative w-full h-[645px] 2md:h-[565px] mb-5'>
            {width >= 900 && (
              <div className='absolute left-0 top-0'>
                <SideBar />
              </div>
            )}

            {width < 900 && (
              <Button
                title={t("Search.search")}
                icon={AiOutlineSearch}
                className='w-auto h-[40px] mt-5 mb-5 border-[2px] pr-3 duration-500 rounded-md dark:border-primary-500 dark:text-white hover:border-hotel-50 hover:dark:border-hotel-50 font-medium'
                size={24}
                onClick={handleShowModalSearch}
              />
            )}

            {width < 900 && (
              <Button
                className='fixed p-2 left-[42%] bottom-[10%] z-[9] bg-white dark:bg-primary-600 dark:text-white hover:scale-105 hover:dark:shadow-[0_2px_6px_2px_rgba(245,246,247,0.2)] hover:shadow-[0_2px_6px_2px_rgba(24,25,26,0.2)] duration-500 border-[2px] border-hotel-50 rounded-full font-medium'
                title='Show map'
                icon={BsFillMapFill}
              />
            )}

            <div className='absolute w-full 2md:w-[calc(100%_-_280px)] left-0 2md:left-[280px] '>
              <HotelGallery />
            </div>
          </div>

          <HotelProperty />
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;
