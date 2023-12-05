import React, { useState } from "react";
import styles from "./Row.module.sass";
import cn from "classnames";
import Checkbox from "../../../../components/Checkbox";
import Control from "./Control";

const Row = ({ item, value, onChange }) => {
  const [visible, setVisible] = useState(false);
  const [visibleSmile, setVisibleSmile] = useState(false);
  const [currentValue, setCurrentValue] = useState("");

  return (
    <div
      className={cn(styles.row, { [styles.active]: visible })}
      onMouseLeave={() => setVisibleSmile(false)}
    >
      <div className={styles.col}>
        <Checkbox
          className={styles.checkbox}
          value={value}
          onChange={onChange}
        />
      </div>
      <div className={styles.col}>
        <div className={styles.box}>
          <div className={styles.avatar}>
            <img src={item.avatar} alt="Avatar" />
          </div>
          <div className={styles.details}>
            <div className={styles.line}>
              <div className={styles.author}>{item.author}</div>
              <div className={styles.time}>{item.time}</div>
            </div>
            <div
              className={styles.comment}
              dangerouslySetInnerHTML={{ __html: item.comment }}
            ></div>
            <Control
              className={styles.control}
              value={visible}
              setValue={setVisible}
              valueAnswer={currentValue}
              setValueAnswer={setCurrentValue}
              visibleSmile={visibleSmile}
              setVisibleSmile={setVisibleSmile}
            />
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.item}>
          <div className={styles.preview}>
            <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Product" />
          </div>
          <div className={styles.details}>
            <div className={styles.product}>{item.product}</div>
            <div className={styles.category}>{item.category}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
