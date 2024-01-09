import { HiOutlineLightBulb } from 'react-icons/hi'
import useRegisterNotificationHotelPrice from '../../hooks/JoinStaying/HotelPriceHost/useRegisterNotificationHotelPrice'

export const NotificationHotelPriceHostData=[
    {
        id: 1,
        title: "What if I'm not sure about my price?",
        icon: HiOutlineLightBulb,
        useRegisterToolTip: useRegisterNotificationHotelPrice,
        data: [
          {
            id: 1,
            name: "Don't worry, you can always change it later. You can even set weekend, midweek and seasonal prices, giving you more control over what you earn.",
          },
        ],
      },
]