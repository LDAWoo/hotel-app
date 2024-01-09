import { OwnerHostData } from "../../../components/Constants/OwnerHostData";
import Title from "../../../components/Title/Title";
import ItemHost from "../ItemHost";
import PropTypes from "prop-types";

function ComponentOwnerHost({
  isNumberOfProperty,
  active,
  value,
  onChange,
  onClick,
}) {
  return (
    <div className='w-full grid grid-cols-1 gap-5 p-4 bg-white dark:bg-primary-700'>
      {OwnerHostData.map((item, index) => (
        <ItemHost
          key={index}
          description={item?.name}
          img={item?.image}
          active={active === item?.name}
          className='aspect-auto'
          onClick={() => onClick(item?.name, item?.numberOfProperty)}
        />
      ))}

      {isNumberOfProperty && (
        <div className='flex flex-col gap-2 w-full'>
          <Title title='Number of property' xl />
          <input
            type='number'
            className='w-[20vw] pl-1 pt-1 pb-1 text-primary-700 border-[2px] focus:border-hotel-75 focus:outline-none dark:focus:border-hotel-200 rounded-md dark:bg-primary-700 dark:border-primary-500 dark:text-white'
            value={value}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  );
}

ComponentOwnerHost.propTypes = {
  isNumberOfProperty: PropTypes.bool.isRequired,
  active: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ComponentOwnerHost;
