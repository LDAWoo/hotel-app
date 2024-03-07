export const HotelNameHostData = [
  {
    id: 1,
    title: "What's the name of your hotel?",
    subTitle: "Guests will see this name when searching for a place to stay.",
    type: "text",
    data: [
      {
        id: 1,
        type: "text",
        field: "hotelName",
        errors: {
          notBlank: "Please enter your hotel name",
          notName: "Please enter a valid hotel name",
          notNameLength: "Please enter the hotel name from 4 to 32 digits",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Contact Person",
    subTitle: "Contact name so we can know your name",
    type: "text",
    data: [
      {
        id: 1,
        type: "text",
        field: "contactPerson",
        errors: {
          notBlank: "Please enter your contact person not empty",
          notName: "Please enter a valid contact person",
          notNameLength: "Please enter the contact person from 4 to 32 digits",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Phone Number",
    subTitle: "Contact phone number so we can support your registration when needed",
    type: "number",
    data: [
      {
        id: 1,
        type: "number",
        field: "phoneNumberOne",
        errors: {
          notBlank: "Phone number not empty",
          notPhoneNumber: "Please enter a valid phone number",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Other phone number (not required)",
    subTitle: "",
    type: "number",
    data: [
      {
        id: 1,
        type: "number",
        field: "phoneNumberTwo",
        errors: {
          notBlank: "",
          notPhoneNumber: "Please enter a valid phone number",
        },
      },
    ],
  },
  {
    id: 5,
    title: "What is the star rating of your hotel?",
    subTitle: "",
    type: "radio",
    star: true,
    data: [
      {
        id: 1,
        name: "rating",
        title: "N/A",
        value: 0.0,
      },
      {
        id: 2,
        name: "rating",
        title: "1 star",
        value: 1.0,
      },
      {
        id: 3,
        name: "rating",
        title: "2 star",
        value: 2.0,
      },
      {
        id: 4,
        name: "rating",
        title: "3 star",
        value: 3.0,
      },
      {
        id: 5,
        name: "rating",
        title: "4 star",
        value: 4.0,
      },
      {
        id: 6,
        name: "rating",
        title: "5 star",
        value: 5.0,
      },
    ],
  },
  {
    id: 6,
    title: "Do you own multiple hotels, or are part of a chain or management company?",
    subTitle: "",
    type: "radio",
    data: [
      {
        id: 7,
        name: "managerHotel",
        title: "Yes",
        value: true,
      },
      {
        id: 8,
        name: "managerHotel",
        title: "No",
        value: false,
      },
    ],
  },
];
