import { HiOutlineLightBulb } from "react-icons/hi";
import useRegisterNotificationSeeFacilities from "../../hooks/JoinStaying/FacilitiesHost/useRegisterNotificationSeeFacilities";

export const NotificationSeeFacilitiesData = [
  {
    id: 1,
    title: "What if I don’t see a facility I offer?",
    icon: HiOutlineLightBulb,
    useRegisterToolTip: useRegisterNotificationSeeFacilities,
    data: [
      {
        id: 1,
        name: "The facilities listed here are the ones guests search for most. After you complete your registration, you can add more facilities from a larger list on the Extranet, the platform you'll use to manage your property.",
      },
    ],
  },
];
