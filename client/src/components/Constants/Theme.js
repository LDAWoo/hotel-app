import { MdLightMode } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
export const Theme = [
  {
    id: 1,
    code: "light",
    icon: MdLightMode,
    translationKey: "Theme.light.title",
  },
  {
    id: 2,
    code: "dark",
    icon: BsMoonStars,
    translationKey: "Theme.dark.title",
  },
  {
    id: 3,
    code: "system",
    icon: CgScreen,
    translationKey: "Theme.system.title",
  },
];
