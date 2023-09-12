import PropTypes from "prop-types";
import useRegisterWindowSizeStore from "../../hooks/useRegisterWindowSizeStore";

function Icon({ icon, size, classIcon, customSize = false }) {
  const { width } = useRegisterWindowSizeStore();
  const IconComponent = icon;

  return (
    <div className={classIcon}>
      {icon && (
        <IconComponent
          size={width < 640 ? (customSize ? customSize : 16) : size}
        />
      )}
    </div>
  );
}

Icon.propTypes = {
  icon: PropTypes.elementType,
  size: PropTypes.number,
  customSize: PropTypes.number,
  classIcon: PropTypes.string,
};

export default Icon;
