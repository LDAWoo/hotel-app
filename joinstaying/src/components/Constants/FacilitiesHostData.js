export const FacilitiesHostData = [
  {
    id: 1,
    title: "Tùy chọn gường phụ",
    subTitle: "Quý vị có cung cấp gường phụ không?",
    type: "radio",
    data: [
      {
        name: "extrabed",
        value: "yes",
        title: "Yes",
      },
      {
        name: "extrabed",
        value: "no",
        title: "No",
      },
    ],
  },
];

export const ExtraBed = [
  {
    title: "Chọn số gường phụ có thể thêm vào",
    type: "select",
    data: [
      {
        id: 1,
        value: 1,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 4,
      },
      {
        id: 5,
        value: 5,
      },
      {
        id: 6,
        value: 6,
      },
      {
        id: 7,
        value: 7,
      },
      {
        id: 8,
        value: 8,
      },
      {
        id: 9,
        value: 9,
      },
      {
        id: 10,
        value: 10,
      },
    ],
  },
  {
    title: "Đánh dấu chọn ô nếu Quý vị cho phép các khách sau đây ngủ trên gường phụ.",
    type: "checkbox",
    data: [
      {
        title: "Trẻ em đến 2 tuổi ngủ trong cũi",
        name: "childrenUpToTwoYearOld",
        value: "childrenSleepInCribs",
        data: [],
      },
      {
        title: "Trẻ em",
        name: "childrenOlderThanTwoYearOld",
        value: "typeOfGuestChildren",
        data: [
          {
            title: "",
            type: "select",
            data: [
              {
                value: 3,
                name: "Đến 3 tuổi",
              },
              {
                value: 4,
                name: "Đến 4 tuổi",
              },
              {
                value: 5,
                name: "Đến 5 tuổi",
              },
              {
                value: 6,
                name: "Đến 6 tuổi",
              },
              {
                value: 7,
                name: "Đến 7 tuổi",
              },
              {
                value: 8,
                name: "Đến 8 tuổi",
              },
              {
                value: 9,
                name: "Đến 9 tuổi",
              },
              {
                value: 10,
                name: "Đến 10 tuổi",
              },
              {
                value: 11,
                name: "Đến 11 tuổi",
              },
              {
                value: 12,
                name: "Đến 12 tuổi",
              },
              {
                value: 13,
                name: "Đến 13 tuổi",
              },
              {
                value: 14,
                name: "Đến 14 tuổi",
              },
              {
                value: 15,
                name: "Đến 15 tuổi",
              },
              {
                value: 16,
                name: "Đến 16 tuổi",
              },
              {
                value: 17,
                name: "Đến 17 tuổi",
              },
            ],
          },
          {
            title: "Nhập giá cho một đêm một trẻ",
            type: "number",
            value: "priceGuestChildren",
          },
        ],
      },
      {
        title: "Người lớn",
        name: "adults",
        value: "typeOfGuestAdults",
        data: [
          {
            title: "",
            type: "select",
            data: [],
          },
          {
            title: "Nhập giá cho một đêm một người lớn",
            type: "number",
            value: "priceGuestAdults",
          },
        ],
      },
    ],
  },
];
