import PropTypes from "prop-types";
import Navbar from "../../Navbar/Navbar";
import { use100vh } from "react-div-100vh";
import { useContext } from "react";
import { ThemeContext } from "../../Contexts/AppThemeProvider";
import LanguageModal from "../../Modals/LanguageModal";
function DefaultLayout({ children }) {
  const { darkMode } = useContext(ThemeContext);
  const heightWindow = use100vh();

  return (
    <div className={`${darkMode}`}>
      <LanguageModal />
      <div
        className='bg-gray-50 w-full dark:bg-primary-700 overflow-x-hidden overflow-y-auto'
        style={{ minHeight: heightWindow }}
      >
        <div className='flex items-center justify-center w-full flex-col'>
          <Navbar />
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
