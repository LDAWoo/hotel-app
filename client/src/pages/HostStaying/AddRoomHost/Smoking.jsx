import PropTypes from "prop-types";

function Smoking({ data }) {
  return (
    <div className='flex flex-row gap-2'>
      {data.map((item, index) => (
        <div key={index} className='flex flex-row items-center'>
          <input
            type='radio'
            name={item?.name}
            className='w-4 h-4 mr-[8px] cursor-pointer dark:bg-primary-700'
            value={item?.value}
            id={item?.id}
          />
          <label
            className='flex flex-row gap-1 text-[14px] cursor-pointer w-full'
            htmlFor={item?.id}
          >
            {item?.title}
          </label>
        </div>
      ))}
    </div>
  );
}

Smoking.propTypes = {
  data: PropTypes.array,
};

export default Smoking;
