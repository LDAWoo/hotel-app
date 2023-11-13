import PropType from "prop-types";
import { createContext } from "react";

export const UseToken = createContext();

const AppTokenProvider = ({ children }) => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2dWxkYXBzMjU5MjZAZnB0LmVkdS52biIsImlhdCI6MTY5OTg2NDQ2OCwiZXhwIjoxNjk5OTUwODY4fQ.zAmvKH4CvvEaeCBBrdnVdFM6CO4OUa0HS0AOwycTdLM";

  return <UseToken.Provider value={{ token }}>{children}</UseToken.Provider>;
};

AppTokenProvider.propTypes = {
  children: PropType.node.isRequired,
};

export default AppTokenProvider;
