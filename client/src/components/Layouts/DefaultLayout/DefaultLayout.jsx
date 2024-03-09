import PropTypes from "prop-types";
import Banner from "../../Banner/Banner";
import Navbar from "../../Navbar/Navbar";
import MainLayout from "../MainLayout";

function DefaultLayout({ children }) {
  return (
    <MainLayout>
      <div className='flex w-full flex-col'>
        <Navbar />
        <Banner />
        {children}
      </div>
    </MainLayout>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
