import { useContext, useEffect } from "react";
import useRegisterWindowOnline from "../../hooks/useRegisterWindowOnline";
import PropTypes from "prop-types";
import { ThemeContext } from "../Contexts/AppThemeProvider";
import useRegisterWindowSizeStore from "../../hooks/useRegisterWindowSizeStore";
import FilterModal from "../Modals/FilterModal/FilterModal";
import MapModal from "../Modals/MapModal/MapModal";
import LanguageModal from "../Modals/LanguageModal/LanguageModal";
import UploadAvatarModal from "../Modals/UploadAvatarModal/UploadAvatarModal";
import useRegisterScrollStore from "../../hooks/useRegisterScrollStore";
import BookingConfirmationModal from "../Modals/BookingConfirmationModal/BookingConfirmationModal";
const MainLayout = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  const { setIsOnline } = useRegisterWindowOnline();
  const { setWidthAndHeight } = useRegisterWindowSizeStore();
  const {isVisible} = useRegisterScrollStore();

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
    <div className={`${darkMode} h-screen overflow-y-auto`}>
      <FilterModal />
      <MapModal />
      <LanguageModal />
      <BookingConfirmationModal/>
      <UploadAvatarModal/>
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
