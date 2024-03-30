import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";
import Button from "../../../../components/Buttons/Button";
import RadioInput from "../../../../components/RadioInput/RadioInput";
import Title from "../../../../components/Title/Title";
import useRegisterAvailabilityRoom from "../../../../hooks/HotelDetails/AvailabilityRoom/useRegisterAvailabilityRoom";
import Reserve from "../AvailabilityRoom/AvailabilitySummary/Reserve";
import SummaryRoomAndPrice from "../AvailabilityRoom/AvailabilitySummary/SummaryRoomAndPrice";
import RoomType from "../AvailabilityRoom/Body/AccommodationType/RoomType";
import Person from "../AvailabilityRoom/Body/Person";
import Price from "../AvailabilityRoom/Body/Price";

const AvailabilityMobile = ({ data }) => {
  const { rooms, setRooms } = useRegisterAvailabilityRoom();
  const { t } = useTranslation();

  const handleChange = (selectedRoom) => {
    const value = JSON.parse(selectedRoom.target.value);
    const roomId = value?.roomId; 
  
    if (rooms.includes(value)) {
      setRooms(value.filter(room => room.roomId !== roomId));
    } else {
      setRooms([...rooms, value]);
    }
  };

  const handleReserve = (room) => {
    if (rooms.includes(room)) {
      setRooms(room.filter(room => room.roomId !== room.roomId));
    } else {
      setRooms([...rooms, room]);
    }
  }

  const handleClearRooms = () => {
    setRooms([])
  }

  return (
    <div className="flex flex-col gap-4 2md:hidden">
      {data?.rooms &&
        data.rooms.map((room, index) => {
        const checked = rooms.some((r) => r.roomId === room.roomId);
        
        return (
          <div key={index} className={`p-2 border ${checked ? 'border-hotel-75' : ''}`}>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                {/* RoomType */}
                <RoomType title={room.roomNameCustom || room.bedName} />
                <RadioInput
                  value={JSON.stringify(room)}
                  isChecked={checked}
                  onChange={handleChange}
                />
              </div>
              {/* PriceOfPerson */}
              <div className="flex flex-row items-center gap-1 dark:text-white">
                <Title
                  title={t("HotelDetails.Availability.table.columns.priceUpTo")}
                  xl
                />
                <Person data={room} />
              </div>
              <div className="flex items-center justify-between">
                <Price data={room} />
                {!checked && <div>
                  <Button
                    border
                    className="p-[0px_8px_2px_8px]"
                    xl
                    title={t("HotelDetails.Reserve")}
                    onClick={() => handleReserve(room)}
                  />
                </div>}
              </div>
             
            </div>
          </div>
        )})}

        {rooms.length > 0 && <div className="fixed bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.32)] h-auto z-10 bottom-0 left-0 right-0">
                <div className="p-4 h-full flex flex-col justify-end gap-2">
                  <div className="flex flex-row items-center justify-between">
                      <Title title={`${t("HotelDetails.Availability.table.columns.choice")}`} fontBold xl/>
                      <div>
                        <Button background className="rounded-full" size={16} onClick={handleClearRooms} icon={IoClose} classButton="items-center justify-center mt-1 mb-1 ml-1"/>
                      </div>
                  </div>
                  <SummaryRoomAndPrice/>
                  <Reserve/>
                </div>
        </div>}
    </div>
  );
};

export default AvailabilityMobile;
