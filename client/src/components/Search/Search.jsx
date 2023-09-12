import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../configs/routesConfig";
import useRegisterDateStore from "../../hooks/useRegisterDateStore";
import useRegisterGuestStore from "../../hooks/useRegisterGuestStore";
import useRegisterLocationStore from "../../hooks/useRegisterLocationStore";
import CalendarBox from "./Calendar/CalendarBox";
import GuestBox from "./Guest/GuestBox";
import LocationBox from "./Location/LocationBox";
import SearchBox from "./SearchBox/SearchBox";

function Search() {
  const { valueLocation, onOpenAlert, onCloseAlert } =
    useRegisterLocationStore();
  const { startDate, endDate } = useRegisterDateStore();
  const { adult, child, rooms } = useRegisterGuestStore();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const location = valueLocation?.split(" ").join("+");

    if (!location) {
      onOpenAlert();
      return;
    }
    onCloseAlert();

    const queryParams = new URLSearchParams();
    queryParams.set("location", valueLocation);
    queryParams.set("checkin", format(startDate, "yyyy-MM-dd"));
    queryParams.set("checkout", format(endDate, "yyyy-MM-dd"));
    queryParams.set("group_adults", adult);
    queryParams.set("group_children", child);
    queryParams.set("group_rooms", rooms);
    const queryString = queryParams.toString();

    navigate(`${routesConfig.searchResults}?${queryString}`);
  };

  return (
    <div className='w-full h-full'>
      <div className='relative w-full h-full m-auto lg:max-w-[1100px]'>
        <div className='absolute w-full h-full z-10 top-3'>
          <div className='m-0 p-0'>
            <div className='flex gap-1 p-1 flex-col 2md:flex-row items-center mt-2 mb-5 ml-0 mr-0 rounded-lg bg-secondary-50'>
              <LocationBox />
              <CalendarBox />
              <GuestBox />
              <SearchBox
                onClick={handleSubmit}
                visibleIcon
                className='w-full min-w-[120px] 2md:w-[120px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
