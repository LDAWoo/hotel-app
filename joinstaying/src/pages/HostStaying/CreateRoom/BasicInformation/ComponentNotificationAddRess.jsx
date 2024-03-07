import ComponentNotification from "../../ComponentNotification";
import { HiOutlineLightBulb } from "react-icons/hi";
import { SlLike } from "react-icons/sl";
import { useTranslation } from "react-i18next";
import useRegisterNotificationNeedAddRess from "../../../../hooks/JoinStaying/AddRessHost/useRegisterNotificationNeedAddRess";
import useRegisterNotificationWhyNeedAddRess from "../../../../hooks/JoinStaying/AddRessHost/useRegisterNotificationWhyNeedAddRess";

function ComponentNotificationAddRess() {
  const { t } = useTranslation();
  const NotificationNeedAddRessData = [
    {
      id: 1,
      title: t("HostStaying.CreateRoom.items.information.notification.noti1.title"),
      icon: SlLike,
      useRegisterToolTip: useRegisterNotificationNeedAddRess,
      data: [
        {
          id: 1,
          name: t("HostStaying.CreateRoom.items.information.notification.noti1.items.item1"),
        },
        {
          id: 2,
          name: t("HostStaying.CreateRoom.items.information.notification.noti1.items.item2"),
        },
        {
          id: 3,
          name: t("HostStaying.CreateRoom.items.information.notification.noti1.items.item3"),
        },
        {
          id: 4,
          name: t("HostStaying.CreateRoom.items.information.notification.noti1.items.item4"),
        },
        {
          id: 5,
          name: t("HostStaying.CreateRoom.items.information.notification.noti1.items.item5"),
        },
        {
          id: 6,
          name: t("HostStaying.CreateRoom.items.information.notification.noti1.items.item6"),
        },
      ],
    },
    {
      id: 2,
      title: t("HostStaying.CreateRoom.items.information.notification.noti2.title"),
      icon: HiOutlineLightBulb,
      useRegisterToolTip: useRegisterNotificationWhyNeedAddRess,
      data: [
        {
          id: 1,
          name: t("HostStaying.CreateRoom.items.information.notification.noti2.items.item1"),
        },
      ],
    },
  ];

  return <ComponentNotification data={NotificationNeedAddRessData} />;
}

export default ComponentNotificationAddRess;
