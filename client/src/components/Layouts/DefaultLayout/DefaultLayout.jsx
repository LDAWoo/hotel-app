import PropTypes from "prop-types";
import Banner from "../../Banner/Banner";
import Navbar from "../../Navbar/Navbar";
import MainLayout from "../MainLayout";
import Footer from "../../Footer/Footer";

function DefaultLayout({ children }) {
  return (
    <MainLayout>
      <div className='flex w-full flex-col'>
        <Navbar />
        <Banner />
        {children}
        <Footer/>
      </div>
    </MainLayout>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
