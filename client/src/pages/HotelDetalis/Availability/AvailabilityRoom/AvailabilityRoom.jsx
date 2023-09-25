import AvailabilityTable from "./AvailabilityTable/AvailabilityTable";
import AvailabilitySummary from "./AvailabilitySummary/AvailabilitySummary";
const AvailabilityRoom = () => {
  return (
    <div className='flex flex-row w-full'>
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
