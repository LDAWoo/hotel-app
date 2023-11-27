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
    title:
      "Đánh dấu chọn ô nếu Quý vị cho phép các khách sau đây ngủ trên gường phụ.",
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
                id: 3,
                value: "Đến 3 tuổi",
              },
              {
                id: 4,
                value: "Đến 4 tuổi",
              },
              {
                id: 5,
                value: "Đến 5 tuổi",
              },
              {
                id: 6,
                value: "Đến 6 tuổi",
              },
              {
                id: 7,
                value: "Đến 7 tuổi",
              },
              {
                id: 8,
                value: "Đến 8 tuổi",
              },
              {
                id: 9,
                value: "Đến 9 tuổi",
              },
              {
                id: 10,
                value: "Đến 10 tuổi",
              },
              {
                id: 11,
                value: "Đến 11 tuổi",
              },
              {
                id: 12,
                value: "Đến 12 tuổi",
              },
              {
                id: 13,
                value: "Đến 13 tuổi",
              },
              {
                id: 14,
                value: "Đến 14 tuổi",
              },
              {
                id: 15,
                value: "Đến 15 tuổi",
              },
              {
                id: 16,
                value: "Đến 16 tuổi",
              },
              {
                id: 17,
                value: "Đến 17 tuổi",
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
