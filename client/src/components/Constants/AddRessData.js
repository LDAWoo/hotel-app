import countryList from "country-list";

export const AddRessData = [
  {
    id: 1,
    name: "Country/region",
    data: countryList.getData(),
  },
  {
    id: 2,
    name: "Street name and house number",
    placeHolder: "Start typing your address",
  },
  {
    id: 3,
    name: "Zip code",
  },
  {
    id: 4,
    name: "City",
  },
];
