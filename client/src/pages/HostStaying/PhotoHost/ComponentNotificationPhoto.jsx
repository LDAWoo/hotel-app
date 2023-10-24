import { useEffect, useState } from "react";
import ComponentNotification from "../ComponentNotification";
import { NotificationPhotoHost } from "../../../components/Constants/NotificationPhotoHostData";

function ComponentNotificationPhoto() {
  const [notificationPhoto, setNotificationPhoto] = useState();

  useEffect(() => {
    setNotificationPhoto(NotificationPhotoHost);
  }, []);

  return <ComponentNotification data={notificationPhoto} />;
}

export default ComponentNotificationPhoto;
