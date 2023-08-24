import ToolTip from '../ToolTip/ToolTip'
import Icon from '../Icon/Icon'

import PropTypes from 'prop-types'

function TextInput({
  className,
  label,
  classLabel,
  classInput,
  classToolTip,
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
  ...props
}) {
  return (
    <div className={className}>
        { label && (
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
        <div className="relative w-full rounded-lg duration-200 outline-none border-[2px] dark:border-gray-800 ">
            <input className={`${!classInput && `bg-transparent rounded-lg w-full h-[48px] pt-1 pb-1 pr-[10px] outline-none text-primary-100 dark:text-white font-medium text-[16px] ${icon ? 'pl-[48px]' : 'pl-[10px]'}`} `} {...props} />
            {icon && (
                <div className={`${!classIcon && 'absolute top-0 bottom-0 flex justify-center items-center pl-2 text-primary-100 dark:text-primary-50'}`}>
                    <Icon icon={icon} size={sizeIcon}/>
                </div>
            )}
            { copy && (
                <button className={classCopy}>
                    <Icon icon={iconCopy} size={sizeIconCopy}/>
                </button>
            )}
            { currency && <div className={classCurrency}>{currency}</div>}

        </div>
    </div>
  )
}

TextInput.propTypes = {
    className: PropTypes.string,
    classLabel: PropTypes.string,
    classInput: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.elementType,
    iconCopy: PropTypes.elementType,
    copy: PropTypes.string,
    currency: PropTypes.string,
    tooltip: PropTypes.string,
    placement: PropTypes.string,
    classCurrency: PropTypes.string,
    classToolTip: PropTypes.string,
    classIcon: PropTypes.string,
    classCopy: PropTypes.string,
    sizeIcon: PropTypes.number,
    sizeIconCopy : PropTypes.number,
  };

export default TextInput;
