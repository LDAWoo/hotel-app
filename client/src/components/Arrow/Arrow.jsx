import PropTypes from "prop-types";
import Button from "../Buttons/Button";
function Arrow({
  width,
  height,
  icon,
  onClick,
  size,
  top,
  right,
  left,
  className,
}) {
  return (
    <Button
      className={`absolute z-[5] flex items-center justify-center bg-white shadow-[0_2px_8px_0_rgba(26,26,26,0.16)] dark:shadow-[0px_2px_4px_0px_rgba(200,200,200,0.16)] dark:bg-primary-500 border-[2px] border-transparent hover:border-hotel-50 hover:border-opacity-50 duration-500 rounded-full hover:scale-105 ${
        width ? width : "w-[32px]"
      } ${height ? height : "h-[32px]"} ${top && top} ${left && left} ${
        right && right
      } ${className}`}
      icon={icon}
      classIcon='translate-x-1 dark:text-white'
      size={size}
      onClick={onClick}
    />
  );
}

Arrow.propTypes = {
  icon: PropTypes.elementType.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.number,
  top: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  className: PropTypes.string,
};

export default Arrow;
