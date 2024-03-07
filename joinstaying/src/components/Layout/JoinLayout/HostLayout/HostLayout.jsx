import PropTypes from "prop-types";
import { useEffect } from "react";
import useRegisterWindowSizeStore from "../../../../hooks/useRegisterWindowSizeStore";
import HostStaying from "../../../../pages/HostStaying/HostStaying";
import HostHeader from "../../../Navbar/HostHeader/HostHeader";
import MainLayout from "../../MainLayout";

function HostLayout({ children }) {
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
    <MainLayout>
      <div className="flex w-full flex-col">
        <HostHeader />
        <HostStaying>{children}</HostStaying>
      </div>
    </MainLayout>
  );
}

HostLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HostLayout;
