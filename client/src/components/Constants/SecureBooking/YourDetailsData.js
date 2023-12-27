import countryList from "country-list";
import i18next from "i18next";

export const YourDetailsData = [
  {
    id: 1,
    type: "input",
    data: [
      {
        id: "firstName",
        name: "First Name",
        nameError: "Please enter your first name",
        placeHolder: "",
        type: "text",
      },
    ],
  },
  {
    id: 2,
    type: "input",
    data: [
      {
        id: "lastName",
        name: "Last Name",
        nameError: "Please enter your last name",
        placeHolder: "",
        type: "text",
      },
    ],
  },
  {
    id: 3,
    type: "input",
    data: [
      {
        id: "email",
        name: "Email",
        nameError: "Please enter your email address",
        subName: "Confirmation email sent to this address",
        placeHolder: "Double-check for typos",
        type: "email",
      },
    ],
  },
  {
    id: 4,
    type: "select",
    data: [
      {
        id: "country",
        nameError: "Please enter your country",
        name: "Country/Region",
        data: countryList.getData(),
      },
    ],
  },
  {
    id: 5,
    type: "input",
    data: [
      {
        id: "phoneNumber",
        name: "Phone Number",
        nameError: "Please enter your phone number",
        subName: "Needed by the property to validate your booking",
        country: true,
        type: "number",
      },
    ],
  },
];
