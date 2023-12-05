import React from "react";
import cn from "classnames";
import styles from "./Products.module.sass";
import { Link } from "react-router-dom";
import Icon from "../../../../Icon";
import Product from "../../../../Product";
import Slider from "react-slick";

// data
import { products } from "../../../../../mocks/products";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Products = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-right" size="24" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-left" size="24" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className={styles.products}>
      <div className={styles.head}>
        <div className={cn("title-green", styles.title)}>More like this</div>
        <Link
          className={cn("button-stroke button-small", styles.button)}
          to="/products-dashboard"
        >
          <span>View all</span>
          <Icon name="arrow-right" size="24" />
        </Link>
      </div>
      <div className={styles.wrapper}>
        <Slider className="products-slider" {...settings}>
          {products.map((x, index) => (
            <Product
              className={styles.product}
              item={x}
              key={index}
              withoutСheckbox
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
