import FilterCard from "../FilterCard";
import GuestItem from "../../../../components/Search/Guest/GuestItem";
import useRegisterNumberOfBedRoomsStore from "../../../../hooks/Filter/useRegisterNumberOfBedRoomsStore";

function BedRooms() {
  const { rooms, setRooms } = useRegisterNumberOfBedRoomsStore();

  const handleMinus = () => {
    setRooms(rooms - 1);
  };

  const handlePlus = () => {
    setRooms(rooms + 1);
  };
  return (
    <>
      <FilterCard
        title='Number of bedrooms'
        item={[
          <GuestItem
            title='Bedrooms'
            minValue={0}
            maxValue={30}
            value={rooms}
            key={1}
            handleMinus={handleMinus}
            handlePlus={handlePlus}
          />,
        ]}
      />
    </>
  );
}

export default BedRooms;
