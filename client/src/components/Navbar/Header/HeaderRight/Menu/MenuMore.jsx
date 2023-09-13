import i18next from "i18next";
import { menuMores } from "../../../../Constants/MenuMore";
import MenuButton from "./MenuButton";
import Theme from "./Theme";

function MenuMore() {
  return (
    <>
      {menuMores.map((menu, index) => (
        <div key={index}>
          {menu.language &&
            menu.language.map((langItem) => {
              if (langItem.code === i18next.language) {
                return (
                  <MenuButton
                    key={langItem.id}
                    title={langItem.title}
                    src={langItem?.img}
                  />
                );
              }
              return null;
            })}
          {menu?.theme && <Theme data={menu.theme} />}
        </div>
      ))}
    </>
  );
}

export default MenuMore;
