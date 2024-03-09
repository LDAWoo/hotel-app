import useRegisterAvailabilityRoom from "../../../../../../hooks/HotelDetails/AvailabilityRoom/useRegisterAvailabilityRoom";

const SelectAmount = ({ data }) => {
  const { rooms, setRooms } = useRegisterAvailabilityRoom();

  const handleChange = (selectedRoom) => {
    if (
      Object.keys(selectedRoom).length !== 0 &&
      !rooms.some((room) => room.roomId === selectedRoom.roomId)
    ) {
      setRooms([...rooms, selectedRoom]);
    } else {
      setRooms(rooms.filter((room) => room.roomId !== selectedRoom.roomId));
    }
  };
  console.log(rooms);
  return (
    <div>
      <select
        onChange={() => handleChange(data)}
        className='border border-primary-500 dark:text-primary-50 focus:outline-none focus:border-primary-400 bg-transparent rounded-[3px] w-full'
      >
        <option value={null} className='bg-transparent outline-none'>
          0
        </option>
        <option value={JSON.stringify(data)}>
          1 <span>&nbsp;&nbsp;&nbsp;</span>(VND {data?.totalMoneyPromotion})
        </option>
      </select>
    </div>
  );
};

export default SelectAmount;
