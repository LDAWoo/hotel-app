import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Buttons/Button";

function Modals({
  classTitle,
  isOpen,
  onSubmit,
  onClose,
  title,
  body,
  footer,
  disabled,
  iconButton,
  titleButton,
  sizeIcon,
  classIcon,
  small,
  outline,
  isButton,
}) {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return;
  }

  return (
    <>
      <div
        className='
            flex 
            fixed 
            items-center 
            justify-center 
            overflow-x-hidden 
            overflow-y-auto 
            inset-0 
            z-50 
            outline-none
            focus:outline-none
            bg-gray-50/70 
            dark:bg-primary-700/70'
      >
        <div
          className='
                relative 
                w-full 
                md:w-5/6 
                lg:w-[960px] 
                md:my-6
                my-10
                mx-10
                lg:h-auto
                md:h-auto'
        >
          {/* Content */}
          <div
            className={`
                    translate-x-0
                    duration-300
                    h-full
                    
                    ${showModal ? "translate-y-0" : "translate-y-full"}
                    ${showModal ? "opacity-100" : "opacity-0"}
                    `}
          >
            <div
              className='
                            translate
                            h-full
                            lg:h-auto
                            md:h-auto
                            rounded-lg
                            shadow-lg
                            relative
                            flex 
                            flex-col
                            outline-none
                            focus:outline-none
                            border-[2px]
                          border-gray-200
                          dark:border-primary-600 
                            bg-white
                            dark:bg-primary-600
                        '
            >
              {/* Header */}
              <div
                className={`
                            flex
                            items-center
                            p-6
                            rounded-t
                            justify-start
                            relative
                            border-b-[1px]
                            dark:border-primary-100
                            ${classTitle}
                            `}
              >
                <button
                  onClick={handleClose}
                  className='
                                p-1
                                border-0
                                hover:opacity-70
                                transition
                                absolute
                                right-5
                                rounded-full
                                bg-gray-200
                                dark:bg-primary-400
                                text-hotel-50
                                '
                >
                  <IoMdClose size={24} />
                </button>
                <div className='text-lg font-medium dark:text-white'>
                  {title}
                </div>
              </div>
              {/* Body */}
              <div className='relative p-6 flex-auto'>{body}</div>
              {/* Footer */}
              <div className={`${footer && "flex flex-col gap-2 p-6"}`}>
                {footer}
                {isButton && (
                  <div
                    className='
                                flex
                                flex-row
                                items-center
                                gap-4
                                w-full
                                '
                  >
                    <Button
                      small={small}
                      outline={outline}
                      icon={iconButton}
                      classIcon={classIcon}
                      title={titleButton}
                      disabled={disabled}
                      classTitle={classTitle}
                      size={sizeIcon}
                      onClick={handleSubmit}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Modals.propTypes = {
  classTitle: PropTypes.string,
  isOpen: PropTypes.bool,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  title: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
  actionsLabel: PropTypes.string,
  disabled: PropTypes.bool,
  iconButton: PropTypes.node,
  titleButton: PropTypes.string,
  sizeIcon: PropTypes.number,
  classIcon: PropTypes.string,
  small: PropTypes.string,
  outline: PropTypes.string,
  isButton: PropTypes.bool,
};

export default Modals;
