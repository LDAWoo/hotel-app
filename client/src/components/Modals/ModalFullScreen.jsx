import PropTypes from "prop-types";
import { memo, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Icon from "../Icon/Icon";
function ModalFullScreen({ isOpen, body, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (!modalRef.current) {
        return;
      }
      if (!modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

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
        className='fixed left-[20px] 2md:left-[94%] 2md:right-[20px] flex items-center justify-center top-[20px] cursor-pointer hover:text-hotel-50 2md:shadow-[1px_2px_2px_0px_rgba(23,24,25,9)] 2md:dark:shadow-[1px_2px_2px_0px_rgba(23,24,25,5)] w-8 h-8 sm:w-10 sm:h-10 z-[1002] 2md:bg-white 2md:dark:bg-primary-500 dark:text-white hover:dark:text-hotel-50 rounded-full duration-500 transition-[left]'
        onClick={handleCloseModal}
      >
        <div className='hidden 2md:flex'>
          <Icon icon={AiOutlineClose} size={18} />
        </div>
        <div
          className='flex 2md:hidden stroke-[2px] stroke-white h-6 '
          style={{ filter: "drop-shadow(0 0 4px rgba(0,0,0,.6))" }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M13.31 12l6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z'></path>
          </svg>
        </div>
      </div>
      <div
        className={`absolute z-[1001] top-0 left-0 2md:top-[40px] 2md:left-[40px] w-full 2md:w-[calc(100%_-_80px)] h-full 2md:h-[calc(100%_-_80px)] rounded-lg bg-white dark:bg-primary-600`}
        ref={modalRef}
      >
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
