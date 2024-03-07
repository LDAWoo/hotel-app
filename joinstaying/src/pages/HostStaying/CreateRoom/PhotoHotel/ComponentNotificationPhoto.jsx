import ComponentNotification from "../../ComponentNotification";
import { useTranslation } from "react-i18next";
import { SlLike } from "react-icons/sl";
import useRegisterNotificationPhoto from "../../../../hooks/JoinStaying/PhotoHost/useRegisterNotificationPhoto";

function ComponentNotificationPhoto() {
  const { t } = useTranslation();

  const NotificationPhotoHost = [
    {
      id: 1,
      title: t("HostStaying.CreateRoom.items.photo.notification.noti1.title"),
      icon: SlLike,
      useRegisterToolTip: useRegisterNotificationPhoto,
      data: [
        {
          id: 1,
          name: t("HostStaying.CreateRoom.items.photo.notification.noti1.items.item1"),
        },
        {
          id: 2,
          name: t("HostStaying.CreateRoom.items.photo.notification.noti1.items.item2"),
        },
      ],
    },
  ];

  return <ComponentNotification data={NotificationPhotoHost} />;
}

export default ComponentNotificationPhoto;
