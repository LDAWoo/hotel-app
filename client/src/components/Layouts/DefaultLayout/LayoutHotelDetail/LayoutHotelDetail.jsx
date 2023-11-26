import PropTypes from "prop-types";
import LanguageModal from "../../../Modals/LanguageModal/LanguageModal";
import MapModal from "../../../Modals/MapModal/MapModal";
import SearchModal from "../../../Modals/SearchModal/SearchModal";
import Navbar from "../../../Navbar/Navbar";
import MainLayout from "../../MainLayout";
function LayoutHotelDetail({ children }) {
  return (
    <MainLayout>
      <div className='bg-gray-50 w-full dark:bg-primary-700 overflow-x-hidden overflow-y-auto min-h-[100vh]'>
        <div className='flex w-full flex-col'>
          <LanguageModal />
          <MapModal />
          <SearchModal />
          <Navbar />
          {children}
        </div>
      </div>
    </MainLayout>
  );
}

LayoutHotelDetail.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutHotelDetail;
