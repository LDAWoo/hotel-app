import PropTypes from "prop-types";
import { createContext, useEffect, useMemo, useState } from "react";

export const DeviceContext = createContext();

function AppDeviceProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const userAgent = useMemo(() => navigator.userAgent, []);

  useEffect(() => {
    const checkIsMobileDevice = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent,
      );
    };
    setIsMobile(checkIsMobileDevice());
  }, [userAgent]);

  return (
    <DeviceContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </DeviceContext.Provider>
  );
}
AppDeviceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppDeviceProvider;
