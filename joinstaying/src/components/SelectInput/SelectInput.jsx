import PropTypes from "prop-types";

function SelectInput({ className, children, ...props }) {
  return (
    <select
      className={`cursor-pointer text-[14px] text-primary-100 border-[1px] border-primary-100 pt-[5px] pb-[5px] pl-[3px] pr-[3px] focus:outline-none bg-white dark:bg-primary-700 dark:text-white ${
        className ? className : "mb-5"
      }`}
      {...props}
    >
      {children}
    </select>
  );
}

SelectInput.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SelectInput;
