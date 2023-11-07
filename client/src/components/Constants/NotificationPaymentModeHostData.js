import { SlLike } from "react-icons/sl";
import useRegisterNotificationPaymentMode from "../../hooks/JoinStaying/PaymentModeHost/useRegisterNotificationPaymentMode";

export const NotificationPaymentModeHostData = [
  {
    id: 1,
    title: "How Payments by Staying.com works?",
    icon: SlLike,
    useRegisterToolTip: useRegisterNotificationPaymentMode,
    data: [
      {
        id: 1,
        name: "Your guest pays through Staying.com with more options like PayPal, WeChat Pay and AliPay.",
      },
      {
        id: 2,
        name: "We facilitate your guest’s payment. You don’t have to deal with fraud, chargebacks or invalid cards.",
      },
      {
        id: 3,
        name: "Staying.com sends payouts to you. You'll receive a bank transfer by the 15th of each month that covers all bookings with a check-out in the previous month.",
      },
    ],
  },
];
