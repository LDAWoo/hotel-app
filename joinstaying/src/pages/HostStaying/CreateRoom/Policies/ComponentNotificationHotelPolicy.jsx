import { useTranslation } from "react-i18next";
import { HiOutlineLightBulb } from "react-icons/hi";
import useRegisterNotificationHotelPolicy from "../../../../hooks/JoinStaying/HotelPolicyHost/useRegisterNotificationHotelPolicy";
import ComponentNotification from "../../ComponentNotification";

const ComponentNotificationHotelPolicy = () => {
  const { t } = useTranslation();

  const NotificationHotelPolicyHostData = [
    {
      id: 1,
      title: t("HostStaying.CreateRoom.items.policies.notification.noti1.title"),
      icon: HiOutlineLightBulb,
      useRegisterToolTip: useRegisterNotificationHotelPolicy,
      data: [
        {
          id: 1,
          name: t("HostStaying.CreateRoom.items.policies.notification.noti1.items.item1"),
        },
      ],
    },
  ];

  return <ComponentNotification data={NotificationHotelPolicyHostData} />;
};

export default ComponentNotificationHotelPolicy;
