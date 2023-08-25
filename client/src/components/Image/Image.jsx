import { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../Contexts/AppThemeProvider";

function Image({ className, src, srcDark, srcSet, srcSetDark, alt }) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <img
      className={className}
      srcSet={darkMode === "dark" ? srcSetDark : srcSet}
      src={darkMode === "dark" ? srcDark : src}
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
  alt: PropTypes.string.isRequired,
};

export default Image;
