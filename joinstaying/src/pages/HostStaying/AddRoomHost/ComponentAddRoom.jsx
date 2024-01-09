import { AddRoomData } from "../../../components/Constants/AddRoomData";
import SelectInput from "../../../components/SelectInput/SelectInput";
import Title from "../../../components/Title/Title";
import BedRoom from "./BedRoom";
import RoomType from "./RoomType";
import Smoking from "./Smoking";

function ComponentAddRoom() {
  return (
    <div>
      {AddRoomData.map((room, index) => (
        <div key={index}>
          <div className='flex flex-col gap-2'>
            <div className={`${index < 1 ? "mt-0" : "mt-5"} mb-2`}>
              <Title title={room?.title} fontBold />
            </div>
            {room?.type === "select" && (
              <SelectInput>
                {room?.data.map((item, index) => (
                  <option
                    key={index}
                    className='text-[14px] text-primary-700 dark:text-white'
                    value={item?.value}
                  >
                    {item?.name}
                  </option>
                ))}
              </SelectInput>
            )}

            {room?.type === "number" && <RoomType data={room?.data} />}
            {room?.type === "increase" && <BedRoom data={room?.data} />}
            {room?.type === "radio" && <Smoking data={room?.data} />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ComponentAddRoom;
