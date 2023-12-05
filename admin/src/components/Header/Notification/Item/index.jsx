import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Item.module.sass";

const Item = ({ className, item, onClose }) => {
  return (
    <Link
      className={cn(styles.item, { [styles.new]: item.new }, className)}
      to={item.url}
      onClick={onClose}
    >
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
      </div>
    </Link>
  );
};

export default Item;
