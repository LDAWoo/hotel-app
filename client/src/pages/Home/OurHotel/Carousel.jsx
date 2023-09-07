import PropTypes from "prop-types";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Arrow from "../../../components/Arrow/Arrow";

function Carousel({ visible, children }) {
  const [current, setCurrent] = useState(0);

  const handleClickPrev = () => {
    setCurrent((curr) => (curr === 0 ? 0 : curr - 1));
  };

  const handleClickNext = () => {
    setCurrent((curr) =>
      curr === children?.length - 1 ? children?.length - 1 : curr + 1,
    );
  };

  const numDisplayedItems = 5;
  const halfDisplayedItems = Math.floor(numDisplayedItems / 2);

  let startDisplayIndex = Math.max(0, current - halfDisplayedItems);
  let endDisplayIndex = Math.min(
    children.length - 1,
    current + halfDisplayedItems,
  );

  if (startDisplayIndex === 0) {
    endDisplayIndex = Math.min(
      children.length - 1,
      startDisplayIndex + numDisplayedItems - 1,
    );
  } else if (endDisplayIndex === children.length - 1) {
    startDisplayIndex = Math.max(0, endDisplayIndex - numDisplayedItems + 1);
  }

  const displayedIndices = Array.from(
    { length: endDisplayIndex - startDisplayIndex + 1 },
    (_, index) => startDisplayIndex + index,
  );

  return (
    <div className='overflow-hidden relative rounded-tl-lg rounded-tr-lg '>
      <div
        className='flex transition-transform  ease-out duration-500'
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children}
      </div>
      {visible && (
        <>
          {current > 0 && (
            <Arrow
              icon={MdKeyboardArrowLeft}
              size={30}
              width='w-[30px]'
              height='h-[30px]'
              left='left-2'
              top='top-[42%]'
              onClick={handleClickPrev}
            />
          )}
          {current < children.length - 1 && (
            <Arrow
              icon={MdKeyboardArrowRight}
              size={30}
              width='w-[30px]'
              height='h-[30px]'
              right='right-2'
              top='top-[42%]'
              onClick={handleClickNext}
            />
          )}
        </>
      )}
      <div className='absolute flex left-[44%] bottom-2 gap-1'>
        {displayedIndices.map((index) => (
          <div
            key={index}
            className={`w-[6px] h-[6px] bg-white dark:bg-primary-700 rounded-full opacity-transition ${
              current === index ? "opacity-100" : "opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.array,
};
export default Carousel;
