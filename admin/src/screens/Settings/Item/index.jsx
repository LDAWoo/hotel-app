import React from "react";
import cn from "classnames";
import styles from "./Item.module.sass";

const Item = ({ className, classTitle, title, children }) => {
  return (
    <div className={cn(styles.item, className)}>
      <div className={cn(classTitle, styles.title)}>{title}</div>
      {children}
    </div>
  );
};

export default Item;
