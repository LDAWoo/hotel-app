import { HotelNameHostData } from "../../../components/Constants/HotelNameHostData";

const ComponentHotelName = () => {
  return (
    <div>
      {HotelNameHostData.map((hotelName, index) => (
        <div key={index} className='flex flex-col gap-2'>
          <label className='font-medium text-[14px]'>{hotelName?.title}</label>
        </div>
      ))}
    </div>
  );
};

export default ComponentHotelName;
