import Title from "../../../components/Title/Title";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import useRegisterHotelDetails from "../../../hooks/HotelDetails/useRegisterHotelDetails";

import AvailabilityChangeSearch from "./AvailabilityChangeSearch/AvailabilityChangeSearch";
import AvailabilityRoom from "./AvailabilityRoom/AvailabilityRoom";
import AvailabilityMobile from "./AvailabilityMobile/AvailabilityMobile";
import { useTranslation } from "react-i18next";
function Availability() {
  const { width } = useRegisterWindowSizeStore();
  const { hotels, loading } = useRegisterHotelDetails();
  const {t} = useTranslation();

  return (
    <div className='w-full flex flex-col gap-1 dark:text-white mt-2'>
      <Title title={t("HotelDetails.Availability.title")} fontBold extraLarge4 />
      {/* <AvailabilityChangeSearch /> */}
      {
        loading ? (
          <div>Loading</div>
        ) : (
          <>
            <AvailabilityRoom data={hotels} />
            <AvailabilityMobile data={hotels}/>
          </>
      )}
    </div>
  );
}

export default Availability;
