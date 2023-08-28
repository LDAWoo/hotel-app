import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
  GiCutDiamond,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { BiHomeAlt2 } from "react-icons/bi";

import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";

export const categories = [
  {
    id: 1,
    translationKey: "Home",
    icon: BiHomeAlt2,
    description: "This property has home!",
    to: "/",
  },
  {
    id: 2,
    translationKey: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
    to: "/Beach",
  },
  {
    id: 3,
    translationKey: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills!",
    to: "/Windmills",
  },
  {
    id: 4,
    translationKey: "Modern",
    icon: MdOutlineVilla,
    description: "This property has Modern!",
    to: "/Modern",
  },
  {
    id: 5,
    translationKey: "Countryside",
    icon: TbMountain,
    description: "This property has countryside!",
    to: "/Modern",
  },
  {
    id: 6,
    translationKey: "Pools",
    icon: TbPool,
    description: "This property has pool!",
    to: "/Modern",
  },
  {
    id: 7,
    translationKey: "Islands",
    icon: GiIsland,
    description: "This property has islands!",
    to: "/Modern",
  },
  {
    id: 8,
    translationKey: "Lake",
    icon: GiBoatFishing,
    description: "This property has lake!",
    to: "/Modern",
  },
  {
    id: 9,
    translationKey: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing!",
    to: "/Modern",
  },
  {
    id: 10,
    translationKey: "Castles",
    icon: GiCastle,
    description: "This property has castles!",
    to: "/Modern",
  },
  {
    id: 11,
    translationKey: "Camping",
    icon: GiForestCamp,
    description: "This property has camping!",
    to: "/Modern",
  },
  {
    id: 12,
    translationKey: "Arctic",
    icon: BsSnow,
    description: "This property has arctic!",
    to: "/Modern",
  },
  {
    id: 13,
    translationKey: "Cave",
    icon: GiCaveEntrance,
    description: "This property has cave!",
    to: "/Modern",
  },
  {
    id: 14,
    translationKey: "Desert",
    icon: GiCaveEntrance,
    description: "This property has desert!",
    to: "/Modern",
  },
  {
    id: 15,
    translationKey: "Barns",
    icon: GiBarn,
    description: "This property has barn!",
    to: "/Modern",
  },
  {
    id: 16,
    translationKey: "Lux",
    icon: GiCutDiamond,
    description: "This property has lux!",
    to: "/Modern",
  },
];
