import Icon from "../../../components/Icon/Icon";
import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";
const ItemPhoto = ({ url, alt, name, onClick }) => {
  return (
    <div>
      <img
        src={url}
        className='cursor-grab absolute top-0 bottom-0 left-0 right-0 rounded-[4px] w-full h-full object-cover border-[1px] border-white dark:border-primary-500'
        alt={alt}
      />
      <div
        className='absolute top-2 right-2 shadow-[0_0_4px_2px_rgba(200,200,200,0.2)] dark:shadow-[0_0_4px_2px_rgba(255,255,255,0.2)] bg-white text-primary-700 opacity-80 hover:opacity-90 dark:bg-primary-500 dark:opacity-60 rounded-full dark:text-hotel-25 dark:hover:bg-primary-600 duration-200 cursor-pointer p-1 m-0'
        onClick={() => onClick(name)}
      >
        <Icon icon={MdClose} size={24} />
      </div>
    </div>
  );
};

ItemPhoto.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ItemPhoto;
