import PropTypes from "prop-types";

function Checkbox({ title, value, values, name, checked, onChange }) {
  return (
    <div className='relative w-full pt-1 pl-0 pr-1 pb-1'>
      <div className='flex items-center w-full mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem]'>
        <div className='flex items-center flex-1'>
          <input
            className='relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary-100  outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[""] checked:border-transparent checked:bg-hotel-50 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[""] hover:cursor-pointer'
            type='checkbox'
            value={value}
            id={value}
            onChange={(e) => onChange(name, e.target.checked)}
            checked={checked}
          />
          <label
            className='inline-block text-[14px] pl-[0.15rem] hover:cursor-pointer'
            htmlFor={value}
          >
            {title}
          </label>
        </div>

        {values && (
          <label className='hover:cursor-pointer text-[14px]' htmlFor={value}>
            {values}
          </label>
        )}
      </div>
    </div>
  );
}

Checkbox.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  values: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
