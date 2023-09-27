import AvailabilityTable from "./AvailabilityTable/AvailabilityTable";
import AvailabilitySummary from "./AvailabilitySummary/AvailabilitySummary";
const AvailabilityRoom = () => {
  return (
    <div className='flex flex-row w-full border border-hotel-100 dark:border-primary-600'>
      <div className='w-[75%]'>
        <AvailabilityTable />
      </div>
      <div className='w-[25%]'>
        <AvailabilitySummary />
      </div>
    </div>
  );
};

export default AvailabilityRoom;
