import RoomType from "./RoomType";

const AccommodationType = () => {
  const roomType = "Deluxe Double Room with Garden View";

  return (
    <div className='flex flex-col gap-1'>
      {/* RoomType */}
      <RoomType title={roomType} />
      {/* RoomTypeBed */}

      {/*Room Facilities*/}
    </div>
  );
};

export default AccommodationType;
