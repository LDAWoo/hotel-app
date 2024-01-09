import countryList from "country-list";

export const InvoicingData = [
  {
    id: 1,
    title: "What name should be on the invoice?",
    type: "radio",
    data: [
      {
        name: "invoice_name",
        title: "Vũ Lee",
        value: "partner_name",
        checked: true,
      },
      {
        name: "invoice_name",
        title: "The Hotel",
        value: "property_name",
        checked: true,
      },
      {
        name: "invoice_name",
        title: "Legal company name (please specify)",
        value: "legal_company",
        checked: false,
      },
    ],
  },
  {
    id: 2,
    title: "Does this recipient have the same address as your property?",
    type: "radio",
    data: [
      {
        name: "same_address",
        title: "Yes",
        value: "yes",
        checked: true,
      },
      {
        name: "same_address",
        title: "No",
        value: "no",
        checked: false,
        data: [
          {
            name: "Country/region",
            data: countryList.getData(),
            type: "select",
          },
          {
            name: "City",
            type: "text",
          },
          {
            name: "Address line 1",
            type: "text",
          },
          {
            name: "Postcode",
            type: "text",
          },
        ],
      },
    ],
  },
];
