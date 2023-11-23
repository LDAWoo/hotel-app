import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMapFill } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import { getHotelById } from "../../api/HotelDetails";
import Button from "../../components/Buttons/Button";
import ImageModal from "../../components/Modals/ImageModal/ImageModal";
import useRegisterHotelDetails from "../../hooks/HotelDetails/useRegisterHotelDetails";
import useRegisterModalSearch from "../../hooks/useRegisterModalSearch";
import useRegisterWindowSizeStore from "../../hooks/useRegisterWindowSizeStore";
import Availability from "./Availability/Availability";
import BodyImageModal from "./BodyImageModal/BodyImageModal";
import DescriptionHighlight from "./DescriptionHighlight/DescriptionHighlight";
import GuestReview from "./GuestReview/GuestReview";
import HotelGallery from "./HotelGallery/HotelGallery";
import HotelProperty from "./HotelProperty/HotelProperty";
import SideBar from "./SideBar/SideBar";

function HotelDetails() {
  const { width } = useRegisterWindowSizeStore();
  const { onOpen, onClose } = useRegisterModalSearch();
  const { t } = useTranslation();

  const [searchParams] = useSearchParams();
  const currentHotelId = searchParams?.get("id") || "";
  const currentLocation =
    searchParams?.get("location")?.split("+").join(" ") || "";
  const currentCheckInDate = searchParams?.get("checkin") || "";
  const currentCheckOutDate = searchParams?.get("checkout") || "";
  const currentAdults = searchParams?.get("group_adults") || "";
  const currentChildren = searchParams?.get("group_children") || "";
  const currentRooms = searchParams?.get("group_rooms") || "";

  const { setHotels, setLoading } = useRegisterHotelDetails();

  const data = {
    hotelId: currentHotelId,
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

  useEffect(() => {
    const fetch = async () => {
      try {
        const results = await getHotelById(data);
        console.log(results);
        setHotels(results.listResult[0]);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  const handleShowModalSearch = () => {
    onOpen();
  };
  useEffect(() => {
    onClose();
  }, [width]);

  return (
    <div className='w-full'>
      <div className='w-full m-auto lg:max-w-[var(--max-width)] mt-10 p-[10px] bg-transparent'>
        <div className='flex flex-col w-full'>
          <div className='relative flex flex-col 2md:flex-row w-full gap-2 mb-5'>
            {width >= 900 && (
              <div className='hidden sm:flex'>
                <SideBar />
              </div>
            )}

            {width < 900 && (
              <Button
                title={t("Search.search")}
                icon={AiOutlineSearch}
                className='w-[100px] h-[40px] mt-5 mb-5 border-[2px] duration-500 rounded-md dark:border-primary-500 dark:text-white hover:border-hotel-50 hover:dark:border-hotel-50 font-medium'
                size={width < 640 ? 16 : 24}
                onClick={handleShowModalSearch}
              />
            )}

            {width < 900 && (
              <Button
                className='fixed bottom-[5%] left-0 right-0 max-w-[125px] mx-auto h-10 z-[9] bg-white dark:bg-primary-600 dark:text-white hover:scale-105 hover:dark:shadow-[0_2px_6px_2px_rgba(245,246,247,0.2)] hover:shadow-[0_2px_6px_2px_rgba(24,25,26,0.2)] duration-500 border-[2px] border-hotel-50 rounded-full font-medium'
                title='Show map'
                icon={BsFillMapFill}
              />
            )}

            <div className=' w-full 2md:w-[calc(100%_-_280px)] left-0 2md:left-[280px] '>
              <HotelGallery />
            </div>
          </div>

          <HotelProperty />
          <DescriptionHighlight />
          <Availability />
          <GuestReview />
          <ImageModal body={<BodyImageModal />} />
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;
