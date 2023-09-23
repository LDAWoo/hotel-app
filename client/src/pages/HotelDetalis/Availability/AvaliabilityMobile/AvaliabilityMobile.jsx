import RoomType from "./RoomType";
import PriceForPerson from "./PriceForPerson";

const AvaliabilityMobile = () => {
  const data = [
    { id: 1, name: "" },
    { id: 2, name: "" },
  ];
  return (
    <div className='p-2 border '>
      <div className='flex flex-col gap-1'>
        {/* RoomType */}
        <RoomType title='Deluxe Double Room with Garden View' />
        {/* PriceOfPerson */}
        <PriceForPerson data={data} />
      </div>
    </div>
  );
};

export default AvaliabilityMobile;
