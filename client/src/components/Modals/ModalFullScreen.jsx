import PropTypes from "prop-types";
import { memo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import useRegisterWindowSizeStore from "../../hooks/useRegisterWindowSizeStore";
import Icon from "../Icon/Icon";
function ModalFullScreen({ isOpen, body, onClose }) {
  const handleCloseModal = () => {
    onClose();
  };

  const { width } = useRegisterWindowSizeStore();

  if (!isOpen) {
    return;
  }

  if (width < 900) {
    return;
  }

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-[200]'>
      <div className='block left-0 right-0 bottom-0 top-0 absolute bg-[rgba(0,0,0,0.4)]'></div>
      <div
        className='fixed right-[20px] flex items-center justify-center top-[20px] cursor-pointer hover:text-hotel-50 shadow-[1px_2px_2px_0px_rgba(23,24,25,9)] dark:shadow-[1px_2px_2px_0px_rgba(23,24,25,5)] w-8 h-8 sm:w-10 sm:h-10 z-[1002] bg-white dark:bg-primary-600 dark:text-white hover:dark:text-hotel-50 rounded-full duration-500'
        onClick={handleCloseModal}
      >
        <Icon icon={AiOutlineClose} size={18} />
      </div>
      <div className='absolute z-[1001] top-[40px] left-[40px] w-[calc(100%_-_80px)] h-[calc(100%_-_80px)] rounded-lg bg-white dark:bg-primary-600'>
        {body}
      </div>
    </div>
  );
}

ModalFullScreen.propTypes = {
  isOpen: PropTypes.bool,
  body: PropTypes.node,
  onClose: PropTypes.func,
};

export default memo(ModalFullScreen);
