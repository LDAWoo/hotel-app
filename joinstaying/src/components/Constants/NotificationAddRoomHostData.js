import { HiOutlineLightBulb } from "react-icons/hi";
import useRegisterNotificationAddRoom from "../../hooks/JoinStaying/AddRoomHost/useRegisterNotificationAddRoom";

export const NotificationAddRoomHostData = [
  {
    id: 1,
    title: "Do you offer other sleeping arrangements?",
    icon: HiOutlineLightBulb,
    useRegisterToolTip: useRegisterNotificationAddRoom,
    data: [
      {
        id: 1,
        name: "Right now, you just need to add your basic sleeping arrangements.",
      },
      {
        id: 2,
        name: "Cots, additional beds and other sleeping arrangements can be added in the extranet, the platform you’ll use to manage your property.",
      },
      {
        id: 3,
        name: "You can set up your property’s child policies, including maximum age and price adjustments, in the extranet after you finish registration.",
      },
    ],
  },
];
