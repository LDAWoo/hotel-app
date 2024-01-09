import { HiOutlineLightBulb } from "react-icons/hi";
import useRegisterNotificationBathRoom from "../../hooks/JoinStaying/BathRoomHost/useRegisterNotificationBathRoom";
export const NotificationBathRoomHostData = [
  {
    id: 1,
    title: "Still deciding?",
    icon: HiOutlineLightBulb,
    useRegisterToolTip: useRegisterNotificationBathRoom,
    data: [
      {
        id: 1,
        name: "Don’t worry, you can update the bathroom items available at your place later.",
      },
    ],
  },
];
