import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { getUserWithToken, postUserLogin } from "../../api/User/Login";
import { useNavigate } from "react-router-dom";
import removeCookie from "../../hooks/useRegisterRemoveCookie";
import setCookie from "../../hooks/useRegisterSetCookie";
import routesConfig from "../../configs/routesConfig";
import getCookie from "../../hooks/useRegisterGetCookie";
import { useTranslation } from "react-i18next";
import { getLogout } from "../../api/User/Logout";

export const UserContext = createContext();
const AppUserProvider = ({ children }) => {
  const { t } = useTranslation();
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [tokenBooking, setTokenBooking] = useState("");
  const cookieToken = getCookie("token");
  const cookieTokenBooking = getCookie("tokenBooking");
  const [userLoading, setUserLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorLogin, setErrorLogin] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    await getLogout(token)
    removeCookie("token");
    setCookie("token","");
    setUser({});
    setToken("")
  };

  useEffect(() => {
    if (cookieToken) {
      setToken(cookieToken);
    }
  }, [cookieToken]);

  useEffect(() => {
    if (cookieTokenBooking) {
      setTokenBooking(cookieTokenBooking);
    }
  }, [cookieTokenBooking]);

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
          setToken();
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
        tokenBooking,
        setTokenBooking,
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
