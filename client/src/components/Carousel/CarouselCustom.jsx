import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
import Arrow from "../Arrow/Arrow";
import { useCallback, useContext, useRef, useState } from "react";
import useRegisterWindowSizeStore from "../../hooks/useRegisterWindowSizeStore";
import { DeviceContext } from "../Contexts/AppDeviceProvider";

const CarouselCustom = ({ data }) => {
  const { isMobile } = useContext(DeviceContext);
  const scrollRef = useRef();
  const { width } = useRegisterWindowSizeStore();
  const [isArrowLeftVisible, setIsArrowLeftVisible] = useState(false);
  const [isArrowRightVisible, setIsArrowRightVisible] = useState(true);

  const handleLeft = useCallback(() => {
    if (scrollRef.current) {
      const count = width > 900 ? 4 : width > 640 ? 7 : 12;
      const container = scrollRef.current;
      const scrollStep =
        container.clientWidth / (width > 900 ? 3 : width > 640 ? 2 : 1);
      container.scrollLeft -= scrollStep + count;
      if (container.scrollLeft <= scrollStep + count * 2) {
        setIsArrowLeftVisible(false);
      }
      setIsArrowRightVisible(true);
    }
  }, []);

  const handleRight = useCallback(() => {
    if (scrollRef.current) {
      const count = width > 900 ? 4.85 : width > 640 ? 7.9899 : 12;
      const container = scrollRef.current;
      const scrollStep =
        container.clientWidth / (width > 900 ? 3 : width > 640 ? 2 : 1);
      const maxScroll = container.scrollWidth - scrollStep;
      container.scrollLeft += scrollStep + count;
      if (
        container.scrollLeft + count >=
        Math.round(maxScroll - container.clientWidth) - count
      ) {
        setIsArrowRightVisible(false);
      }
      setIsArrowLeftVisible(true);
    }
  }, []);

  return (
    <div className='relative w-full h-full'>
      <ul
        ref={scrollRef}
        className='pe-[2px] ps-[2px] scroll-ml-[8px] flex gap-4 flex-nowrap list-none overflow-x-scroll no-scrollbar justify-start box-border scroll-smooth w-full h-full whitespace-nowrap'
      >
        {data?.map((item, index) => (
          <li
            key={index}
            className='w-full min-h-full sm:w-[calc((100%_-_14px)_/_2)] 2md:w-[calc((100%_-_32px)_/_3)] flex-grow-0 flex-shrink-0 basis-auto box-border whitespace-nowrap list-item'
          >
            {item}
          </li>
        ))}
      </ul>

      {!isMobile && isArrowLeftVisible && (
        <Arrow
          icon={IoIosArrowBack}
          top='top-[50%]'
          left='left-0'
          className='-translate-y-[50%] -translate-x-[45%]'
          onClick={handleLeft}
        />
      )}

      {!isMobile && isArrowRightVisible && (
        <Arrow
          icon={IoIosArrowForward}
          top='top-[50%]'
          right='right-0'
          className='-translate-y-[50%] translate-x-[45%]'
          onClick={handleRight}
        />
      )}
    </div>
  );
};
CarouselCustom.propTypes = {
  data: PropTypes.node,
};

export default CarouselCustom;
