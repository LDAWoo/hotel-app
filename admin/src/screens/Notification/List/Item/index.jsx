import React, { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Control from "./Control";

const Item = ({ className, item }) => {
  const [visible, setVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState("");

  return (
    <div className={cn(styles.item, { [styles.new]: item.new }, className)}>
      <div className={styles.avatar}>
        <img src={item.avatar} alt="Avatar" />
        <div className={styles.icon} style={{ backgroundColor: item.color }}>
          <img src={item.icon} alt="Status" />
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.line}>
          <div className={styles.subtitle}>{item.title}</div>
          <div className={styles.login}>{item.login}</div>
          <div className={styles.time}>{item.time}</div>
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: item.content }}
        ></div>
        <div className={styles.comment}>“{item.comment}”</div>
        <Control
          className={styles.control}
          value={visible}
          setValue={setVisible}
          valueAnswer={currentValue}
          setValueAnswer={setCurrentValue}
        />
      </div>
    </div>
  );
};

export default Item;
