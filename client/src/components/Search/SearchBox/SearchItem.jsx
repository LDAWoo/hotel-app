import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { DeviceContext } from "../../../components/Contexts/AppDeviceProvider";
import useRegisterLocationStore from "../../../hooks/useRegisterLocationStore";
import useRegisterToolTipLocation from "../../../hooks/useRegisterToolTipLocation";
import Icon from "../../Icon/Icon";
import Title from "../../Title/Title";
function SearchItem({
  className,
  icon,
  iconClose,
  label,
  title,
  input,
  size,
  sizeClose,
  placeholder,
  name,
  value = "",
  handleChangeInput,
  handleClose,
  onClick,
  button,
}) {
  const { isMobile } = useContext(DeviceContext);
  const { onCloseAlert } = useRegisterLocationStore();
  const [isFocus, setIsFocus] = useState(false);
  const { onOpen } = useRegisterToolTipLocation();

  const handleFocus = () => {
    setIsFocus(true);
    onCloseAlert();
    if (isMobile) {
      onOpen();
    }
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <div className={`box-border w-full ${className}`}>
      <div
        className={`border-[2px] box-border border-transparent duration-300 hover:border-red-500  ${
          title
            ? "bg-hotel-50 hover:bg-hotel-100"
            : "bg-white dark:bg-primary-600"
        } ${button ? "cursor-pointer" : ""} rounded-lg w-full`}
        onClick={onClick}
      >
        <div className={`flex flex-1 w-full items-center p-1`}>
          <div
            className={`flex items-center relative duration-50 gap-2 p-[2px] w-full border-[2px] ${
              isFocus ? " border-hotel-100" : " border-transparent"
            } ${button && icon ? "justify-start" : "justify-center"}`}
          >
            {icon && (
              <div className={` ${title ? "text-white" : "dark:text-white"}`}>
                <Icon icon={icon} size={size} />
              </div>
            )}
            {input && (
              <input
                type='text'
                placeholder={placeholder}
                name={name}
                value={value}
                className={`flex justify-start flex-grow outline-none font-medium dark:text-white dark:placeholder:text-primary-50 bg-transparent placeholder:text-black placeholder:text-[14px] placeholder:sm:text-[15px] placeholder:font-medium text-[14px] sm:text-[15px]${
                  isFocus
                    ? "placeholder:text-gray-500 dark:placeholder:text-gray-100"
                    : ""
                } overflow-hidden text-ellipsis whitespace-nowrap`}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => handleChangeInput(e)}
              />
            )}

            {iconClose && value.length > 0 && (
              <div className='flex justify-end relative z-10 '>
                <div
                  className='flex items-center justify-center cursor-pointer dark:text-white'
                  onClick={handleClose}
                >
                  <Icon icon={iconClose} size={sizeClose} />
                </div>
              </div>
            )}
            {label && (
              <Title
                title={label}
                fontMedium
                titleCustom='text-[14px] sm:text-[15px]'
                colorTitle='dark:text-white'
              />
            )}

            {title && (
              <Title
                colorTitle='text-white'
                title={title}
                titleCustom='text-[14px] sm:text-[15px]'
                fontBold
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

SearchItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.elementType,
  iconClose: PropTypes.elementType,
  title: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.bool,
  size: PropTypes.number,
  sizeClose: PropTypes.number,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChangeInput: PropTypes.func,
  handleClose: PropTypes.func,
  onClick: PropTypes.func,
  button: PropTypes.bool,
};
export default SearchItem;
