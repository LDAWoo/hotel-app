import PropTypes from "prop-types";
function Title({
  title,
  colorTitle,
  small,
  medium,
  large,
  xl,
  xxl,
  xxxl,
  extraLarge4,
  nowrap = true,
  fontBold,
  fontMedium,
  titleCustom,
}) {
  return (
    <span
      className={`${
        small ? "text-[10px] md:text-[12px] 2md:text-[14px]" : ""
      } ${medium ? "text-[12px] md:text-[14px] 2md:text-[16px]" : ""} ${
        large ? "text-[14px] md:text-[16px] 2md:text-[18px]" : ""
      } ${xl ? "text-[16px] md:text-[18px] 2md:text-[20px]" : ""} ${
        xxl ? "text-[20px] md:text-[22px] 2md:text-[24px]" : ""
      } ${xxxl ? "text-[24px] md:text-[26px] 2md:text-[28px]" : ""} ${
        extraLarge4 ? "text-[26px] md:text-[28px] 2md:text-[30px]" : ""
      } ${fontBold ? "font-bold" : ""} ${fontMedium ? "font-medium" : ""} ${
        nowrap ? "whitespace-nowrap" : ""
      } overflow-hidden text-ellipsis ${titleCustom ? titleCustom : ""} ${
        colorTitle ? colorTitle : ""
      }`}
    >
      {title}
    </span>
  );
}

Title.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colorTitle: PropTypes.string,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  xl: PropTypes.bool,
  xxl: PropTypes.bool,
  xxxl: PropTypes.bool,
  extraLarge4: PropTypes.bool,
  nowrap: PropTypes.bool,
  fontBold: PropTypes.bool,
  fontMedium: PropTypes.bool,
  titleCustom: PropTypes.string,
};
export default Title;
