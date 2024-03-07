import ComponentNotificationAddRoom from "./ComponentNotificationAddRoom";
import ComponentNotificationHotelPrice from "./ComponentNotificationHotelPrice";

const ComponentNotificationGroup = () => {
  return (
    <div className="flex flex-col gap-2">
      <ComponentNotificationAddRoom />
      <ComponentNotificationHotelPrice />
    </div>
  );
};

ComponentNotificationGroup.propTypes = {};

export default ComponentNotificationGroup;
