import PropTypes from "prop-types";
import { useCallback, useEffect, useRef, useState } from "react";

import { IoMdClose } from "react-icons/io";
function ToolTipCustom({
  isOpen,
  onClose,
  component,
  disabled,
  width,
  render,
}) {
  const [showToolTip, setShowToolTip] = useState(isOpen);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setShowToolTip(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowToolTip(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`
              flex
              items-center
              justify-center
              fixed
              outline-none
              overflow-x-hidden
              overflow-y-auto
              scroll-smooth
              lg:absolute
              lg:overflow-y-hidden
              z-50
              inset-0
              m-0
              lg:inset-auto
              lg:-translate-x-[0px] 
              lg:translate-y-[11px] 
          `}
      ref={tooltipRef}
    >
      <div
        className={`
          relative
          w-full
          my-0
          mx-0
          h-full
          
          `}
        style={{
          width: windowWidth < 1024 ? "100%" : width,
        }}
      >
        {/* Content */}
        <div
          className={`
              translate-x-0
              duration-300
              h-full
              ${showToolTip ? "translate-y-0" : "translate-y-full"}
              `}
        >
          <div
            className='
                  translate
                  h-full
                  flex
                  flex-col
                  outline-none
                  lg:h-auto
                  lg:rounded-lg
                  lg:shadow-lg
                  lg:border-[1px]
                  lg:border-gray-200
                  lg:dark:border-primary-600 
                  bg-white
                  dark:bg-primary-600
  
                  '
          >
            {/* Header */}
            <div
              className='
                      flex
                      items-center
                      p-6
                     
                      '
            >
              <button
                onClick={handleClose}
                className='   
                    flex  
                   
                    p-1
                    border-0
                    hover:bg-gray-200/70
                    hover:dark:bg-primary-400/70
                    transition
                    absolute
                    right-5
                    rounded-full
                    text-hotel-50
                    '
              >
                <IoMdClose size={24} />
              </button>
            </div>
            {component && (
              <div className='pt-10 pl-6 pr-6 pb-1 flex lg:hidden'>
                {component}
              </div>
            )}
            {render && (
              <div className='relative flex-auto pl-0 pr-0 pt-5 pb-20 lg:pt-0 lg:pb-0'>
                {render}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ToolTipCustom.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  component: PropTypes.node,
  disabled: PropTypes.bool,
  width: PropTypes.number,
  render: PropTypes.node,
};

export default ToolTipCustom;
