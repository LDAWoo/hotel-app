import ComponentHost from "../ComponentHost";
import ComponentHotelName from "./ComponentHotelName";

function HotelNameHost() {
  return (
    <ComponentHost
      title='Tell us about your hotel'
      componentLeft={<ComponentHotelName />}
      componentRight={<div></div>}
    />
  );
}

export default HotelNameHost;
