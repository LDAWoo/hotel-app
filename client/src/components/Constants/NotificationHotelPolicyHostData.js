import {HiOutlineLightBulb} from 'react-icons/hi'
import useRegisterNotificationHotelPolicy from '../../hooks/JoinStaying/HotelPolicyHost/useRegisterNotificationHotelPolicy'

export const NotificationHotelPolicyHostData = [
    {
        id: 1,
        title: "What policy should I choose?",
        icon: HiOutlineLightBulb,
        useRegisterToolTip: useRegisterNotificationHotelPolicy,
        data: [
          {
            id: 1,
            name: "These policies can be easily updated later.",
          },
        ],
      },
]