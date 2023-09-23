import { useTranslation } from "react-i18next";
import SearchBox from "../../../../components/Search/SearchBox/SearchBox";
import useRegisterDateStore from "../../../../hooks/useRegisterDateStore";
import Calender from "./Calendar/Calender";
import Guest from "./Guest/Guest";
import Location from "./Location/Location";
import Title from "../../../../components/Title/Title";

function Search() {
  const { t } = useTranslation();
  const { startDate, endDate } = useRegisterDateStore();

  const oneDay = 24 * 60 * 60 * 1000;
  const numberOfNights = Math.round(endDate - startDate) / oneDay;

  return (
    <div className='p-2 bg-secondary-50 dark:bg-secondary-50/60 w-full'>
      <div className='flex flex-col w-full gap-1'>
        <div className=''>
          <Title
            title={t("Search.search")}
            fontBold
            xxxl
            colorTitle='text-primary-700 dark:text-white'
          />
        </div>
        <Location title='Destination/property name:' />
        <Calender title='Check in - Check out' />
        <Guest title={`${numberOfNights} night day stay`} />
        <SearchBox className='w-full mt-3' />
      </div>
    </div>
  );
}

export default Search;
