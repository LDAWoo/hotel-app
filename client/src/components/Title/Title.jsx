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
  extraLarge5,
  nowrap = true,
  fontBold,
  fontMedium,
  titleCustom,
}) {
  return (
    <span
      className={`${
        small ? "text-[8px] vsm:text-[10px] sm:text-[12px] md:text-[14px]" : ""
      } ${
        medium
          ? "text-[10px] vsm:text-[12px] sm:text-[14px] md:text-[16px]"
          : ""
      } ${
        large ? "text-[12px] vsm:text-[14px] sm:text-[16px] md:text-[18px]" : ""
      } ${
        xl ? "text-[14px] vsm:text-[16px] sm:text-[18px] md:text-[20px]" : ""
      } ${
        xxl ? "text-[16px] vsm:text-[18px] sm:text-[20px] md:text-[22px]" : ""
      } ${
        xxxl ? "text-[18px] vsm:text-[20px] sm:text-[22px] md:text-[24px]" : ""
      } ${
        extraLarge4
          ? "text-[20px] vsm:text-[22px] sm:text-[24px] md:text-[26px] "
          : ""
      } ${
        extraLarge5
          ? "text-[22px] vsm:text-[24px] sm:text-[26px] md:text-[28px] 2md:text-[30px]"
          : ""
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
  extraLarge5: PropTypes.bool,
  nowrap: PropTypes.bool,
  fontBold: PropTypes.bool,
  fontMedium: PropTypes.bool,
  titleCustom: PropTypes.string,
};
export default Title;
