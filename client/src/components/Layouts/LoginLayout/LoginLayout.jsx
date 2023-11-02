import { useContext } from "react";
import { ThemeContext } from "../../Contexts/AppThemeProvider";
import { use100vh } from "react-div-100vh";
import PropTypes from "prop-types";
function LoginLayout({ children }) {
  const { darkMode } = useContext(ThemeContext);
  const heightWindow = use100vh();

  return (
    <div className={`${darkMode}`}>
      <div
        className={`flex justify-center p-[48px] bg-gray-50 dark:bg-primary-700 overflow-hidden`}
        style={{ minHeight: heightWindow }}
      >
        {children}
      </div>
    </div>
  );
}

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginLayout;
