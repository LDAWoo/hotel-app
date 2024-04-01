import PropTypes from "prop-types";
import LanguageModal from "../../../Modals/LanguageModal/LanguageModal";
import MapModal from "../../../Modals/MapModal/MapModal";
import SearchModal from "../../../Modals/SearchModal/SearchModal";
import Navbar from "../../../Navbar/Navbar";
import MainLayout from "../../MainLayout";
import Footer from "../../../Footer/Footer";
function LayoutHotelDetail({ children }) {
  return (
    <MainLayout>
      <div className='flex w-full flex-col'>
        <LanguageModal />
        <MapModal />
        <SearchModal />
        <Navbar />
        {children}
        <Footer/>
      </div>
    </MainLayout>
  );
}

LayoutHotelDetail.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutHotelDetail;
