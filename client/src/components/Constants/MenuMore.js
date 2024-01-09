import Language from "../Navbar/Header/HeaderRight/Menu/Language";
import ListYourProperty from "../Navbar/Header/HeaderRight/Menu/ListYourProperty";
import Theme from "../Navbar/Header/HeaderRight/Menu/Theme";
import { Language as TranslateLanguage } from "./Language";
import { Theme as TransformTheme } from "./Theme";

export const menuMores = [
  {
    id: 1,
    component: <Language data={TranslateLanguage} />,
  },
  {
    id: 2,
    component: <Theme data={TransformTheme} />,
  },
  {
    id: 3,
    component: <ListYourProperty />,
  },
];
