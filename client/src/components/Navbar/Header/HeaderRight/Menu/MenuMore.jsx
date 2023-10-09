import { menuMores } from "../../../../Constants/MenuMore";

function MenuMore() {
  return (
    <>
      {menuMores.map((menu, index) => (
        <div key={index}>{menu.component}</div>
      ))}
    </>
  );
}

export default MenuMore;
