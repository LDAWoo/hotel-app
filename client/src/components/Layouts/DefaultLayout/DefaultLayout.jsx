import PropTypes from "prop-types";
import { useContext } from "react";
import { use100vh } from "react-div-100vh";
import Banner from "../../Banner/Banner";
import { ThemeContext } from "../../Contexts/AppThemeProvider";
import LanguageModal from "../../Modals/LanguageModal/LanguageModal";
import Navbar from "../../Navbar/Navbar";

function DefaultLayout({ children }) {
  const { darkMode } = useContext(ThemeContext);
  const heightWindow = use100vh();

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
