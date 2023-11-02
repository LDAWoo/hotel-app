import { useEffect, useState } from "react";
import { NotificationAddRoomHostData } from "../../../components/Constants/NotificationAddRoomHostData";
import ComponentNotification from "../ComponentNotification";

function ComponentNotificationAddRoom() {
  const [notificationAddRoomData, setNotificationAddRoomData] = useState([]);

  useEffect(() => {
    setNotificationAddRoomData(NotificationAddRoomHostData);
  }, [NotificationAddRoomHostData]);

  return <ComponentNotification data={notificationAddRoomData} />;
}

export default ComponentNotificationAddRoom;
