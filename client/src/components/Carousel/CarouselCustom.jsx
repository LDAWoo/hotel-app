import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Carousel({ slides, component, ...props }) {
  const Component = component;
  return (
    <Swiper {...props} style={{ paddingBottom: "3px" }}>
      {slides &&
        slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {Component && <Component item={slide} {...slide.props} />}
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
