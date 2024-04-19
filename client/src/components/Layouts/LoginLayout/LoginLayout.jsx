import AccountHeader from "../../Navbar/AccountHeader/AccountHeader";
import { useNavigate } from "react-router-dom";
import MainLayout from "../MainLayout";
import PropTypes from "prop-types";
import { useContext, useEffect, useLayoutEffect } from "react";
import routesConfig from "../../../configs/routesConfig";
import { UserContext } from "../../Contexts/AppUserProvider";
function LoginLayout({ children }) {
  const navigate = useNavigate();
  const { user, userLoading } = useContext(UserContext);

  useLayoutEffect(() => {
    if (!userLoading) {
      if (Object.keys(user).length > 0) {
        navigate(routesConfig.home);
      }
    }
  }, [user, userLoading, navigate]);

  return (
    <MainLayout>
      <AccountHeader />
      <div className='p-4'>
        <div className='max-w-[360px] mx-auto'>{children}</div>
      </div>
    </MainLayout>
  );
}

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginLayout;
