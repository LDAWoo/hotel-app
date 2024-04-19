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
import { useTranslation } from "react-i18next";
import useRegisterToolTipLocation from "../../hooks/useRegisterToolTipLocation";
import useRegisterRecentSearches from "../../hooks/Home/useRegisterRecentSearches";
import { useEffect } from "react";

function Search() {
  const { valueLocation, onOpenAlert, onCloseAlert } =
    useRegisterLocationStore();
  const { startDate, endDate } = useRegisterDateStore();
  const { adult, child, rooms } = useRegisterGuestStore();
  const {onClose} = useRegisterToolTipLocation()
  const navigate = useNavigate();
  const { t } = useTranslation();
  const recentSearchesFromStorage = JSON.parse(localStorage.getItem('recentSearches')) || [];
  const {setRecentSearches, addRecentSearch,recentSearches} = useRegisterRecentSearches();

  useEffect(() => {
    setRecentSearches(recentSearchesFromStorage)
  },[])

  const handleSubmit = () => {
    const location = valueLocation; 

    if (!location) {
      onOpenAlert();
      return;
    }
    onClose();
    onCloseAlert();

    const locations = {
      location: location,
      adult: adult,
      child: child,
      rooms: rooms,
      startDate: format(startDate, "yyyy-MM-dd"),
      endDate: format(endDate, "yyyy-MM-dd"),
    }

    const isLocationInRecentSearches = (location) => {
      return recentSearches.some(search => search.location === location);
    };

    if (!isLocationInRecentSearches(location)) {
      addRecentSearch(locations);
      localStorage.setItem('recentSearches', JSON.stringify([...recentSearchesFromStorage, locations]));
    }

    const queryParams = new URLSearchParams();
    queryParams.set("location", location);
    queryParams.set("checkin", format(startDate, "yyyy-MM-dd"));
    queryParams.set("checkout", format(endDate, "yyyy-MM-dd"));
    queryParams.set("group_adults", adult);
    queryParams.set("group_children", child);
    queryParams.set("group_rooms", rooms);
    const queryString = queryParams.toString();

    navigate(`${routesConfig.searchResults}?${queryString}`);
  };

  const handleKeydown = () => {
    handleSubmit();
  }

  return (
    <div className='w-full h-full'>
      <div className='relative w-full h-full m-auto lg:max-w-[1100px]'>
        <div className='absolute w-full h-full z-10 top-3'>
          <div className='m-0 p-0'>
            <div className='flex gap-1 p-1 flex-col 2md:flex-row items-center mt-2 mb-5 ml-0 mr-0 rounded-lg bg-secondary-50'>
              <LocationBox onKeyDown={handleKeydown}/>
              <CalendarBox />
              <GuestBox />
              <SearchBox
                onClick={handleSubmit}
                className='w-full'
                title={t("Search.search")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
