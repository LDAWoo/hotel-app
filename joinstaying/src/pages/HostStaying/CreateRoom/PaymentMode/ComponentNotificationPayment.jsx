import { useTranslation } from "react-i18next";
import { SlLike } from "react-icons/sl";
import useRegisterNotificationPaymentMode from "../../../../hooks/JoinStaying/PaymentModeHost/useRegisterNotificationPaymentMode";
import ComponentNotification from "../../ComponentNotification";

const ComponentNotificationPayment = () => {
  const { t } = useTranslation();

  const NotificationPaymentModeHostData = [
    {
      id: 1,
      title: t("HostStaying.CreateRoom.items.payment.notification.noti1.title"),
      icon: SlLike,
      useRegisterToolTip: useRegisterNotificationPaymentMode,
      data: [
        {
          id: 1,
          name: t("HostStaying.CreateRoom.items.payment.notification.noti1.items.item1"),
        },
        {
          id: 2,
          name: t("HostStaying.CreateRoom.items.payment.notification.noti1.items.item2"),
        },
        {
          id: 3,
          name: t("HostStaying.CreateRoom.items.payment.notification.noti1.items.item3"),
        },
      ],
    },
  ];

  return <ComponentNotification data={NotificationPaymentModeHostData} />;
};

export default ComponentNotificationPayment;
