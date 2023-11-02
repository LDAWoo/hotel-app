import { HiOutlineLightBulb } from "react-icons/hi";
import useRegisterNotificationAmenity from "../../hooks/JoinStaying/AmenityHost/useRegisterNotificationAmenity";
export const NotificationBathRoomHostData = [
  {
    id: 1,
    title: "Can't see your amenities?",
    icon: HiOutlineLightBulb,
    useRegisterToolTip: useRegisterNotificationAmenity,
    data: [
      {
        id: 1,
        name: "You can add more from a larger list of common amenities for hotels after you complete registration.",
      },
    ],
  },
];
