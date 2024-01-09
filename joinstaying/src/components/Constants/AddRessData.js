import countryList from "country-list";

export const AddRessData = [
  {
    id: 1,
    type: "select",
    data: [
      {
        name: "Country/region",
        data: countryList.getData(),
      },
    ],
  },
  {
    id: 2,
    type: "text",
    data: [
      {
        name: "Street name and house number",
        field: "streetAddress",
        placeHolder: "Start typing your address",
      },
    ],
  },
  {
    id: 3,
    type: "text",
    data: [
      {
        name: "District Address",
        field: "districtAddress",
      },
    ],
  },
  {
    id: 4,
    type: "text",
    data: [
      {
        name: "City",
        field: "city",
      },
    ],
  },
  {
    id: 5,
    type: "text",
    data: [
      {
        name: "Zip code",
        field: "postalCode",
      },
    ],
  },
];
