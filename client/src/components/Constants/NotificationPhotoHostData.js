import { SlLike } from "react-icons/sl";
import useRegisterNotificationPhoto from "../../hooks/JoinStaying/PhotoHost/useRegisterNotificationPhoto";

export const NotificationPhotoHost = [
  {
    id: 1,
    title: "What if I don't have professional photos?",
    icon: SlLike,
    useRegisterToolTip: useRegisterNotificationPhoto,
    data: [
      {
        id: 1,
        name: "No problem! You can use a smartphone or a digital camera.Here are some tips for taking great photos of your property",
      },
      {
        id: 2,
        name: "If you don’t know who took a photo, it's best to avoid using it. Only use photos others have taken if you have permission.",
      },
    ],
  },
];
