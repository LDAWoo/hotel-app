import PropTypes from "prop-types";

function Icon({ icon, size }) {
  const IconComponent = icon;

  return <>{icon && <IconComponent size={size} />}</>;
}

Icon.propTypes = {
  icon: PropTypes.elementType,
  size: PropTypes.number,
};

export default Icon;
