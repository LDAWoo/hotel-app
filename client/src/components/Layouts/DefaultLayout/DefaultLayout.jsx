import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { use100vh } from "react-div-100vh";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import Banner from "../../Banner/Banner";
import { ThemeContext } from "../../Contexts/AppThemeProvider";
import LanguageModal from "../../Modals/LanguageModal/LanguageModal";
import MapModal from "../../Modals/MapModal/MapModal";
import Navbar from "../../Navbar/Navbar";
import FilterModal from "../../Modals/FilterModal/FilterModal";

function DefaultLayout({ children }) {
  const { darkMode } = useContext(ThemeContext);
  const heightWindow = use100vh();

  const { setWidthAndHeight } = useRegisterWindowSizeStore();

  useEffect(() => {
    const handleResize = () => {
      setWidthAndHeight(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${darkMode}`}>
      <div
        className='bg-gray-50 w-full dark:bg-primary-700 overflow-x-hidden overflow-y-auto'
        style={{
          minHeight: heightWindow,
        }}
      >
        <div className='flex w-full flex-col'>
          <LanguageModal />
          <FilterModal />
          <MapModal />
          <Navbar />
          <Banner />
          {children}
        </div>
      </div>
    </div>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
