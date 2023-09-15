import { menuMores } from "../../../../Constants/MenuMore";
import Language from "./Language";
import Theme from "./Theme";

function MenuMore() {
  return (
    <>
      {menuMores.map((menu, index) => (
        <div key={index}>
          {menu.language && <Language data={menu.language} />}
          {menu?.theme && <Theme data={menu.theme} />}
        </div>
      ))}
    </>
  );
}

export default MenuMore;
