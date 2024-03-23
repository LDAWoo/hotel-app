import PropTypes from "prop-types";
import { useCallback, useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Buttons/Button";
import Icon from "../Icon/Icon";
import Title from "../Title/Title";

function Modals({
  className,
  classModalWidth,
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
  hAuto = false,
}) {
  const modalRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const handleMouseDown = (event) => {
      if (!modalRef.current) {
        return;
      }

      if (!modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

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
            overflow-y-hidden 
            inset-0 
            z-50 
            outline-none
            focus:outline-none
            bg-primary-700/50 
            '
      >
        <div
          className={`
                relative 
                my-10
                mx-10
                h-auto
                ${hAuto ? "h-auto" : "h-[calc(100%_-_80px)]"}
                ${classModalWidth ? classModalWidth : "w-full md:w-5/6 lg:w-[960px]"}
                `}
          ref={modalRef}
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
              className={`
                            translate
                            lg:h-auto
                            h-full
                            rounded-sm
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
                        ${className}`}
            >
              {/* Header */}
              <div
                className={`
                            flex
                            items-center
                            p-4
                            rounded-sm
                            justify-start
                            relative
                            dark:border-primary-100
                            ${classTitle}
                            `}
              >
                <Title
                  title={title}
                  colorTitle='dark:text-white flex-1'
                  xxl
                  fontBold
                  nowrap={false}
                />

                <button
                  onClick={handleClose}
                  className='
                                p-[6px]
                                border-0
                                transition
                                dark:text-white
                                hover:bg-gray-100
                                dark:hover:bg-primary-500
                                '
                >
                  <Icon icon={IoMdClose} size={24} />
                </button>
              </div>
              {/* Body */}
              <div className='relative pt-2 pb-2 pr-4 pl-4 flex-auto overflow-y-auto h-full'>
                {body}
              </div>
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
  className: PropTypes.string,
  classModalWidth: PropTypes.string,
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
  hAuto: PropTypes.bool,
};

export default Modals;
