import MoneyFormatStaying from "../../../../../../components/Staying/MoneyFormatStaying";
import Title from "../../../../../../components/Title/Title";
import useRegisterAvailabilityRoom from "../../../../../../hooks/HotelDetails/AvailabilityRoom/useRegisterAvailabilityRoom";

const SummaryRoomAndPrice = () => {
  const { rooms } = useRegisterAvailabilityRoom();

  const totalRoomPrice = rooms.reduce(
    (total, room) => total + room.totalMoneyPromotion,
    0,
  );

  return (
    <div className='flex flex-col gap-1 dark:text-primary-700'>
      {/* Rooms */}
      <Title title={`${rooms.length} room for night`} large />
      {/* Price */}
      <MoneyFormatStaying
        price={totalRoomPrice}
        className='font-[600] flex flex-row gap-1'
      />
    </div>
  );
};

export default SummaryRoomAndPrice;
