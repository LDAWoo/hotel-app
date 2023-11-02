import Checkbox from "../../../components/Checkbox/Checkbox";
import { BathRoomData } from "../../../components/Constants/BathRoomData";
import Title from "../../../components/Title/Title";
import BathRoomRadio from "./BathRoomRadio";

function ComponentBathRoom() {
  return (
    <div>
      {BathRoomData.map((bathroom, index) => (
        <div key={index}>
          {bathroom?.title && (
            <div className={`${index < 1 ? "mt-0" : "mt-5"} mb-2`}>
              <Title title={bathroom?.title} fontBold />
            </div>
          )}
          {bathroom?.type === "radio" && (
            <BathRoomRadio data={bathroom?.data} />
          )}
          {bathroom?.type === "checkbox" && (
            <div className='flex flex-col gap-2'>
              {bathroom?.data.map((item, index) => (
                <Checkbox key={index} value={item?.id} title={item?.name} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ComponentBathRoom;
