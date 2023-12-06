import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getUserWithToken, postUserLogin } from "../../api/User/Login";
import getCookie from "../../hooks/useRegisterGetCookie";
import removeCookie from "../../hooks/useRegisterRemoveCookie";
import setCookie from "../../hooks/useRegisterSetCookie";

export const UserContext = createContext();

const AppUserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const handleLogin = async (userData) => {
    try {
      const response = await postUserLogin(userData);
      if (response && response.token) {
        const token = response.token;

        const expirationTime = 14 * 24 * 60 * 60;
        const expirationDate = new Date(Date.now() + expirationTime);
        removeCookie(token);

        setCookie("token", token, expirationDate);
        setUser(response);
        navigate("/");
      } else {
        navigate("sign-in");
        setUser({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const cookieToken = getCookie("token");

    const fetchUserData = async () => {
      if (cookieToken) {
        try {
          const userDataResponse = await getUserWithToken(cookieToken);
          setLoading(false);
          setUser(userDataResponse);
        } catch (error) {
          setLoading(false);
          setUser({});
        }
      }
    };

    fetchUserData();
  }, []);

  return <UserContext.Provider value={{ loading, setLoading, user, setUser, handleLogin }}>{children}</UserContext.Provider>;
};
AppUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppUserProvider;
