import AvailabilityTable from "./AvailabilityTable/AvailabilityTable";
import AvailabilitySummary from "./AvailabilitySummary/AvailabilitySummary";
const AvailabilityRoom = ({ data }) => {
  return (
    <div className='hidden 2md:flex flex-row w-full border border-hotel-100 dark:border-primary-500'>
      <div className='w-[75%]'>
        <AvailabilityTable data={data} />
      </div>
      <div className='w-[25%]'>
        <AvailabilitySummary data={data} />
      </div>
    </div>
  );
};

export default AvailabilityRoom;
