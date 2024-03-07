import { useContext, useEffect, useState } from "react";
import { getRoomType } from "../../../api/HostStaying/AddRoomHost";
import { AddRoomData } from "../../../components/Constants/AddRoomData";
import useRegisterAddRoom from "../../../hooks/JoinStaying/AddRoomHost/useRegisterAddRoom";
import BedRoom from "./BedRoom";
import RoomType from "./RoomType";
import SizeRoom from "./SizeRoom";
import { UserContext } from "../../../components/Contexts/AppUserProvider";

function ComponentAddRoom() {
  const [loading, setLoading] = useState(false);
  const { token } = useContext(UserContext);
  const { roomTypes, setRoomTypes, roomType, setRoomType, quantityRoom, setQuantityRoom, roomArea, setRoomArea } = useRegisterAddRoom();

  useEffect(() => {
    const fetch = async () => {
      if (token && roomTypes.length === 0) {
        try {
          setLoading(true);
          const response = await getRoomType(token);
          setRoomTypes(response.listResult);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetch();
  }, [token, setRoomTypes, loading, roomTypes]);

  const handleSelectRoomType = (e) => {
    const value = e.target.value;
    setRoomType(value);
  };

  const handleChangeQuantityRoom = (e) => {
    const quantity = e.target.value;
    setQuantityRoom(quantity);
  };

  const handleChangeSizeRoom = (e) => {
    const sizeRoom = e.target.value;
    setRoomArea(sizeRoom);
  };

  console.log(roomType);

  return (
    <div className="flex flex-col gap-2">
      <div>{!loading ? <div></div> : <RoomType data={roomTypes} handleSelected={handleSelectRoomType} valueSelected={roomType} onChange={handleChangeQuantityRoom} value={quantityRoom} />}</div>

      <BedRoom data={AddRoomData[0].data} />
      <SizeRoom onChange={handleChangeSizeRoom} value={roomArea} />
      {/* <Smoking data={AddRoomData[2].data} /> */}
    </div>
  );
}

export default ComponentAddRoom;
