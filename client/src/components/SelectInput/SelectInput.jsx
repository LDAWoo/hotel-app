import PropTypes from "prop-types";

function SelectInput({ className, children, value, onChange }) {
  return (
    <select
      value={value}
      className={`cursor-pointer mb-5 text-[14px] text-primary-100 border-[1px] border-primary-100 pt-[5px] pb-[5px] pl-[3px] pr-[3px] focus:outline-none dark:bg-primary-700 dark:text-white ${className}`}
      onChange={onChange}
    >
      {children}
    </select>
  );
}

SelectInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export default SelectInput;
