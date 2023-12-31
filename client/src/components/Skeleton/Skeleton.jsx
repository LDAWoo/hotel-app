import PropTypes from "prop-types";
import { useContext } from "react";
import ContentLoader from "react-content-loader";
import { ThemeContext } from "../Contexts/AppThemeProvider";

function Skeleton({ children, viewBox = "0 0 400 500", className }) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <ContentLoader
      title=''
      viewBox={viewBox}
      className={`${className ? className : "w-full h-auto"}`}
      backgroundColor={`${
        darkMode === "light"
          ? "var(--bg-light-skeleton)"
          : "var(--bg-dark-skeleton)"
      }`}
      foregroundColor={`${
        darkMode === "light"
          ? "var(--fg-light-skeleton)"
          : "var(--fg-dark-skeleton)"
      }`}
      speed={3}
    >
      {children}
    </ContentLoader>
  );
}

Skeleton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  viewBox: PropTypes.string,
};

export default Skeleton;
