import { useEffect, useState } from "react";
import { NotificationSeeFacilitiesData } from "../../../components/Constants/NotificationSeeFacilitiesData";
import ComponentNotification from "../ComponentNotification";
function ComponentNotificationFacilities() {
  const [notificationFacilitiesData, setNotificationFacilitiesData] = useState(
    [],
  );

  useEffect(() => {
    setNotificationFacilitiesData(NotificationSeeFacilitiesData);
  }, []);

  return <ComponentNotification data={notificationFacilitiesData} />;
}

export default ComponentNotificationFacilities;
