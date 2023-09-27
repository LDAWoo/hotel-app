import Title from "../../../../components/Title/Title";
import Reserve from "../AvailabilityRoom/AvailabilitySummary/Reserve";
import SummaryRoomAndPrice from "../AvailabilityRoom/AvailabilitySummary/SummaryRoomAndPrice";
import RoomType from "../AvailabilityRoom/Body/AccommodationType/RoomType";
import Person from "../AvailabilityRoom/Body/Person";

const AvailabilityMobile = () => {
  const data = [
    { id: 1, name: "" },
    { id: 2, name: "" },
  ];
  return (
    <div className='p-2 border dark:border-primary-600'>
      <div className='flex flex-col gap-1'>
        {/* RoomType */}
        <RoomType title='Deluxe Double Room with Garden View' />
        {/* PriceOfPerson */}
        <div className='flex flex-row items-center gap-1 dark:text-white'>
          <Title title='Price for up to:' xl /> <Person data={data} />
        </div>

        <SummaryRoomAndPrice />
        <Reserve />
      </div>
    </div>
  );
};

export default AvailabilityMobile;
