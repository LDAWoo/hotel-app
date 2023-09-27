import Title from "../../../components/Title/Title";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import AvailabilityChangeSearch from "./AvailabilityChangeSearch/AvailabilityChangeSearch";
import AvailabilityRoom from "./AvailabilityRoom/AvailabilityRoom";
import AvailabilityMobile from "./AvailabilityMobile/AvailabilityMobile";
function Availability() {
  const { width } = useRegisterWindowSizeStore();

  return (
    <div className='w-full flex flex-col gap-1 dark:text-white mt-2'>
      <Title title='Availability' fontBold xxl />
      <AvailabilityChangeSearch />
      {width > 900 ? <AvailabilityRoom /> : <AvailabilityMobile />}
    </div>
  );
}

export default Availability;
