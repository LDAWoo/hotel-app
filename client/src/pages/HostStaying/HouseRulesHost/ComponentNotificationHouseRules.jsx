import { useEffect, useState } from "react";
import { NotificationHouseRulesHostData } from "../../../components/Constants/NotificationHouseRulesHostData";
import ComponentNotification from "../ComponentNotification";

const ComponentNotificationHouseRules = () => {
  const [notificationHouseRules, setNotificationHouseRules] = useState([]);

  useEffect(() => {
    setNotificationHouseRules(NotificationHouseRulesHostData);
  }, []);

  return <ComponentNotification data={notificationHouseRules} />;
};

export default ComponentNotificationHouseRules;
