import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

function AppThemeProvider({ children }) {
  const theme = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = useState(theme);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppThemeProvider;
