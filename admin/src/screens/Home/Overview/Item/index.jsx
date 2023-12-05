import React from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Icon from "../../../../components/Icon";
import Tooltip from "../../../../components/Tooltip";
import Balance from "../../../../components/Balance";

const Item = ({ className, onActive, item }) => {
  return (
    <div className={cn(styles.item, className)} onClick={onActive}>
      <div className={styles.icon} style={{ backgroundColor: item.color }}>
        <Icon name={item.icon} size="24" />
      </div>
      <div className={styles.details}>
        <div className={styles.subtitle}>
          {item.title}
          <Tooltip
            className={styles.tooltip}
            title="Small description"
            icon="info"
            place="top"
          />
        </div>
        <div className={styles.counter}>{item.counter}</div>
      </div>
      <Balance className={styles.balance} value={item.value} background />
    </div>
  );
};

export default Item;
