import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";

function Carousel({ slides, component, ...props }) {
  const Component = component;
  const swiperRef = useRef();
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      setHeight(swiper.clientHeight);
    }
  }, [slides]);

  return (
    <Swiper {...props} style={{ padding: '5px' }} ref={swiperRef}>
      {slides &&
        slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {Component && <Component item={slide} height={height} {...slide.props} />}
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
  component: PropTypes.elementType,
};

export default Carousel;
