import { useTranslation } from "react-i18next";
import MenuButton from "./MenuButton";
import PropTypes from "prop-types";
import useRegisterToolTipTheme from "../../../../../hooks/useRegisterToolTipTheme";

function Theme({ data }) {
  const localStorageTheme = localStorage.getItem("theme");
  const { onOpen } = useRegisterToolTipTheme();

  const { t } = useTranslation();
  const handleShowTheme = () => {
    onOpen();
  };
  return (
    <div>
      {data.map((theme) => {
        if (theme.code === localStorageTheme) {
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
  data: PropTypes.object.isRequired,
};

export default Theme;
