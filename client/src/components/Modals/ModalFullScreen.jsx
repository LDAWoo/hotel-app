import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";

function ModalFullScreen({ isOpen, body, onClose }) {
  const handleCloseModal = () => {
    onClose();
  };

  if (!isOpen) {
    return;
  }
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-[200]'>
      <div className='block left-0 right-0 bottom-0 top-0 absolute bg-[rgba(0,0,0,0.4)]'></div>
      <div
        className='fixed right-[20px] flex items-center justify-center top-[20px] cursor-pointer hover:text-hotel-50 shadow-[1px_2px_2px_0px_rgba(23,24,25,9)] w-10 h-10 z-[1002] bg-white rounded-full'
        onClick={handleCloseModal}
      >
        <AiOutlineClose size={22} />
      </div>
      <div className='absolute z-[1001] top-[40px] left-[40px] w-[calc(100%_-_80px)] h-[calc(100%_-_80px)] rounded-lg bg-white'>
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

export default ModalFullScreen;
