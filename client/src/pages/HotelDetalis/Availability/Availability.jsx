import Title from "../../../components/Title/Title";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import AvailabilityChangeSearch from "./AvailabilityChangeSearch/AvailabilityChangeSearch";
import AvailabilityRoom from "./AvailabilityRoom/AvailabilityRoom";
import AvaliabilityMobile from "./AvaliabilityMobile/AvaliabilityMobile";
function Availability() {
  const { width } = useRegisterWindowSizeStore();

  return (
    <div className='w-full flex flex-col gap-2'>
      <Title title='Availability' fontBold xxl />
      <AvailabilityChangeSearch />
      {width > 900 ? <AvailabilityRoom /> : <AvaliabilityMobile />}
    </div>
  );
}

export default Availability;
