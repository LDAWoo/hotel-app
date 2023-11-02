import FilterCard from "../FilterCard";
import useRegisterNumberOfBathRoomsStore from "../../../../hooks/Filter/useRegisterNumberOfBathRoomsStore";
import IncreaseAndDecreaseValue from "../../../../components/ValueIncreaseAndDecrease/IncreaseAndDecreaseValue";
function BathRooms() {
  const { rooms, setRooms } = useRegisterNumberOfBathRoomsStore();

  const handleMinus = () => {
    setRooms(rooms - 1);
  };
  const handlePlus = () => {
    setRooms(rooms + 1);
  };
  return (
    <>
      <FilterCard
        title='Number of bathrooms'
        item={[
          <IncreaseAndDecreaseValue
            title='Bathrooms'
            sizeText='text-[14px]'
            key={1}
            minValue={0}
            value={rooms}
            maxValue={30}
            handleMinus={handleMinus}
            handlePlus={handlePlus}
          />,
        ]}
      />
    </>
  );
}

export default BathRooms;
