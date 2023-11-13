import PropType from "prop-types";
import { createContext } from "react";

export const UseToken = createContext();

const AppTokenProvider = ({ children }) => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2dWxkYXBzMjU5MjZAZnB0LmVkdS52biIsImlhdCI6MTY5OTg0NzgzMiwiZXhwIjoxNjk5OTM0MjMyfQ.cmydmmxMU90rQkJ72xO63RxaMyrwZ5t3_nJf1JTJy5E";

  return <UseToken.Provider value={{ token }}>{children}</UseToken.Provider>;
};

AppTokenProvider.propTypes = {
  children: PropType.node.isRequired,
};

export default AppTokenProvider;
