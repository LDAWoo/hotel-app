function generateHoursArray() {
  const hours = [];
  for (let hour = 0; hour < 24; hour++) {
    const formattedHour = hour.toString().padStart(2, "0");
    hours.push({
      id: hour,
      key: hour,
      value: formattedHour + ":00",
      name: formattedHour + ":00",
    });
  }
  return hours;
}

export const HouseRulesData = [
  // {
  //   id: 1,
  //   title: "Check in",
  //   type: "select",
  //   data: [
  //     {
  //       id: 1,
  //       name: "From",
  //       time: generateHoursArray(),
  //     },
  //     {
  //       id: 2,
  //       name: "Until",
  //       time: generateHoursArray(),
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   title: "Check out",
  //   type: "select",
  //   data: [
  //     {
  //       id: 1,
  //       name: "From",
  //       time: generateHoursArray(),
  //     },
  //     {
  //       id: 2,
  //       name: "Until",
  //       time: generateHoursArray(),
  //     },
  //   ],
  // },
  {
    id: 2,
    title: "Additional Polices?",
    subTitle: "",
    type: "toggle",
    value: true,
  },
  {
    id: 3,
    title: "Do you allow children?",
    type: "radio",
    data: [
      {
        id: 1,
        name: "children",
        title: "Yes",
        value: true,
      },
      {
        id: 2,
        name: "children",
        title: "No",
        value: false,
      },
    ],
  },
  {
    id: 4,
    title: "Do you allow pet?",
    type: "select",
    data: [
      {
        id: 1,
        time: [
          {
            name: "Yes",
            value: true,
          },
          {
            name: "No",
            value: false,
          },
        ],
      },
    ],
  },

  {
    id: 5,
    title: "Do you allow smoking?",
    type: "select",
    data: [
      {
        id: 1,
        time: [
          {
            name: "Yes",
            value: true,
          },
          {
            name: "No",
            value: false,
          },
        ],
      },
    ],
  },
];
