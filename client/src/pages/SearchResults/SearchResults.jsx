import { useEffect, useState } from "react";
import Border from "../../components/Border/Border";
import useRegisterSearchHotelResult from "../../hooks/SearchResults/useRegisterSearchHotelResult";
import useRegisterModalFilter from "../../hooks/useRegisterModalFilter";
import useRegisterWindowSizeStore from "../../hooks/useRegisterWindowSizeStore";
import { post } from "../../utils/request";
import Filter from "./Filter/Filter";
import FilterMobile from "./Filter/FilterMobile";
import ItemResults from "./ItemResults/ItemResults";
import Map from "./Map/Map";
import MapMobile from "./Map/MapMobile";
import NoResult from "./NoResult";

function SearchResult() {
  const { width } = useRegisterWindowSizeStore();
  const { onClose } = useRegisterModalFilter();

  useEffect(() => {
    onClose();
  }, [width]);

  const searchParams = new URLSearchParams(window.location.search);
  const currentLocation =
    searchParams?.get("location")?.split("+").join(" ") || "";
  const currentCheckInDate = searchParams?.get("checkin") || "";
  const currentCheckOutDate = searchParams?.get("checkout") || "";
  const currentAdults = searchParams?.get("group_adults") || "";
  const currentChildren = searchParams?.get("group_children") || "";
  const currentRooms = searchParams?.get("group_rooms") || "";

  const { ourHotels, setOurHotels } = useRegisterSearchHotelResult();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = {
        city: currentLocation,
        country: "Viet Nam",
        checkInDate: currentCheckInDate,
        checkOutDate: currentCheckOutDate,
        adults: currentAdults,
        typeOfGuestChildren: true,
        children: currentChildren,
        childrenOldStart: "Children >= 12",
        childrenOldEnd: "Children >= 14",
        quantityRoom: currentRooms,
      };

      console.log(data);

      const response = await post("hotel/get-condition", data);
      console.log(response);
      setOurHotels(response.listResult);
    } catch (error) {
      console.error("Error fetching hotel data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(ourHotels);

  return (
    <div className='w-full'>
      <div className='w-full m-auto lg:max-w-[1100px] mt-10 p-[10px] bg-transparent'>
        <div className='flex flex-col w-full gap-2'>
          {width < 900 && (
            <div className='flex flex-col gap-2'>
              <div className='flex flex-row'>
                <FilterMobile />
                <MapMobile />
              </div>
              <Border />
            </div>
          )}

          <div className='relative flex w-full gap-3'>
            <div className='hidden 2md:flex flex-col w-full 2md:w-[24%] absolute 2md:relative'>
              <Map />
              {ourHotels.length > 0 && <Filter />}
            </div>

            <div className='w-full 2md:w-[74%]'>
              {ourHotels.length > 0 ? (
                <ItemResults data={ourHotels} isLoading={loading} />
              ) : (
                <NoResult searchResult={currentLocation} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
