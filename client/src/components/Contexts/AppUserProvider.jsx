import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { postUserLogin } from "../../api/User/Login";
import { useNavigate } from "react-router-dom";
import removeCookie from "../../hooks/useRegisterRemoveCookie";
import setCookie from "../../hooks/useRegisterSetCookie";
import routesConfig from "../../configs/routesConfig";
import getCookie from "../../hooks/useRegisterGetCookie";

export const UserContext = createContext();
const AppUserProvider = ({ children }) => {
  const { loginWithRedirect, logout } = useAuth0();
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const handleLoginWithGoogle = () => {
    loginWithRedirect({ connection: "google-oauth2" });
  };

  const handleLoginWithFacebook = () => {
    loginWithRedirect({ connection: "facebook" });
  };

  const handleLogout = () => {
    logout();
    removeCookie("token");
    setUser({});
  };

  const handleLogin = async (userData) => {
    try {
      const response = await postUserLogin(userData);

      if (response && response.token) {
        const token = response.token;
        const expirationTime = 14 * 24 * 60 * 60 * 1000;
        const expirationDate = new Date(Date.now() + expirationTime);
        removeCookie("token");

        setCookie("token", token, expirationDate);
        setUser(response);
        navigate(routesConfig.home);
      } else {
        navigate(routesConfig.login);
        setUser({});
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const cookieToken = getCookie("token");

    const fetchUserData = async () => {
      if (cookieToken) {
        try {
          // const userDataResponse = await getUserDataWithToken(cookieToken);
          // setUser(userDataResponse);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        handleLoginWithGoogle,
        handleLoginWithFacebook,
        handleLogin,
        handleLogout,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

AppUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppUserProvider;
