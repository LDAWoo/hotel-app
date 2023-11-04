import PropTypes from "prop-types";

function RadioInput({ id, name, title, value, checked = false, onChange }) {
  return (
    <div className='flex items-center space-x-2'>
      <input
        type='radio'
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className='form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer'
      />
      <label htmlFor={id} className='text-sm dark:text-white cursor-pointer'>
        {title}
      </label>
    </div>
  );
}

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default RadioInput;
