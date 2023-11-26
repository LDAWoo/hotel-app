import { useContext, useEffect } from "react";
import useRegisterWindowOnline from "../../hooks/useRegisterWindowOnline";
import PropTypes from "prop-types";
import { ThemeContext } from "../Contexts/AppThemeProvider";
import useRegisterWindowSizeStore from "../../hooks/useRegisterWindowSizeStore";
const MainLayout = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);

  const { isOnline, setIsOnline } = useRegisterWindowOnline();
  const { setWidthAndHeight } = useRegisterWindowSizeStore();

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    const handleResize = () => {
      console.log(3);
      setWidthAndHeight(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(isOnline);
  return <div className={`${darkMode}`}>{children}</div>;
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
