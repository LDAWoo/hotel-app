import FilterCard from "../FilterCard";
import useRegisterNumberOfBedRoomsStore from "../../../../hooks/Filter/useRegisterNumberOfBedRoomsStore";
import IncreaseAndDecreaseValue from "../../../../components/ValueIncreaseAndDecrease/IncreaseAndDecreaseValue";

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
          <IncreaseAndDecreaseValue
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
