import { useEffect, useState } from "react";
import { NotificationPaymentModeHostData } from "../../../components/Constants/NotificationPaymentModeHostData";
import ComponentNotification from "../ComponentNotification";

const ComponentNotificationPayment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(NotificationPaymentModeHostData);
  }, [NotificationPaymentModeHostData]);

  return <ComponentNotification data={data} />;
};

export default ComponentNotificationPayment;
