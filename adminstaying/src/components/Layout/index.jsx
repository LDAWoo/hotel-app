import PropTypes from "prop-types";
import { useEffect } from "react";
import useRegisterWindowOnline from "../../hooks/useRegisterWindowOnline";
import useRegisterWindowSizeStore from "../../hooks/useRegisterWindowSizeStore";
import LanguageModal from "../Modal/LanguageModal/LanguageModal";

const MainLayout = ({ children }) => {
  const { setIsOnline } = useRegisterWindowOnline();
  const { setWidthAndHeight } = useRegisterWindowSizeStore();

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    const handleResize = () => {
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

  return (
    <div>
      <LanguageModal />
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
