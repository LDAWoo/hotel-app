import PropTypes from "prop-types";
function Title({ title, small, medium, large, xl, xxl, xxxl, extraLarge4, extraLarge5, extraLarge6, extraLarge7, extraLarge8, extraLarge9, extraLarge10, nowrap = true, fontBold, fontMedium, className }) {
  return (
    <span
      className={`${small ? "text-[8px]" : ""} ${medium ? "text-[10px] " : ""} ${large ? "text-[12px]" : ""} ${xl ? "text-[14px]" : ""} ${xxl ? "text-[15px]" : ""} ${xxxl ? "text-[16px] sm:text-[18px]" : ""} ${extraLarge4 ? "text-[18px] sm:text-[20px] " : ""} ${extraLarge5 ? "text-[20px] sm:text-[22px]" : ""} ${extraLarge6 ? "text-[22px] sm:text-[24px]" : ""} ${
        extraLarge7 ? "text-[24px] sm:text-[26px]" : ""
      } ${extraLarge8 ? "text-[24px] sm:text-[26px]" : ""} ${extraLarge9 ? "text-[26px] sm:text-[28px]" : ""} ${extraLarge10 ? "text-[28px] sm:text-[30px]" : ""} ${fontBold ? "font-bold" : ""} ${fontMedium ? "font-medium" : ""} ${nowrap ? "whitespace-nowrap" : ""} overflow-hidden text-ellipsis ${className ? className : ""}`}
    >
      {title}
    </span>
  );
}

Title.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  xl: PropTypes.bool,
  xxl: PropTypes.bool,
  xxxl: PropTypes.bool,
  extraLarge4: PropTypes.bool,
  extraLarge5: PropTypes.bool,
  extraLarge6: PropTypes.bool,
  extraLarge7: PropTypes.bool,
  extraLarge8: PropTypes.bool,
  extraLarge9: PropTypes.bool,
  extraLarge10: PropTypes.bool,
  nowrap: PropTypes.bool,
  fontBold: PropTypes.bool,
  fontMedium: PropTypes.bool,
  className: PropTypes.string,
};
export default Title;
