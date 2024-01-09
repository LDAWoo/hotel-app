import { useState } from "react";
import Icon from "../Icon/Icon";
import ToolTip from "../ToolTip/ToolTip";
import PropTypes from "prop-types";
import { MdOutlineErrorOutline } from "react-icons/md";
function TextInput({
  className,
  label,
  classLabel,
  classBorder,
  classInput,
  classToolTip,
  error,
  icon,
  classIcon,
  sizeIcon,
  copy,
  classCopy,
  iconCopy,
  sizeIconCopy,
  currency,
  classCurrency,
  tooltip,
  placement,
  placeholder,
  onClickCopy,
  ...props
}) {
  const [active, setActive] = useState(false);

  const handleFocus = () => {
    setActive(true);
  };

  const handleBlur = () => {
    setActive(false);
  };
  return (
    <div className={`${className}`}>
      {label && (
        <div className={classLabel}>
          {label}{" "}
          {tooltip && (
            <ToolTip
              className={classToolTip}
              content={tooltip}
              placement={placement}
            >
              {tooltip}
            </ToolTip>
          )}
        </div>
      )}
      <div
        className={`relative w-full rounded-[4px] duration-200 outline-none   ${
          !classBorder
            ? `border-[1px] ${
                active
                  ? "border-hotel-100 shadow-[0_0_0_1px_rgba(0,13,194,.76)]"
                  : `${
                      error
                        ? "border-red-500 shadow-[0_0_0_1px_rgba(204,0,0,1)]"
                        : "border-gray-300 dark:border-primary-500"
                    }`
              }`
            : classBorder
        }`}
      >
        <input
          className={`${
            !classInput
              ? `bg-transparent hover:bg-transparent rounded-lg w-full h-[35px] pt-1 pb-1 pr-[10px] outline-none text-primary-700 placeholder:text-primary-100 dark:placeholder:text-primary-50 dark:text-white font-normal text-[14px] ${
                  icon ? "pl-[48px]" : "pl-[10px]"
                }`
              : classInput
          } `}
          placeholder={placeholder}
          {...props}
          autoCapitalize='off'
          autoCorrect='off'
          spellCheck='false'
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {icon && (
          <div
            className={`${
              !classIcon
                ? "absolute top-0 bottom-0 flex justify-center items-center pl-2 text-primary-100 dark:text-primary-50"
                : classIcon
            }`}
          >
            <Icon icon={icon} size={sizeIcon} />
          </div>
        )}

        {error && !active && (
          <div
            className={`absolute top-0 bottom-0 right-0 flex justify-center items-center pl-2 text-red-500 dark:text-primary-50"
          }`}
          >
            <Icon icon={MdOutlineErrorOutline} size={sizeIcon} />
          </div>
        )}
        {copy && (
          <div className={classCopy} onClick={onClickCopy}>
            <Icon icon={iconCopy} size={sizeIconCopy} />
          </div>
        )}
        {currency && <div className={classCurrency}>{currency}</div>}
      </div>
    </div>
  );
}

TextInput.propTypes = {
  className: PropTypes.string,
  classLabel: PropTypes.string,
  classInput: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.elementType,
  iconCopy: PropTypes.elementType,
  error: PropTypes.bool,
  copy: PropTypes.bool,
  currency: PropTypes.string,
  tooltip: PropTypes.string,
  placement: PropTypes.string,
  placeholder: PropTypes.string,
  classCurrency: PropTypes.string,
  classBorder: PropTypes.string,
  classToolTip: PropTypes.string,
  classIcon: PropTypes.string,
  classCopy: PropTypes.string,
  sizeIcon: PropTypes.number,
  sizeIconCopy: PropTypes.number,
  onClickCopy: PropTypes.func,
};

export default TextInput;
