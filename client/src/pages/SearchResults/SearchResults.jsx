import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getHotelByCondition } from "../../api/Search";
import Border from "../../components/Border/Border";
import useRegisterSearchHotelResult from "../../hooks/SearchResults/useRegisterSearchHotelResult";
import useRegisterModalFilter from "../../hooks/useRegisterModalFilter";
import useRegisterWindowSizeStore from "../../hooks/useRegisterWindowSizeStore";
import ItemResults from "./ItemResults/ItemResults";
import ItemResultsSkeleton from "./ItemResultsSkeleton";
import Map from "./Map/Map";
import MapMobile from "./Map/MapMobile";
import NoResult from "./NoResult";
import PageResults from "./PageResults/PageResults";

function SearchResult() {
  const { width } = useRegisterWindowSizeStore();
  const { onClose } = useRegisterModalFilter();
  useEffect(() => {
    onClose();
  }, [width]);

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const currentLocation =
    searchParams.get("location")?.split("+").join(" ") || "";
  const currentCheckInDate = searchParams.get("checkin") || "";
  const currentCheckOutDate = searchParams.get("checkout") || "";
  const currentAdults = searchParams.get("group_adults") || "";
  const currentChildren = searchParams.get("group_children") || "";
  const currentRooms = searchParams.get("group_rooms") || "";
  const currentLimitPage = searchParams.get("limit_page") || 8;
  const currentPage = searchParams.get("offset") || 1;
  const [pageable, setPageable] = useState({});

  const { ourHotels, setOurHotels, loading, setLoading } =
    useRegisterSearchHotelResult();

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = {
        city: currentLocation,
        country: "Viet Nam",
        checkInDate: currentCheckInDate,
        checkOutDate: currentCheckOutDate,
        adults: currentAdults,
        typeOfGuestChildren: true,
        children: currentChildren,
        quantityRoom: currentRooms,
        limitPage: currentLimitPage,
        currentPage,
      };
      const results = await getHotelByCondition(data);
      setOurHotels(results.data);
      setPageable(results?.meta);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setOurHotels([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location.search]);

  return (
    <div className='w-full'>
      <div className='w-full m-auto lg:max-w-[1100px] mt-10 p-[10px] bg-transparent'>
        <div className='flex flex-col w-full gap-2'>
          {width < 900 && (
            <div className='flex flex-col gap-2'>
              <div className='flex flex-row'>
                {/* <FilterMobile /> */}
                <MapMobile />
              </div>
              <Border />
            </div>
          )}

          <div className='relative flex w-full gap-3'>
            <div className='hidden 2md:flex flex-col w-full 2md:w-[24%] absolute 2md:relative'>
              <Map />
              {/* {ourHotels && ourHotels.length > 0 && <Filter />} */}
            </div>

            <div className='w-full 2md:w-[75%]'>
              {loading ? (
                <div className='grid gap-3 grid-cols-1 w-full '>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div
                      key={index}
                      className='w-full h-[245px] p-4 border rounded-lg'
                    >
                      <div>
                        <ItemResultsSkeleton />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {ourHotels && ourHotels.length > 0 ? (
                    <div className='flex flex-col gap-2'>
                      <ItemResults data={ourHotels} isLoading={loading} />
                      <PageResults
                        data={pageable}
                        dataHotel={ourHotels}
                        isLoading={loading}
                      />
                    </div>
                  ) : (
                    <NoResult searchResult={currentLocation} />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
