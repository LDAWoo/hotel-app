import PropTypes from "prop-types";
import { useSwipeable } from "react-swipeable";

function Carousel({ children, current, onSwipedLeft, onSwipedRight }) {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => onSwipedLeft(),
    onSwipedRight: () => onSwipedRight(),
    swipeDuration: 5000,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      className='overflow-hidden relative rounded-tl-lg rounded-tr-lg m-0 p-0 w-full h-full'
      {...swipeHandlers}
    >
      <div
        className='flex transition-transform w-full h-full ease-out duration-500 '
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  current: PropTypes.number,
  children: PropTypes.array,
  onSwipedLeft: PropTypes.func,
  onSwipedRight: PropTypes.func,
};

export default Carousel;
