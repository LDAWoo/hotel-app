import PropTypes from "prop-types";

function Button({
  className,
  classIcon,
  active,
  icon,
  classTitle,
  title,
  size,
  disabled,
  outline,
  small,
  classImg,
  src,
  alt,
  onClick,
  iconPosition,
  srcPosition,
  titlePosition,
}) {
  const IconComponent = icon;
  return (
    <>
      <button
        className={` ${
          !className
            ? `relative 
            disabled:opacity-70 
            disabled:cursor-not-allowed 
            rounded-lg 
            hover:opacity-80 
            transition w-full
            ${outline ? "bg-white dark:bg-primary-700" : "bg-hotel-50"}
            ${outline ? "border-hotel-50 dark:border-gray-300" : ""}
            ${outline ? "text-black" : "text-white"}
            ${small ? "py-1" : "py-3"}
            ${small ? "text-sm" : "text-md"}
            ${small ? "font-light" : "font-semibold"}
            ${small ? "border-[1px]" : "border-[2px]"}
            `
            : className
        }`}
        disabled={disabled}
        onClick={onClick}
      >
        <div
          className={`${
            title ? "justify-start" : "justify-center"
          } ml-2 mr-2 flex items-center gap-2 `}
        >
          {srcPosition === "before" && (
            <img className={classImg} src={src} alt={alt} />
          )}
          {titlePosition === "before" && (
            <div className={classTitle}>{title}</div>
          )}
          {iconPosition !== "right" && icon && (
            <IconComponent className={classIcon} size={size} />
          )}
          <div className={`${iconPosition !== "right" ? "" : "flex-1"}`}>
            {srcPosition !== "before" && src && (
              <img className={classImg} src={src} alt={alt} />
            )}
            {titlePosition !== "before" && title && (
              <div className={classTitle}>{title}</div>
            )}
          </div>
          {active && iconPosition === "right" && icon && (
            <IconComponent className={classIcon} size={size} />
          )}
        </div>
      </button>
    </>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  classIcon: PropTypes.string,
  icon: PropTypes.elementType,
  classTitle: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  classImg: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  srcPosition: PropTypes.oneOf(["before", "after"]),
  titlePosition: PropTypes.oneOf(["before", "after"]),
};

export default Button;
