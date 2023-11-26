import PropTypes from "prop-types";
import Banner from "../../Banner/Banner";
import FilterModal from "../../Modals/FilterModal/FilterModal";
import MapModal from "../../Modals/MapModal/MapModal";
import Navbar from "../../Navbar/Navbar";
import MainLayout from "../MainLayout";

function DefaultLayout({ children }) {
  return (
    <MainLayout>
      <div className='bg-gray-50 w-full dark:bg-primary-700 overflow-x-hidden overflow-y-auto min-h-[100vh]'>
        <div className='flex w-full flex-col'>
          <FilterModal />
          <MapModal />
          <Navbar />
          <Banner />
          {children}
        </div>
      </div>
    </MainLayout>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
