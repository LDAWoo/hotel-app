import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";

import CalendarBox from "./Calendar/CalendarBox";
import LocationBox from "./Location/LocationBox";
import SearchBox from "./SearchBox";
import GuestBox from "./Guest/GuestBox";

function Search() {
  const { t } = useTranslation();
  const handleSubmit = () => {};

  return (
    <div className='w-full h-full'>
      <div className='relative w-full h-full m-auto lg:max-w-[1100px]'>
        <div className='absolute w-full h-full z-10 top-0'>
          <form action='' className='m-0 p-0'>
            <div className='flex gap-1 p-1 flex-col 2md:flex-row items-center mt-2 mb-5 ml-0 mr-0 rounded-lg bg-secondary-50'>
              <LocationBox />
              <CalendarBox />
              <GuestBox />
              <SearchBox
                icon={AiOutlineSearch}
                size={24}
                className='w-full min-w-[120px] 2md:w-[120px]'
                title={t("Search.search")}
                button
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
