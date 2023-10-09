import { useContext } from "react";
import Button from "../../../../Buttons/Button";
import { ThemeContext } from "../../../../Contexts/AppThemeProvider";
import useRegisterToolTipTheme from "../../../../../hooks/useRegisterToolTipTheme";
import { BsMoonStars } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";

function ThemeButton() {
  const { darkMode } = useContext(ThemeContext);
  const iconComponent = darkMode === "dark" ? BsMoonStars : MdLightMode;
  const { isOpen, onOpen, onClose } = useRegisterToolTipTheme();
  const localStorageTheme = localStorage.getItem("theme");

  const handelChooseTheme = () => {
    if (isOpen) {
      onClose();
      return;
    }
    onOpen();
  };

  return (
    <div className='hidden lg:flex items-center justify-center w-14 h-14 mt-2 mr-2 rounded-md hover:bg-hotel-200 '>
      <Button
        className='w-full h-full'
        classIcon={`translate-x-1 ${
          !localStorageTheme ? "text-gray-300" : "text-gray-200"
        }`}
        icon={iconComponent}
        onClick={handelChooseTheme}
        size={20}
      />
    </div>
  );
}

export default ThemeButton;
