import { useEffect, useState } from "react";
import { BsFillMapFill } from "react-icons/bs";
import { TbFilterEdit } from "react-icons/tb";
import { useSearchParams } from "react-router-dom";
import Border from "../../components/Border/Border";
import Button from "../../components/Buttons/Button";
import useRegisterModalFilter from "../../hooks/useRegisterModalFilter";
import useRegisterWindowSizeStore from "../../hooks/useRegisterWindowSizeStore";
import { post } from "../../utils/request";
import Filter from "./Filter/Filter";
import ItemResults from "./ItemResults/ItemResults";
import Map from "./Map/Map";

function SearchResult() {
  const { width } = useRegisterWindowSizeStore();
  const { onOpen, onClose } = useRegisterModalFilter();

  useEffect(() => {
    onClose();
  }, [width]);

  const [searchParams] = useSearchParams();
  const currentLocation = searchParams?.get("location")?.split("+").join(" ");
  const currentCheckInDate = searchParams?.get("checkin");
  const currentCheckOutDate = searchParams?.get("checkout");
  const currentAdults = searchParams?.get("group_adults");
  const currentChildren = searchParams?.get("group_children");
  const currentRooms = searchParams?.get("group_rooms");

  const [ourHotels, setOurHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = {
        city: currentLocation,
        country: "Ho Chi Minh",
        checkInDate: currentCheckInDate,
        checkOutDate: currentCheckOutDate,
        adults: currentAdults,
        typeOfGuestChildren: true,
        children: currentChildren,
        childrenOldStart: "Children >= 12",
        childrenOldEnd: "Children >= 14",
        quantityRoom: currentRooms,
      };

      const response = await post("hotel/get-condition", data);
      console.log(response);
      setOurHotels(response.listResult);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching hotel data:", error);
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
                <Button
                  className='w-full text-hotel-50 hover:bg-hotel-25 pt-2 pb-2  justify-center'
                  title='Filter'
                  icon={TbFilterEdit}
                  size={20}
                  onClick={onOpen}
                  xl
                />
                <Button
                  className='w-full text-hotel-50 hover:bg-hotel-25 pt-2 pb-2  justify-center'
                  title='Map'
                  icon={BsFillMapFill}
                  size={14}
                  xl
                />
              </div>
              <Border />
            </div>
          )}

          <div className='relative flex w-full gap-3'>
            <div className='hidden 2md:flex flex-col w-full 2md:w-[24%] absolute 2md:relative'>
              <Map />
              <Filter />
            </div>

            <div className='w-full 2md:w-[74%]'>
              <ItemResults data={ourHotels} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
