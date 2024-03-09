import { Language as TranslateLanguage } from "../../../../Constants/Language";
import ListYourProperty from "../ListYourProperty/ListYourProperty";
import Language from "./Language";

function MenuMore() {
  const menuMores = [
    {
      id: 1,
      component: <Language data={TranslateLanguage} />,
    },
    {
      id: 2,
      component: <ListYourProperty />,
    },
  ];

  return (
    <div>
      {menuMores.map((menu, index) => (
        <div key={index}>{menu.component}</div>
      ))}
    </div>
  );
}

export default MenuMore;
