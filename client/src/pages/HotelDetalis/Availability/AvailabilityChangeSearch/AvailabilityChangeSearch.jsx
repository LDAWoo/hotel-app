import CalendarBox from "../../../../components/Search/Calendar/CalendarBox";
import GuestBox from "../../../../components/Search/Guest/GuestBox";
import SearchBox from "../../../../components/Search/SearchBox/SearchBox";
import useRegisterWindowSizeStore from "../../../../hooks/useRegisterWindowSizeStore";

const AvailabilityChangeSearch = () => {
  const { width } = useRegisterWindowSizeStore();

  return (
    <div className='flex flex-row flex-shrink-0 w-full'>
      {width > 900 ? (
        <div className='w-full flex flex-col 2md:flex-row bg-secondary-50 p-1 gap-1'>
          <CalendarBox />
          <GuestBox />
          <SearchBox title='Change Search' />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AvailabilityChangeSearch;
