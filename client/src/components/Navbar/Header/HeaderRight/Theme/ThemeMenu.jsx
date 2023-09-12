import { useContext } from "react";
import { useTranslation } from "react-i18next";
import useRegisterToolTipTheme from "../../../../../hooks/useRegisterToolTipTheme";
import Button from "../../../../Buttons/Button";
import { Theme as Themes } from "../../../../Constants/Theme";
import { ThemeContext } from "../../../../Contexts/AppThemeProvider";
function ThemeMenu() {
  const { t } = useTranslation();

  const { setDarkMode } = useContext(ThemeContext);
  const { onClose } = useRegisterToolTipTheme();
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

  return (
    <>
      {Themes.map((theme) => (
        <div className='w-full' key={theme.id}>
          <Button
            className='w-full h-full hover:bg-gray-200/50 dark:hover:bg-primary-500 p-[7px] translate duration-300'
            title={t(theme?.translationKey)}
            classTitle={`${
              !localStorageTheme
                ? theme?.code === "system"
                  ? "text-hotel-50"
                  : "dark:text-primary-50"
                : localStorageTheme === theme?.code
                ? "text-hotel-50"
                : "dark:text-primary-50"
            }`}
            icon={theme?.icon}
            large
            fontMedium
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
        </div>
      ))}
    </>
  );
}

export default ThemeMenu;
