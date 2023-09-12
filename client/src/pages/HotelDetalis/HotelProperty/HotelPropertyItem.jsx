import PropTypes from "prop-types";
import Icon from "../../../components/Icon/Icon";
import Title from "../../../components/Title/Title";

function HotelPropertyItems({ icon, title }) {
  return (
    <li className='flex w-auto p-[5px] flex-col justify-center sm:flex-row sm:min-w-[12px] sm:max-w-full sm:justify-start sm:p-[12px] sm:border-[0.120rem] text-primary-500 dark:text-white rounded-sm dark:border-primary-500 border-gray-200 flex-grow flex-shrink basis-auto items-center text-center'>
      {icon && <Icon icon={icon} size={28} />}
      {title && (
        <div className='ml-2 mr-2 whitespace-nowrap'>
          <Title medium title={title} />
        </div>
      )}
    </li>
  );
}

HotelPropertyItems.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string,
};

export default HotelPropertyItems;
