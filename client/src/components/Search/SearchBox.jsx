import PropTypes from "prop-types";
import { useState } from "react";
function SearchBox({
  className,
  icon,
  iconClose,
  title,
  input,
  size,
  sizeClose,
  placeholder,
  name,
  value = "",
  handleChangeInput,
  handleClose,
  handleSubmit,
  button,
}) {
  const IconComponent = icon;
  const IconCloseComponent = iconClose;

  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <div className={`box-border p-1 w-full ${className}`}>
      <div
        className={`border-[2px] box-border border-transparent duration-300 hover:border-red-500  ${
          title
            ? "bg-hotel-50 hover:bg-hotel-100"
            : "bg-white dark:bg-primary-600"
        } ${button ? "cursor-pointer" : ""} rounded-lg w-full`}
        onClick={handleSubmit}
      >
        <div className={`flex flex-1 w-full items-center p-2 `}>
          <div
            className={`flex duration-50 gap-2 p-[2px] w-full border-[2px] ${
              isFocus ? " border-hotel-100" : " border-transparent"
            }`}
          >
            {IconComponent && (
              <div className={` ${title ? "text-white" : "dark:text-white"}`}>
                <IconComponent size={size} />
              </div>
            )}
            {input && (
              <input
                type='text'
                placeholder={placeholder}
                name={name}
                value={value}
                className={`flex-grow outline-none font-medium dark:text-white dark:placeholder:text-primary-50 bg-transparent placeholder:text-black placeholder:text-[14px] placeholder:font-medium ${
                  isFocus
                    ? "placeholder:text-gray-500 dark:placeholder:text-gray-100"
                    : ""
                }`}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => handleChangeInput(e)}
              />
            )}
            {IconCloseComponent && value.length > 0 && (
              <div className='flex justify-end relative z-10 '>
                <div
                  className='flex items-center justify-center cursor-pointer dark:text-white'
                  onClick={handleClose}
                >
                  <IconCloseComponent size={sizeClose} />
                </div>
              </div>
            )}
            {title && (
              <div className='flex w-full items-center justify-center text-center text-white font-medium'>
                {title}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

SearchBox.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.elementType,
  iconClose: PropTypes.elementType,
  title: PropTypes.string,
  input: PropTypes.bool,
  size: PropTypes.number,
  sizeClose: PropTypes.number,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChangeInput: PropTypes.func,
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func,
  button: PropTypes.bool,
};
export default SearchBox;
