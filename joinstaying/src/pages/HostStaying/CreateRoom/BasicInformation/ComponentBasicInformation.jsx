import ComponentAddRess from "./ComponentAddRess";
import ComponentHotelName from "./ComponentHotelName";

const ComponentBasicInformation = () => {
  return (
    <div className="flex flex-col gap-4">
      <ComponentHotelName />
      <ComponentAddRess />
    </div>
  );
};

ComponentBasicInformation.propTypes = {};

export default ComponentBasicInformation;
