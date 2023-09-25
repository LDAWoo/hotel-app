import Title from "../../../../../components/Title/Title";
import SummaryRoomAndPrice from "./SummaryRoomAndPrice";
import Reserve from "./Reserve";
import Ticket from "./Ticket";

const AvailabilitySumary = () => {
  return (
    <div className='w-full'>
      <div className='h-[48px] bg-[#4c76b2] sticky top-0'></div>
      <div className='flex flex-col gap-1 p-2 bg-hotel-25 dark:bg-primary-50'>
        {/* SummaryRoomAndPrice */}
        <SummaryRoomAndPrice />
        {/* Includes */}
        <Title title='Includes taxes and charges' small />
        {/* Reserve */}
        <Reserve />
        <Ticket />
      </div>
    </div>
  );
};
export default AvailabilitySumary;
