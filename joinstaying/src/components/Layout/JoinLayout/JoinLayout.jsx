import PropTypes from "prop-types";
import JoinBanner from "../../Banner/JoinBanner";
import HostHeader from "../../Navbar/HostHeader/HostHeader";
import MainLayout from "../MainLayout";
function JoinLayout({ children }) {
  return (
    <MainLayout>
      <div className="flex w-full flex-col">
        <HostHeader />
        <JoinBanner />
        {children}
      </div>
    </MainLayout>
  );
}

JoinLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default JoinLayout;
