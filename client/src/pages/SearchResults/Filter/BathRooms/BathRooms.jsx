import GuestItem from "../../../../components/Search/Guest/GuestItem";
import FilterCard from "../FilterCard";
import useRegisterNumberOfBathRoomsStore from "../../../../hooks/Filter/useRegisterNumberOfBathRoomsStore";
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
          <GuestItem
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
