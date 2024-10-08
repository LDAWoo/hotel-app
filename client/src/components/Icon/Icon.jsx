import PropTypes from "prop-types";

function Icon({ icon, size, classIcon,...props }) {
  const IconComponent = icon;

  return (
    <div className={classIcon} {...props}>{icon && <IconComponent size={size} />}</div>
  );
}

Icon.propTypes = {
  icon: PropTypes.elementType,
  size: PropTypes.number,
  classIcon: PropTypes.string,
};

export default Icon;
