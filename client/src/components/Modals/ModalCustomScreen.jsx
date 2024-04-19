import PropTypes from "prop-types";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import useRegisterWindowSizeStore from "../../hooks/useRegisterWindowSizeStore";
import Button from "../Buttons/Button";
import { DeviceContext } from "../Contexts/AppDeviceProvider";
import { useTranslation } from "react-i18next";
import useRegisterScrollStore from "../../hooks/useRegisterScrollStore";

const ModalCustomScreen = ({ isOpen, disabled, body,footer, onClose, zIndex }) => {
  const modalsRef = useRef(null);
  const {t} = useTranslation()
  const [showModal, setShowModal] = useState(isOpen);
  const { width } = useRegisterWindowSizeStore();
  const { isMobile } = useContext(DeviceContext);
  const {onVisible,unVisible} = useRegisterScrollStore();

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (!modalsRef.current) {
        return;
      }
      if (!modalsRef.current.contains(event.target)) {
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
    if(isOpen){
      unVisible();
    }else{
      onVisible();
    }
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

  if (!isOpen) {
    return;
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
  overflow-y-hidden
  scroll-smooth
  inset-0
  bg-primary-700/50
  m-0
  ${zIndex}
`}
    >
      <div
        className={`
    relative
    w-full
    my-0
    mx-0
    h-full
    `}
        style={{ width: "100%" }}
      >
        <div
          className={`
      translate-x-0
      duration-300
      sm:duration-1000
      h-full
      relative
      ${
        showModal
          ? width > 640
            ? "translate-x-0"
            : "translate-y-0"
          : width > 640
          ? "translate-x-full opacity-20"
          : "translate-y-full opacity-20"
      }
      `}
        >
          {/* Content */}
          <div className='relative w-full h-full overflow-x-hidden overflow-y-auto'>
            <div className='fixed top-[5%] hidden sm:flex sm:right-[545px] md:right-[655px] 2md:right-[720px] rounded-tl-md rounded-bl-md shadow-[0_0_14px_rgba(10,10,10,0.5)]'>
              <Button
                icon={AiOutlineClose}
                onClick={handleClose}
                className='text-white bg-hotel-200 dark:bg-hotel-300 dark:hover:bg-hotel-600 hover:bg-hotel-300 p-2 rounded-tl-md rounded-bl-md'
                size={24}
              />
            </div>
            <div
              className='absolute w-full top-0 sm:right-0 sm:w-[545px] md:w-[660px] 2md:w-[720px] pb-16 sm:pb-[15px] min-h-full border-box bg-white dark:bg-primary-600 pt-[15px] pl-[25px] pr-[25px] shadow-[0_0_14px_rgba(10,10,10,0.5)]'
              ref={modalsRef}
            >
              {body}
            </div>

            <div
              className={`flex ${
                !isMobile ? "w-[97%]" : "w-full"
              } gap-2 sm:hidden fixed bg-white dark:bg-primary-600 left-0 bottom-0 pb-2 pt-2 pl-3 pr-3 z-[99] border-t dark:border-primary-500`}
            >
              <Button
                title={t("Other.back")}
                border
                onClick={handleClose}
                className='pt-[4px] pb-[4px] text-center justify-center'
                fontMedium
                xl
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalCustomScreen.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  body: PropTypes.node.isRequired,
  footer: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  zIndex: PropTypes.string,
};

export default ModalCustomScreen;
