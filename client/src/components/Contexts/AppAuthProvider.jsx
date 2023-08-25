import { Auth0Provider } from "@auth0/auth0-react";
import PropTypes from "prop-types";

const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;

const AppAuthProvider = ({ children }) => {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

AppAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppAuthProvider;
