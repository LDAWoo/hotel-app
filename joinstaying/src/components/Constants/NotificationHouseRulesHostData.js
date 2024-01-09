import { HiOutlineLightBulb } from "react-icons/hi";
import useRegisterNotificationHouseRulesChange from "../../hooks/JoinStaying/HouseRulesHost/useRegisterNotificationHouseRulesChange";

export const NotificationHouseRulesHostData = [
  {
    id: 1,
    title: "What if my house rules change?",
    icon: HiOutlineLightBulb,
    useRegisterToolTip: useRegisterNotificationHouseRulesChange,
    data: [
      {
        id: 1,
        name: "You can easily customise these house rules later and additional house rules can be set on the Policies page of the extranet after you complete registration.",
      },
    ],
  },
];
