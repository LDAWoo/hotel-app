import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import useRegisterToolTipTheme from "../../../../../hooks/useRegisterToolTipTheme";
import MenuButton from "./MenuButton";
import useRegisterToolTipMenuMore from "../../../../../hooks/useRegisterToolTipMenuMore";

function Theme({ data }) {
  const localStorageTheme = localStorage.getItem("theme");
  const { onOpen } = useRegisterToolTipTheme();
  const { onClose } = useRegisterToolTipMenuMore();

  const { t } = useTranslation();
  const handleShowTheme = () => {
    onClose();
    onOpen();
  };

  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  const exitsTheme = (localStorageTheme) => {
    if (!localStorageTheme) {
      return prefersDarkMode ? "dark" : "light";
    } else {
      return localStorageTheme;
    }
  };

  return (
    <div>
      {data.map((theme) => {
        if (theme.code === exitsTheme(localStorageTheme)) {
          return (
            <MenuButton
              key={theme?.id}
              title={t(theme?.translationKey)}
              icon={theme?.icon}
              onClick={handleShowTheme}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

Theme.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Theme;
