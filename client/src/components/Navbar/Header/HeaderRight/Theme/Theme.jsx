import { useTranslation } from "react-i18next";
import { BsMoonStars } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import useRegisterToolTipTheme from "../../../../../hooks/useRegisterToolTipTheme";
import TitleComponent from "../../../../TitleComponent/TitleComponent";
import RegisterToolTip from "../../../../ToolTip/RegisterToolTip/RegisterToolTip";
import ThemeButton from "./ThemeButton";
import ThemeMenu from "./ThemeMenu";
import PropTypes from "prop-types";

function Theme({ visible }) {
  const { t } = useTranslation();
  const localStorageTheme = localStorage.getItem("theme");
  const iconComponent = !localStorageTheme
    ? MdLightMode
    : localStorageTheme === "dark"
    ? BsMoonStars
    : MdLightMode;

  return (
    <div className='relative'>
      <ThemeButton visible={visible} />
      <RegisterToolTip
        userRegisterToolTip={useRegisterToolTipTheme}
        component={
          <TitleComponent title={t("Theme.title")} icon={iconComponent} />
        }
        render={<ThemeMenu />}
        width={240}
        zIndex='z-[1002]'
      />
    </div>
  );
}

Theme.propTypes = {
  visible: PropTypes.bool,
};

export default Theme;
