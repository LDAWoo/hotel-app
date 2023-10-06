import PropTypes from "prop-types";
import { memo } from "react";
import Icon from "../Icon/Icon";
import Image from "../Image/Image";
import Title from "../Title/Title";
function Button({
  className,
  background,
  border,
  classIcon,
  active,
  icon,
  classTitle,
  title,
  size,
  customSize,
  disabled,
  classImg,
  src,
  srcDark,
  srcSet,
  srcSetDark,
  alt,
  onClick,
  iconPosition,
  srcPosition,
  titlePosition,
  fontBold,
  fontMedium,
  xxxl,
  xxl,
  xl,
  large,
  medium,
  small,
  nowrap,
  titleCustom,
}) {
  return (
    <button
      className={`${
        background
          ? disabled
            ? ""
            : "bg-hotel-100 hover:bg-hotel-300 duration-200 text-white w-full"
          : ""
      } ${
        border
          ? disabled
            ? ""
            : "border border-hotel-100 text-hotel-100 hover:bg-hotel-25 duration-200 w-full "
          : ""
      } ${
        disabled ? "opacity-70 cursor-not-allowed bg-[#d9d9d9]" : ""
      } flex items-center justify-center transition w-full ${className}`}
      type='button'
      disabled={disabled}
      onClick={onClick}
    >
      <div
        className={`${
          title ? "justify-start" : "item-center flex-grow justify-center"
        } ml-2 mr-2 flex items-center gap-2 `}
      >
        {srcPosition === "before" && src && (
          <Image
            className={classImg}
            src={src}
            srcDark={srcDark}
            srcSet={srcSet}
            srcSetDark={srcSetDark}
            alt={alt}
          />
        )}
        {titlePosition === "before" && (
          <Title
            title={title}
            colorTitle={classTitle}
            fontBold={fontBold}
            fontMedium={fontMedium}
            xxxl={xxxl}
            xxl={xxl}
            xl={xl}
            large={large}
            medium={medium}
            small={small}
            nowrap={nowrap}
            titleCustom={titleCustom}
          />
        )}
        {iconPosition !== "right" && icon && (
          <Icon
            classIcon={classIcon}
            icon={icon}
            customSize={customSize}
            size={size}
          />
        )}
        <div className={`${iconPosition !== "right" ? "" : "flex-1"}`}>
          {srcPosition !== "before" && src && (
            <Image
              className={classImg}
              src={src}
              srcDark={srcDark}
              srcSet={srcSet}
              srcSetDark={srcSetDark}
              alt={alt}
            />
          )}
          {titlePosition !== "before" && title && (
            <Title
              title={title}
              colorTitle={classTitle}
              fontBold={fontBold}
              fontMedium={fontMedium}
              xxxl={xxxl}
              xxl={xxl}
              xl={xl}
              large={large}
              medium={medium}
              small={small}
              nowrap={nowrap}
              titleCustom={titleCustom}
            />
          )}
        </div>
        {active && iconPosition === "right" && icon && (
          <Icon
            classIcon={classIcon}
            icon={icon}
            customSize={customSize}
            size={size}
          />
        )}
      </div>
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  background: PropTypes.bool,
  border: PropTypes.bool,
  classIcon: PropTypes.string,
  icon: PropTypes.elementType,
  classTitle: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.number,
  customSize: PropTypes.number,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  classImg: PropTypes.string,
  src: PropTypes.string,
  srcDark: PropTypes.string,
  srcSet: PropTypes.string,
  srcSetDark: PropTypes.string,
  alt: PropTypes.string,
  iconPosition: PropTypes.oneOf(["before", "right"]),
  srcPosition: PropTypes.oneOf(["before", "right"]),
  titlePosition: PropTypes.oneOf(["before", "right"]),
  fontBold: PropTypes.bool,
  fontMedium: PropTypes.bool,
  xxxl: PropTypes.bool,
  xxl: PropTypes.bool,
  xl: PropTypes.bool,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  nowrap: PropTypes.bool,
  titleCustom: PropTypes.string,
};

export default memo(Button);
