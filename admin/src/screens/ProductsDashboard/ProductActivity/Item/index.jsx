import React from "react";
import styles from "./Item.module.sass";
import cn from "classnames";
import Balance from "../../../../components/Balance";

const Item = ({ className, item }) => {
  return (
    <div className={cn(styles.item, className)}>
      <div className={styles.counter} style={{ backgroundColor: item.color }}>
        {item.counter}
      </div>
      {item.value && <Balance className={styles.balance} value={item.value} />}
    </div>
  );
};

export default Item;
