import { useNavigate } from "react-router-dom";
import LoginHeader from "../../Navbar/LoginHeader/LoginHeader";
import MainLayout from "../MainLayout";

import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/AppUserProvider";
import routesConfig from "../../../configs/routesConfig";
function LoginLayout({ children }) {
  const navigate = useNavigate();
  const { user, userLoading } = useContext(UserContext);

  useEffect(() => {
    if (!userLoading) {
      if (Object.keys(user).length > 0) {
        navigate(routesConfig.home);
      }
    }
  }, [user, userLoading, navigate]);
  return (
    <MainLayout>
      <LoginHeader />
      <div className="w-full dark:bg-primary-700 min-h-[100vh]">
        <div className="p-4">
          <div className="max-w-[360px] mx-auto">{children}</div>
        </div>
      </div>
    </MainLayout>
  );
}

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginLayout;
