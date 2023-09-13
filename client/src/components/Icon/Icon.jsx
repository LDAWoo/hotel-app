import PropTypes from "prop-types";
import useRegisterWindowSizeStore from "../../hooks/useRegisterWindowSizeStore";

function Icon({ icon, size, classIcon }) {
  const { width } = useRegisterWindowSizeStore();
  const IconComponent = icon;

  return (
    <div className={classIcon}>
      {icon && (
        <IconComponent
          size={
            width < 640
              ? size
                ? width < 320
                  ? size
                  : width < 480
                  ? size + 2
                  : width < 640
                  ? size + 4
                  : size + 6
                : 16
              : size + 8
          }
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
