import Icon from "../Icon/Icon";
import { AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";
const ToolTipNotification = ({
  className,
  icon,
  header,
  isOpen,
  onClose,
  render,
}) => {
  const handleClose = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div
      className={`border bg-white dark:bg-primary-700 dark:border-primary-500 dark:text-white p-4 ${className}`}
    >
      <div className='flex flex-col gap-3'>
        <div className='relative flex flex-row gap-5'>
          <Icon icon={icon} size={24} />
          <div className='flex flex-col gap-5'>
            {header && header}
            {render && render}
          </div>
          <div
            className='absolute -top-1 -right-1 cursor-pointer p-2 bg-transparent hover:bg-gray-100 dark:hover:bg-primary-500 duration-300'
            onClick={handleClose}
          >
            <Icon size={20} icon={AiOutlineClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

ToolTipNotification.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node.isRequired,
  header: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  render: PropTypes.node,
};

export default ToolTipNotification;
