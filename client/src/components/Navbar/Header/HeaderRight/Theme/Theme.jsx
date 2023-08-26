import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { MdLightMode } from "react-icons/md";
import useRegisterToolTip from "../../../../../hooks/useRegisterToolTip";
import Button from "../../../../Buttons/Button";
import { Theme as Themes } from "../../../../Constants/Theme";
import { ThemeContext } from "../../../../Contexts/AppThemeProvider";
import ToolTip from "../../../../ToolTip/ToolTip";
import { BsMoonStars } from "react-icons/bs";

function Theme() {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useRegisterToolTip();
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const localStorageTheme = localStorage.getItem("theme");

  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  const handleChangeTheme = (themeCode) => {
    if (themeCode === "system") {
      localStorage.removeItem("theme");
      setDarkMode(prefersDarkMode ? "dark" : "light");
    } else {
      localStorage.setItem("theme", themeCode);
      setDarkMode(themeCode);
    }
    onClose();
  };

  const handelChooseTheme = () => {
    if (isOpen) {
      onClose();
      return;
    }
    onOpen();
  };

  const iconComponent = darkMode === "dark" ? BsMoonStars : MdLightMode;

  const Items = () => {
    return (
      <div className='flex flex-col dark:bg-primary-600 border-[2px] border-gray-200 dark:border-primary-500 shadow-md rounded-md gap-2 pt-1 pb-1'>
        {Themes.map((theme) => (
          <Button
            key={theme.id}
            className='w-full h-full hover:bg-gray-100 mr-10 dark:hover:bg-primary-500 p-[5px] translate duration-300'
            title={t(theme?.translationKey)}
            classTitle={`${
              !localStorageTheme
                ? theme?.code === "system"
                  ? "text-hotel-50"
                  : "dark:text-primary-50"
                : localStorageTheme === theme?.code
                ? "text-hotel-50"
                : "dark:text-primary-50"
            } text-[15px] font-bold`}
            icon={theme?.icon}
            size={18}
            classIcon={`${
              !localStorageTheme
                ? theme?.code === "system"
                  ? "text-hotel-50"
                  : "dark:text-primary-50"
                : localStorageTheme === theme?.code
                ? "text-hotel-50"
                : "dark:text-primary-50"
            } 
            }`}
            onClick={() => handleChangeTheme(theme?.code)}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <ToolTip
        onClickOutside={() => onClose()}
        typeToolTip='TippyHeadless'
        isVisible={isOpen}
        items={<Items />}
        width={300}
      >
        <div>
          <ToolTip
            delay={[500, 0]}
            placement='bottom'
            content={t("Theme.title")}
          >
            <div className='flex items-center justify-center w-14 h-14 mt-2 mr-2 rounded-md bg-transparent hover:bg-hotel-100 '>
              <Button
                className='w-full h-full'
                classIcon={`translate-x-1 ${
                  !localStorageTheme ? "text-gray-300" : "text-gray-200"
                }`}
                size={24}
                icon={iconComponent}
                onClick={handelChooseTheme}
              />
            </div>
          </ToolTip>
        </div>
      </ToolTip>
    </>
  );
}

export default Theme;
