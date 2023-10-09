import { HiOutlineLightBulb } from "react-icons/hi";
import { SlLike } from "react-icons/sl";
import useRegisterNotificationNeedAddRess from "../../hooks/JoinStaying/AddRessHost/useRegisterNotificationNeedAddRess";
import useRegisterNotificationWhyNeedAddRess from "../../hooks/JoinStaying/AddRessHost/useRegisterNotificationWhyNeedAddRess";

export const NotificationNeedAddRessData = [
  {
    id: 1,
    title: "What needs to be included in my address?",
    icon: SlLike,
    useRegisterToolTip: useRegisterNotificationNeedAddRess,
    data: [
      {
        id: 1,
        name: "Include both your street name and number for the entire property",
      },
      {
        id: 2,
        name: "The floor number in address line 2 if relevant",
      },
      {
        id: 3,
        name: "Individual apartment or floor numbers can be shared later",
      },
      {
        id: 4,
        name: "Provide the zip code",
      },
      {
        id: 5,
        name: "Spell the street name correctly",
      },
      {
        id: 6,
        name: "Use the physical address of the property, not your office or home address",
      },
    ],
  },
  {
    id: 2,
    title: "Why do I need to add my address?",
    icon: HiOutlineLightBulb,
    useRegisterToolTip: useRegisterNotificationWhyNeedAddRess,
    data: [
      {
        id: 1,
        name: "Once a guest books your property, this is the address that will be shared with them. It's important that it's correct so guests can easily find your property.",
      },
    ],
  },
];
