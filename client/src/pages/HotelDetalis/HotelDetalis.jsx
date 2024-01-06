import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { getHotelById } from "../../api/HotelDetails";
import ImageModal from "../../components/Modals/ImageModal/ImageModal";
import useRegisterHotelDetails from "../../hooks/HotelDetails/useRegisterHotelDetails";
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
        setHotels(results);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

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
