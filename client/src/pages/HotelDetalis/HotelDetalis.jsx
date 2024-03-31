import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
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
import Button from "../../components/Buttons/Button";
import Title from "../../components/Title/Title";
import routesConfig from "../../configs/routesConfig";

function HotelDetails() {
  const { width } = useRegisterWindowSizeStore();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentHotelId = searchParams?.get("id") || "";
  const currentLocation =
    searchParams?.get("location")?.split("+").join(" ") || "";
  const currentCheckInDate = searchParams?.get("checkin") || "";
  const currentCheckOutDate = searchParams?.get("checkout") || "";
  const currentAdults = searchParams?.get("group_adults") || "";
  const currentChildren = searchParams?.get("group_children") || "";
  const currentRooms = searchParams?.get("group_rooms") || "";

  const { hotels, setHotels, setLoading } = useRegisterHotelDetails();

  const data = {
    hotelId: currentHotelId,
    city: currentLocation,
    country: "Viet Nam",
    checkInDate: currentCheckInDate,
    checkOutDate: currentCheckOutDate,
    adults: currentAdults,
    typeOfGuestChildren: true,
    children: currentChildren,
    quantityRoom: currentRooms,
  };

  const fetch = async () => {
    try {
      setLoading(true);
      const results = await getHotelById(data);
      setHotels(results);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setHotels({});
    }
  };
  useEffect(() => {
    fetch();
  }, [navigate]);

  const handleReturnHome = () => {
    window.location.href = routesConfig.home;
  }
  
  
  return (
    <div className='w-full'>
      <div className='w-full m-auto lg:max-w-[var(--max-width)] mt-10 p-[10px] bg-transparent'>
        <div className='flex flex-col w-full'>
          {
            !Object.keys(hotels).length>0 ? 
            <div className='flex justify-center flex-col gap-4'>
              <div className="flex justify-center">
                <Title title="Not Found" fontBold extraLarge5/>
              </div>
              <div className="w-auto flex justify-center">
                <div >
                  <Button title="Return Home" background className="p-[8px_12px_8px_12px] rounded-[4px]" onClick={handleReturnHome}/>
                </div>
              </div>
            </div>
            :
            <>
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
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;
