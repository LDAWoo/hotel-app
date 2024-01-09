import countryList from "country-list";

const getBusinessData = [
  {
    id: 1,
    title: "",
    data: [
      {
        title: "Full name of business entity",
        type: "text",
        name: "owner_company_name",
      },
      {
        title: "Address of business entity",
        name: "owner_company_address",
      },
      {
        title: "Zip code",
        type: "text",
        name: "owner_company_address_zip_code",
      },
      {
        title: "City",
        type: "text",
        name: "owner_company_address_city",
      },
      {
        title: "Country",
        name: "owner_company_address_country",
        type: "select",
        data: countryList.getData(),
      },
    ],
  },
];

const getData = [
  {
    id: 1,
    title:
      "Please provide the full names and dates of birth of all individuals who own 25% or more of the accommodation.",
    data: [
      {
        title: "First name",
        name: "first_name",
      },
      {
        title: "Last name",
        name: "last_name",
      },
      {
        title: "Date of birth",
        name: "dob",
      },
    ],
  },
];

export const PartnerData = [
  {
    id: 1,
    title: "Is the accommodation owned by an individual or a business entity?",
    type: "select",
    data: [
      {
        id: 1,
        name: "Select an option",
        value: "",
      },
      {
        id: 2,
        name: "I am an individual running a business",
        value: "individual",
        type: "text",
        data: getData, // Remove parentheses to use the array
      },
      {
        id: 3,
        name: "I represent a business entity",
        value: "business",
        businessData: getBusinessData, // Remove parentheses to use the array
        data: getData, // Remove parentheses to use the array
      },
    ],
  },
];
