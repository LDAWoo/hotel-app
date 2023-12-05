import React, { useState } from "react";
import styles from "./Row.module.sass";
import cn from "classnames";
import Checkbox from "../../../../components/Checkbox";
import Icon from "../../../../components/Icon.jsx";
import Balance from "../../../../components/Balance";
import ModalProduct from "../../../../components/ModalProduct";

import { numberWithCommas } from "../../../../utils.js";

const Row = ({ item, value, onChange }) => {
  const [visibleModalProduct, setVisibleModalProduct] = useState(false);

  return (
    <>
      <div className={styles.row}>
        <div className={styles.col}>
          <Checkbox className={styles.checkbox} value={value} onChange={onChange} />
        </div>
        <div className={styles.col}>
          <div className={styles.item} onClick={() => setVisibleModalProduct(true)}>
            <div className={styles.preview}>
              <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Product" />
            </div>
            <div className={styles.details}>
              <div className={styles.product}>{item.product}</div>
              <div className={styles.wrap}>
                <div className={styles.price}>${item.price}</div>
                <div className={styles.category}>{item.category}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.col}>${item.price}</div>
        <div className={styles.col}>
          <div className={styles.label}>Status</div>
          {item.status ? <div className={cn("status-green", styles.status)}>Active</div> : <div className={cn("status-red", styles.status)}>Deactive</div>}
        </div>
        <div className={styles.col}>
          <div className={styles.label}>Rating</div>
          {item.ratingValue ? (
            <div className={styles.rating}>
              <Icon name="star-fill" size="24" />
              {item.ratingValue} <span className={styles.counter}>({item.ratingCounter})</span>
            </div>
          ) : (
            <div className={cn(styles.rating, styles.ratingEmpty)}>
              <Icon name="star-stroke" size="24" />
              No ratings
            </div>
          )}
        </div>
        <div className={styles.col}>
          <div className={styles.label}>Sales</div>
          <div className={styles.sales}>
            <div className={styles.number}>${numberWithCommas(item.sales)}</div>
            <Balance className={styles.balance} value={item.balance} />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.label}>Views</div>
          <div className={styles.box}>
            <div className={styles.number}>{(item.views / 1000).toFixed(0)}k</div>
            <div className={styles.line}>
              <div
                className={styles.progress}
                style={{
                  backgroundColor: "#2A85FF",
                  width: item.viewsPercent,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <ModalProduct visible={visibleModalProduct} onClose={() => setVisibleModalProduct(false)} />
    </>
  );
};

export default Row;
