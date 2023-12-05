import { useState } from "react";
import cn from "classnames";
import styles from "./Creator.module.sass";
import ModalProduct from "../../../components/ModalProduct";

import { numberWithCommas } from "../../../utils.js";

const Creator = ({ className, item, index }) => {
  const [visible, setVisible] = useState(false);
  const [visibleModalProduct, setVisibleModalProduct] = useState(false);

  return (
    <>
      <div className={cn(styles.creator, className)}>
        <div className={styles.head}>
          <div className={styles.user}>
            <div className={styles.avatar}>
              <img src={item.avatar} alt="Avatar" />
            </div>
            <div className={styles.details}>
              <div className={styles.line}>
                <div className={styles.man}>{item.creator}</div>
                {index < 3 && (
                  <div className={styles.number} style={{ backgroundColor: item.colorNumber }}>
                    #{index + 1}
                  </div>
                )}
              </div>
              <div className={styles.parameters}>
                <div className={styles.parameter}>
                  <span>{item.productsCounter}</span> products
                </div>
                <div className={styles.parameter}>
                  <span>{numberWithCommas(item.followers)}</span> followers
                </div>
              </div>
            </div>
          </div>
          <div className={styles.btns}>
            <button
              className={cn("button-stroke", styles.button, {
                [styles.active]: visible,
              })}
              onClick={() => setVisible(!visible)}
            >
              Follow<span>ing</span>
            </button>
            <button className={cn("button", styles.button)}>Shop now</button>
          </div>
        </div>
        <div className={styles.products}>
          {item.products.map((x, index) => (
            <div className={styles.product} key={index} onClick={() => setVisibleModalProduct(true)}>
              <img srcSet={`${x.image2x} 2x`} src={x.image} alt="Product" />
            </div>
          ))}
        </div>
      </div>
      <ModalProduct visible={visibleModalProduct} onClose={() => setVisibleModalProduct(false)} />
    </>
  );
};

export default Creator;
