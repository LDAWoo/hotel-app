export const ControlData = [
  {
    id: "accepted",
    type: "input",
    data: [
      {
        id: 1,
        name: "Yes, I'd like free paperless confirmation (recommended)",
        subName: "We'll text you a link to download our app",
        type: "checkbox",
      },
      {
        id: 2,
        name: "Update my account to include these new details",
        type: "checkbox",
      },
    ],
  },
  {
    id: "bookingFor",
    type: "input",
    title: "Who are you booking for?",
    data: [
      {
        id: "notstayer_false",
        name: "whoAreYouBookingFor",
        title: "I am the main guest",
        type: "radio",
        value: false,
      },
      {
        id: "notstayer_true",
        name: "whoAreYouBookingFor",
        title: "Booking is for someone else",
        type: "radio",
        value: true,
      },
    ],
  },
  {
    id: "travellingForWork",
    type: "input",
    title: "Are you travelling for work?",
    data: [
      {
        id: "yes",
        name: "areYouTravellingForWork",
        title: "Yes",
        type: "radio",
        value: true,
        data: [],
      },
      {
        id: "no",
        name: "areYouTravellingForWork",
        title: "No",
        type: "radio",
        value: false,
        data: [],
      },
    ],
  },
];
