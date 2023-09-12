import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/AppThemeProvider";

function Image({ className, src, srcDark, srcSet, srcSetDark, alt }) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <img
      className={className}
      srcSet={darkMode === "dark" ? srcSetDark : srcSet}
      src={srcDark ? (darkMode === "dark" ? srcDark : src) : src}
      alt={alt}
    />
  );
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  srcDark: PropTypes.string,
  srcSet: PropTypes.string,
  srcSetDark: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
