export const HotelPolicyData = [
  {
    id: 1,
    title: "When can the guests cancel their bookings for free?",
    type: "select",
    name: "days",
    data: [
      {
        name: "Before 18:00 on the day of arrival",
        value: "0 day",
      },
      {
        name: "Before 1 day on the day of arrival",
        value: "1 day",
      },
      {
        name: "Before 2 days on the day of arrival",
        value: "2 days",
      },
      {
        name: "Before 3 days on the day of arrival",
        value: "3 days",
      },
      {
        name: "Before 4 days on the day of arrival",
        value: "4 days",
      },
      {
        name: "Before 5 days on the day of arrival",
        value: "5 days",
      },
    ],
  },
  {
    id: 2,
    title: "How much are your guests charged if they cancel after the cancellation window (before 18:00 on the day of arrival)?",
    type: "radio",
    data: [
      {
        name: "cancel_guest_payment",
        value: "first_night",
        title: "Cost of the first night",
      },
      {
        name: "cancel_guest_payment",
        value: "full_stay",
        title: "100% of the total price",
      },
    ],
  },
];
