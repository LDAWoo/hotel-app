import { BiHomeAlt2 } from "react-icons/bi";
import HotelPropertyItems from "./HotelPropertyItem";
import { memo } from "react";

function HotelProperty() {
  return (
    <div className='w-full'>
      <ul className='flex list-none items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar sm:flex-wrap sm:overflow-x-hidden w-full'>
        <HotelPropertyItems icon={BiHomeAlt2} title='Căn hộ' />
        <HotelPropertyItems icon={BiHomeAlt2} title='Bếp' />
        <HotelPropertyItems icon={BiHomeAlt2} title='Nhìn ra thành phố' />
        <HotelPropertyItems icon={BiHomeAlt2} title='Sân vườn' />

        <HotelPropertyItems icon={BiHomeAlt2} title='Máy giặt' />
        <HotelPropertyItems icon={BiHomeAlt2} title='WiFi miễn phí' />
        <HotelPropertyItems icon={BiHomeAlt2} title='Ban công' />
        <HotelPropertyItems icon={BiHomeAlt2} title='Điều hòa không khí' />
        <HotelPropertyItems icon={BiHomeAlt2} title='Phòng tắm riêng' />
        <HotelPropertyItems icon={BiHomeAlt2} title='Dọn phòng hàng ngày' />
      </ul>
    </div>
  );
}

export default memo(HotelProperty);
