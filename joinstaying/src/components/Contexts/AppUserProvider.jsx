// import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getUserWithToken, postUserLogin } from "../../api/User/Login";
import routesConfig from "../../configs/routesConfig";
import getCookie from "../../hooks/useRegisterGetCookie";
import removeCookie from "../../hooks/useRegisterRemoveCookie";
import setCookie from "../../hooks/useRegisterSetCookie";

export const UserContext = createContext();
const AppUserProvider = ({ children }) => {
  const { t } = useTranslation();
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [sessionToken, setSessionToken] = useState("");
  const cookieToken = getCookie("token");
  const sessionCookieToken = getCookie("sessionJwtToken");
  const [userLoading, setUserLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorLogin, setErrorLogin] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("token");
    setUser({});
  };

  useEffect(() => {
    if (cookieToken) {
      setToken(cookieToken);
    }
  }, [cookieToken]);

  useEffect(() => {
    if (sessionCookieToken) {
      setSessionToken(sessionCookieToken);
    }
  }, [sessionCookieToken]);

  const handleLogin = async (userData) => {
    try {
      setLoading(true);
      const response = await postUserLogin(userData);
      const data = await response.data;
      if (data && data.jwtToken) {
        const token = data.jwtToken;
        const expirationTime = 14 * 24 * 60 * 60 * 1000;
        const expirationDate = new Date(Date.now() + expirationTime);
        removeCookie("token");
        setCookie("token", token, expirationDate);
        setToken(token);
        navigate(routesConfig.home);
        setErrorLogin("");
      } else {
        navigate(routesConfig.login);
      }
    } catch (e) {
      setErrorLogin(t("Error.Account.loginFailed"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        try {
          setUserLoading(true);
          const userDataResponse = await getUserWithToken(token);
          const data = await userDataResponse.data;
          setUser(data);
          setUserLoading(false);
        } catch (error) {
          setUser({});
          setUserLoading(false);
          setToken("");
        }
      }
    };

    fetchUserData();
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        handleLogin,
        handleLogout,
        user,
        setUser,
        token,
        setToken,
        sessionToken,
        setSessionToken,
        userLoading,
        setUserLoading,
        errorLogin,
        setErrorLogin,
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
