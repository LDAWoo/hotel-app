import { SlLocationPin } from "react-icons/sl";
import SearchBox from "./SearchBox";
import { AiOutlineClose, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { LuCalendarDays } from "react-icons/lu";
import { useState } from "react";
import { useTranslation } from "react-i18next";
function Search() {
  const { t } = useTranslation();

  const [valueLocation, setValueLocation] = useState("");

  const handleChangeInput = (e) => {
    setValueLocation(e.target.value);
  };

  const handleClose = () => {
    setValueLocation("");
  };

  const handleSubmit = () => {};

  return (
    <div className='w-full'>
      <div className='w-full m-auto lg:max-w-[1100px]'>
        <div className='absolute w-full z-10 left-0 top-[50px] md:-bottom-[50px]'>
          <form action='' className='m-0 p-0'>
            <div className='flex flex-col md:flex-row items-center mt-2 mb-5 ml-0 mr-0 rounded-lg bg-orange-300'>
              <SearchBox
                input
                placeholder={t("Search.location")}
                icon={SlLocationPin}
                size={24}
                iconClose={AiOutlineClose}
                sizeClose={18}
                value={valueLocation}
                handleChangeInput={handleChangeInput}
                handleClose={handleClose}
              />
              <SearchBox className='' icon={LuCalendarDays} size={24} button />
              <SearchBox icon={AiOutlineUser} size={24} button />
              <SearchBox
                icon={AiOutlineSearch}
                size={24}
                className='w-full min-w-[100px] md:w-[120px]'
                title={t("Search.search")}
                button
                handleSubmit={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
