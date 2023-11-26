import Title from "../../../../../components/Title/Title";
import SummaryRoomAndPrice from "./SummaryRoomAndPrice";
import Reserve from "./Reserve";
import Ticket from "./Ticket";

const AvailabilitySummary = ({ data }) => {
  return (
    <div className='w-full'>
      <div className='h-[48px] bg-[#4c76b2] sticky top-0'></div>
      <div className='flex flex-col gap-1 p-2 bg-hotel-25 dark:bg-primary-50 dark:text-primary-700'>
        {/* SummaryRoomAndPrice */}
        <SummaryRoomAndPrice data={data} />
        {/* Includes */}
        <Title
          title='Includes taxes and charges'
          large
          colorTitle='dark:text-primary-700'
        />
        {/* Reserve */}
        <Reserve toolTip />
        <Ticket />
      </div>
    </div>
  );
};
export default AvailabilitySummary;
