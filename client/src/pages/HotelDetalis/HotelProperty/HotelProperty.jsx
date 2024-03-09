import { BiCheck, BiHomeAlt2 } from "react-icons/bi";
import HotelPropertyItems from "./HotelPropertyItem";
import { memo } from "react";
import useRegisterHotelDetails from "../../../hooks/HotelDetails/useRegisterHotelDetails";

function HotelProperty() {
  const { hotels, loading } = useRegisterHotelDetails();

  return (
    <div className='w-full'>
      <ul className='flex list-none items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar sm:flex-wrap sm:overflow-x-hidden w-full'>
        {loading ? (
          <div>Loading</div>
        ) : (
          <>
            {hotels.serviceAndAmenityRoomNameResponses.map((item, index) => (
              <HotelPropertyItems
                key={index}
                icon={BiCheck}
                title={item?.nameServiceAndAmenity}
              />
            ))}
          </>
        )}
      </ul>
    </div>
  );
}

export default memo(HotelProperty);
