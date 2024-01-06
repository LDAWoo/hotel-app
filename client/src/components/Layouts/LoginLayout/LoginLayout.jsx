import MainLayout from "../MainLayout";

import PropTypes from "prop-types";
import AccountHeader from "../../Navbar/AccountHeader/AccountHeader";
function LoginLayout({ children }) {
  return (
    <MainLayout>
      <AccountHeader />
      <div className='w-full dark:bg-primary-700 min-h-[100vh]'>
        <div className='p-4'>
          <div className='max-w-[360px] mx-auto'>{children}</div>
        </div>
      </div>
    </MainLayout>
  );
}

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginLayout;
