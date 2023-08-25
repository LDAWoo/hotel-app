import PropTypes from "prop-types";

function Button({
  className,
  classIcon,
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
        <div className={`flex gap-1 items-center justify-center`}>
          {icon && <IconComponent className={classIcon} size={size} />}
          {title && <div className={classTitle}>{title}</div>}
          {src && <img className={classImg} src={src} alt={alt} />}
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
};

export default Button;
