import { BiBed } from "react-icons/bi";

export const AddRoomData = [
  {
    id: 1,
    title: "Which beds are available in this room?",
    type: "increase",
    data: [
      {
        id: 1,
        name: "Single beb",
        sizeBed: "90 - 130 cm wide",
        value: 0,
        step: 1,
        min: 0,
        max: 25,
        icon: BiBed,
      },
      {
        id: 2,
        name: "Double beb",
        sizeBed: "131 - 150 cm wide",
        value: 1,
        step: 1,
        min: 0,
        max: 25,
        icon: BiBed,
      },
      {
        id: 3,
        name: "Large bed (King size)",
        sizeBed: "151 - 180 cm wide",
        value: 0,
        step: 1,
        min: 0,
        max: 25,
        icon: BiBed,
      },
      {
        id: 4,
        name: "Extra-large bed (Super-king size)",
        sizeBed: "181 - 210 cm wide",
        value: 0,
        step: 1,
        min: 0,
        max: 25,
        icon: BiBed,
      },
    ],
  },
  {
    id: 2,
    title: "How many guests can stay in this room?",
    type: "increase",
    data: [
      {
        id: 1,
        name: "",
        value: 1,
      },
    ],
  },
  {
    id: 3,
    title: "Is smoking allowed in this room?",
    type: "radio",
    data: [
      {
        id: 1,
        name: "smoking",
        title: "Yes",
        value: true,
      },
      {
        id: 2,
        name: "smoking",
        title: "No",
        value: false,
      },
    ],
  },
];
