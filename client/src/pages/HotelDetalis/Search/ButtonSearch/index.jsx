import Icon from "../../../../components/Icon/Icon";
import { MdKeyboardArrowDown } from "react-icons/md";
import Title from "../../../../components/Title/Title";
import PropTypes from "prop-types";
function ButtonSearch({
  icon,
  title,
  type,
  active,
  placeholder,
  className,
  classInput,
  onChange,
  onClick,
  value,
}) {
  return (
    <div
      className={`w-full flex flex-row gap-2 items-center bg-white dark:text-white/80 dark:bg-primary-700 rounded-sm ${
        type == "button"
          ? `border-[2px] ${
              active
                ? "border-hotel-100 dark:border-hotel-50"
                : "border-transparent"
            }  cursor-pointer `
          : ""
      } ${className ? className : ""}`}
      onClick={onClick}
    >
      <div className='relative'>
          <Icon
            icon={icon}
            size={24}
            classIcon={`pt-[6px] pb-[6px] pl-[6px] pr-0 ${type ==="error" && 'text-error-100'}`}
          />
        {type !== "text" && <span className='absolute top-[14px] left-[9px] text-[9px] w-[19px] text-center'>
          {value}
        </span>}
      </div>
      {type === "text" && (
          <input
            type={type}
            placeholder={placeholder}
            className={`outline-none pt-[6px] pb-[6px] pr-[6px] pl-0 font-medium text-[14px] bg-transparent placeholder:font-normal placeholder:text-primary-50 ${
              classInput ? classInput : ""
            }`}
            value={value}
            onChange={onChange}
          />
      )}
      {type === "button" && (
        <div className='flex flex-row items-center gap-2 w-full'>
          <Title title={title} xl nowrap={false}/>
          <Icon icon={MdKeyboardArrowDown} />
        </div>
      )}
      {type === "error" && (
        <div className='flex flex-row items-center gap-2 w-full p-[4px_0_4px_0]'>
        <Title title={title} xl nowrap={false}/>
      </div>
      )}
    </div>
  );
}

ButtonSearch.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string,
  type: PropTypes.oneOf(["button", "text"]).isRequired,
  active: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  classInput: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ButtonSearch;
