import { SlLike } from "react-icons/sl";
import useRegisterNotificationNonRefundable from "../../hooks/JoinStaying/NonRefundableHost/useRegisterNotificationNonRefundable";

export const NotificationNonRefundableData = [
  {
    id: 1,
    title: "Why should I add a non-refundable rate plan?",
    icon: SlLike,
    useRegisterToolTip: useRegisterNotificationNonRefundable,
    data: [
      {
        id: 1,
        name: "A non-refundable rate plan can help attract guests who are sure of their dates and prefer to not pay extra for flexibility they don’t need.",
      },
      {
        id: 2,
        name: "Properties with non-refundable rates receive on average:",
        data: [
          {
            name:"11% more views"
          },
          {
            name:"5% more bookings"
          },
          {
            name:"9% fewer cancellations"
          },
        ]
      },
    ],
  },
];
