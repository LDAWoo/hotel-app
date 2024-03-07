import { useTranslation } from "react-i18next";
import { HiOutlineLightBulb } from "react-icons/hi";
import useRegisterNotificationHotelPrice from "../../../../hooks/JoinStaying/HotelPriceHost/useRegisterNotificationHotelPrice";
import ComponentNotification from "../../ComponentNotification";

const ComponentNotificationHotelPrice = () => {
  const { t } = useTranslation();
  const NotificationHotelPriceHostData = [
    {
      id: 1,
      title: t("HostStaying.CreateRoom.items.composition.notification.noti2.title"),
      icon: HiOutlineLightBulb,
      useRegisterToolTip: useRegisterNotificationHotelPrice,
      data: [
        {
          id: 1,
          name: t("HostStaying.CreateRoom.items.composition.notification.noti2.items.item1"),
        },
      ],
    },
  ];

  return <ComponentNotification data={NotificationHotelPriceHostData} />;
};

export default ComponentNotificationHotelPrice;
