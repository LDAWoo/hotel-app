import React from "react";
import styles from "./Product.module.sass";
import cn from "classnames";

const Product = ({ item, className }) => {
  return (
    <div className={cn(styles.item, className)}>
      <div className={styles.preview}>
        <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Product" />
      </div>
      <div className={styles.details}>
        <div className={styles.product}>{item.product}</div>
        {item.status ? (
          <div className={styles.new}>New request</div>
        ) : (
          <div className={styles.progress}>In progress</div>
        )}
      </div>
    </div>
  );
};

export default Product;
