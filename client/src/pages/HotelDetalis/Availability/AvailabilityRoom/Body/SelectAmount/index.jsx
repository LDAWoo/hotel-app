import { useEffect, useState } from "react";
import useRegisterAvailabilityRoom from "../../../../../../hooks/HotelDetails/AvailabilityRoom/useRegisterAvailabilityRoom";

const SelectAmount = ({ data }) => {
  const { rooms, setRooms } = useRegisterAvailabilityRoom();
  const [selected, setSelected] = useState(false);


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

  useEffect(() => {
    const isSelected = rooms.some((room) => room.roomId === data?.roomId);
    setSelected(isSelected);
  },[rooms,data])

  return (
    <div>
      <select
        value={selected ? data.roomId : 0}
        onChange={() => handleChange(data)}
        className='border border-primary-500 dark:text-primary-50 focus:outline-none focus:border-primary-400 bg-transparent rounded-[3px] w-full'
      >
        <option value={null} className='bg-transparent outline-none'>
          0
        </option>
        <option value={data.roomId}>
          1 <span>&nbsp;&nbsp;&nbsp;</span>(VND {data?.totalMoneyPromotion})
        </option>
      </select>
    </div>
  );
};

export default SelectAmount;
