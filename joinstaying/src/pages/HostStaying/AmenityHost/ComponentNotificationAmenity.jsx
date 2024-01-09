import { useEffect, useState } from "react";
import { NotificationBathRoomHostData } from "../../../components/Constants/NotificationAmenityHostData";
import ComponentNotification from "../ComponentNotification";

function ComponentNotificationAmenity() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(NotificationBathRoomHostData);
  }, [NotificationBathRoomHostData]);

  return <ComponentNotification data={data} />;
}

export default ComponentNotificationAmenity;
