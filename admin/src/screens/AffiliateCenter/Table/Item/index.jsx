import React from "react";
import styles from "./Item.module.sass";
import cn from "classnames";
import Balance from "../../../../components/Balance";

import { progress } from "../../../../utils.js";

const Item = ({ className, item, color }) => {
  return (
    <div className={cn(styles.item, className)}>
      <div className={styles.box}>
        <div className={styles.counter}>{item.counter}</div>
        <div className={styles.line}>
          <div
            className={styles.progress}
            style={{
              backgroundColor: color,
              width: progress(),
            }}
          ></div>
        </div>
      </div>
      {item.value && <Balance className={styles.balance} value={item.value} />}
    </div>
  );
};

export default Item;
