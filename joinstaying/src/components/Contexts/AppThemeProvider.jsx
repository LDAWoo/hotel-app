import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function AppThemeProvider({ children }) {
  const theme = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = useState("");

  useEffect(() => {
    // if (theme == null) {
    //   const prefersDarkMode = window.matchMedia(
    //     "(prefers-color-scheme: dark)",
    //   ).matches;
    //   setDarkMode(prefersDarkMode ? "dark" : "light");
    // } else {
      setDarkMode("light");
    // }
  }, [theme]);

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
