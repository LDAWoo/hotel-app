import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
import Arrow from "../Arrow/Arrow";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import useRegisterWindowSizeStore from "../../hooks/useRegisterWindowSizeStore";
import { DeviceContext } from "../Contexts/AppDeviceProvider";

const CarouselCustom = ({ data, size = 3 }) => {
  const maxSize = size;
  const { isMobile } = useContext(DeviceContext);
  const scrollRef = useRef();
  const { width } = useRegisterWindowSizeStore();
  const [isArrowLeftVisible, setIsArrowLeftVisible] = useState(false);
  const [isArrowRightVisible, setIsArrowRightVisible] = useState(
    maxSize < data.length,
  );

  useEffect(() => {
    setIsArrowLeftVisible(false);
    setIsArrowRightVisible(maxSize < data.length);
  }, [data]);

  const handleLeft = useCallback(() => {
    if (scrollRef.current) {
      const count =
        width > 900
          ? maxSize != 3
            ? maxSize - 1.45
            : maxSize + 1
          : width > 640
          ? maxSize != 3
            ? maxSize - 0.5
            : maxSize + 3
          : maxSize != 3
          ? maxSize + 1.5
          : maxSize + 9;
      const container = scrollRef.current;
      const scrollStep =
        container.clientWidth /
        (width > 900 ? maxSize : width > 640 ? maxSize - 1 : maxSize - 2);
      container.scrollLeft -= scrollStep + count;
      if (container.scrollLeft <= scrollStep + count * 2) {
        setIsArrowLeftVisible(false);
      }
      setIsArrowRightVisible(true);
    }
  }, []);

  const handleRight = useCallback(() => {
    if (scrollRef.current) {
      const count =
        width > 900
          ? maxSize != 3
            ? maxSize - 0.35
            : maxSize + 1.85
          : width > 640
          ? maxSize != 3
            ? maxSize + 0.9899
            : maxSize + 4.9899
          : maxSize != 3
          ? maxSize + 2.85
          : maxSize + 9;
      const container = scrollRef.current;
      const scrollStep =
        container.clientWidth /
        (width > 900 ? maxSize : width > 640 ? maxSize - 1 : maxSize - 2);
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

  const dynamicWidth =
    maxSize != 3
      ? width > 900
        ? `calc((100% - 48px)/${maxSize})`
        : width > 640
        ? `calc((100% - 32px)/${maxSize - 1})`
        : `calc((100% - 16px)/${maxSize - 2})`
      : "";
  return (
    <div className='relative w-full h-full'>
      <ul
        ref={scrollRef}
        className='pe-[2px] ps-[2px] scroll-ml-[8px] flex gap-4 flex-nowrap list-none overflow-x-scroll no-scrollbar justify-start box-border scroll-smooth w-full h-full '
        style={{ paddingBlockEnd: "8px", paddingBlockStart: "8px" }}
      >
        {data?.map((item, index) => (
          <li
            key={index}
            className={`w-full ${
              maxSize != 3
                ? ""
                : "min-h-full sm:w-[calc((100%_-_14px)_/_2)] 2md:w-[calc((100%_-_32px)_/_3)]"
            } flex-grow-0 flex-shrink-0 basis-auto box-border whitespace-nowrap list-item`}
            style={{ width: dynamicWidth }}
          >
            {item}
          </li>
        ))}
      </ul>

      {!isMobile && isArrowLeftVisible && (
        <Arrow
          icon={IoIosArrowBack}
          size={24}
          top='top-[50%]'
          left='left-0'
          width='w-[36px]'
          height='h-[36px]'
          className='-translate-y-[50%] translate-x-[20%]'
          onClick={handleLeft}
        />
      )}

      {!isMobile && isArrowRightVisible && (
        <Arrow
          icon={IoIosArrowForward}
          size={24}
          top='top-[50%]'
          right='right-0'
          width='w-[36px]'
          height='h-[36px]'
          className='-translate-y-[50%] -translate-x-[20%]'
          onClick={handleRight}
        />
      )}
    </div>
  );
};
CarouselCustom.propTypes = {
  data: PropTypes.node,
  size: PropTypes.number,
};

export default CarouselCustom;
