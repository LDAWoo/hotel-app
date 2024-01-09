import { HiOutlineLightBulb } from "react-icons/hi";
import useRegisterNotificationUnitName from '../../hooks/JoinStaying/UnitNameHost/useRegisterNotificationUnitName'
export const NotificationUnitNameHostData =[
    {
        id: 1,
        title: "Why can't I use a custom room name?",
        icon: HiOutlineLightBulb,
        useRegisterToolTip: useRegisterNotificationUnitName,
        data: [
          {
            id: 1,
            name: "They’re more descriptive",
          },
          {
            id: 2,
            name: "They're consistent across the site, allowing guests to quickly find and compare rooms",
          },
          {
            id: 3,
            name: "They’re understood by guests from all backgrounds and nationalities",
          },
          {
            id: 4,
            name: "After registration, you’ll have the option to add custom room names. Guests won’t see these, but they can be used for your internal reference.",
          },
        ],
      },
]