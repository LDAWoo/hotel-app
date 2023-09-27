import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Buttons/Button";
import Title from "../Title/Title";
import Icon from "../Icon/Icon";

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
  hAuto = false,
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
            overflow-y-hidden 
            inset-0 
            z-50 
            outline-none
            focus:outline-none
            bg-primary-700/70 
            '
      >
        <div
          className={`
                relative 
                w-full 
                md:w-5/6 
                lg:w-[960px] 
                my-10
                mx-10
                z-[]
                ${hAuto ? " h-auto" : "h-[calc(100%_-_80px)]"}
                2md:h-auto
                `}
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
                        `}
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
                <Title
                  title={title}
                  colorTitle='dark:text-white flex-1'
                  titleCustom='text-[16px] sm:text-[18px]'
                  fontBold
                  nowrap={false}
                />

                <button
                  onClick={handleClose}
                  className='
                                p-1
                                border-0
                                hover:opacity-70
                                transition
                                rounded-full
                                bg-gray-200
                                dark:bg-primary-400
                                text-hotel-50
                                '
                >
                  <Icon icon={IoMdClose} size={16} />
                </button>
              </div>
              {/* Body */}
              <div className='relative p-6 flex-auto overflow-y-auto h-full'>
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
