import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from "prop-types";
import { createContext } from "react";

export const UserContext = createContext();
const AppUserProvider = ({ children }) => {
  const { loginWithRedirect, logout } = useAuth0();

  const handleLoginWithGoogle = () => {
    loginWithRedirect({ connection: "google-oauth2" });
  };

  const handleLoginWithFacebook = () => {
    loginWithRedirect({ connection: "facebook" });
  };

  const handleLogout = () => {
    logout();
  };

  function getTokenFromCookie() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith("token=")) {
        return cookie.substring("token=".length);
      }
    }
    return null;
  }

  const token = getTokenFromCookie();
  if (token) {
    console.log("Token found:", token);
  } else {
    console.log("Token not found");
  }

  return (
    <UserContext.Provider
      value={{ handleLoginWithGoogle, handleLoginWithFacebook, handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};

AppUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppUserProvider;
