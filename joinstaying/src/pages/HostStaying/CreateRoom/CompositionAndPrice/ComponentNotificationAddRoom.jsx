import { useTranslation } from "react-i18next";
import { HiOutlineLightBulb } from "react-icons/hi";
import useRegisterNotificationAddRoom from "../../../../hooks/JoinStaying/AddRoomHost/useRegisterNotificationAddRoom";
import ComponentNotification from "../../ComponentNotification";

function ComponentNotificationAddRoom() {
  const { t } = useTranslation();

  const NotificationAddRoomHostData = [
    {
      id: 1,
      title: t("HostStaying.CreateRoom.items.composition.notification.noti1.title"),
      icon: HiOutlineLightBulb,
      useRegisterToolTip: useRegisterNotificationAddRoom,
      data: [
        {
          id: 1,
          name: t("HostStaying.CreateRoom.items.composition.notification.noti1.items.item1"),
        },
        {
          id: 2,
          name: t("HostStaying.CreateRoom.items.composition.notification.noti1.items.item2"),
        },
        {
          id: 3,
          name: t("HostStaying.CreateRoom.items.composition.notification.noti1.items.item2"),
        },
      ],
    },
  ];

  return <ComponentNotification data={NotificationAddRoomHostData} />;
}

export default ComponentNotificationAddRoom;
