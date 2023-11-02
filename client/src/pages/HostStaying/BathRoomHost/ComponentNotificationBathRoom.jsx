import { useEffect, useState } from "react";
import ComponentNotification from "../ComponentNotification";
import { NotificationBathRoomHostData } from "../../../components/Constants/NotificationBathRoomHostData";

function ComponentNotificationBathRoom() {
  const [data, setData] = useState();
  useEffect(() => {
    setData(NotificationBathRoomHostData);
  }, [NotificationBathRoomHostData]);
  return <ComponentNotification data={data} />;
}

export default ComponentNotificationBathRoom;
