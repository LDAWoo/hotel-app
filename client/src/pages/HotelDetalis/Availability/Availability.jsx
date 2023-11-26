import Title from "../../../components/Title/Title";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import useRegisterHotelDetails from "../../../hooks/HotelDetails/useRegisterHotelDetails";

import AvailabilityChangeSearch from "./AvailabilityChangeSearch/AvailabilityChangeSearch";
import AvailabilityRoom from "./AvailabilityRoom/AvailabilityRoom";
import AvailabilityMobile from "./AvailabilityMobile/AvailabilityMobile";
function Availability() {
  const { width } = useRegisterWindowSizeStore();
  const { hotels, loading } = useRegisterHotelDetails();
  return (
    <div className='w-full flex flex-col gap-1 dark:text-white mt-2'>
      <Title title='Availability' fontBold xxl />
      <AvailabilityChangeSearch />
      {width > 900 ? (
        loading ? (
          <div>Loading</div>
        ) : (
          <AvailabilityRoom data={hotels} />
        )
      ) : (
        <AvailabilityMobile />
      )}
    </div>
  );
}

export default Availability;
