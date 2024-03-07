import { useTranslation } from "react-i18next";
import { HiOutlineLightBulb } from "react-icons/hi";
import ComponentNotification from "../../ComponentNotification";
import useRegisterNotificationSeeFacilities from "../../../../hooks/JoinStaying/FacilitiesHost/useRegisterNotificationSeeFacilities";
function ComponentNotificationFacilities() {
  const { t } = useTranslation();

  const NotificationSeeFacilitiesData = [
    {
      id: 1,
      title: t("HostStaying.CreateRoom.items.amenities.notification.noti1.title"),
      icon: HiOutlineLightBulb,
      useRegisterToolTip: useRegisterNotificationSeeFacilities,
      data: [
        {
          id: 1,
          name: t("HostStaying.CreateRoom.items.amenities.notification.noti1.items.item1"),
        },
      ],
    },
  ];

  return <ComponentNotification data={NotificationSeeFacilitiesData} />;
}

export default ComponentNotificationFacilities;
