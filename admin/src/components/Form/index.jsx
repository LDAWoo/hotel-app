import PropTypes from "prop-types";
import Icon from "../Icon";
function Form({ className, classInput, onSubmit, placeholder, value, setValue, type, name, icon }) {
  return (
    <form className={`relative w-full 2md:w-[360px] ${className}`} action="" onSubmit={onSubmit}>
      <input className={`w-full h-[40px] focus:outline-none border-[2px] border-transparent focus:border-primary-p1 pt-0 pr-[20px] pb-0 pl-[44px] bg-secondary-n2 dark:bg-secondary-n6 rounded-xl text-secondary-n7 dark:text-secondary-n1 placeholder:text-shades-s1 ${classInput}`} type={type} value={value} onChange={(e) => setValue(e.target.value)} name={name} placeholder={placeholder} required />
      <button className="absolute top-0 left-2 bottom-0 w-[44px] pr-[4px] text-secondary-n4 transition-all hover:text-primary-p1">
        <Icon name={icon} size="24" />
      </button>
    </form>
  );
}
Form.propTypes = {
  className: PropTypes.string,
  classInput: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Form;
