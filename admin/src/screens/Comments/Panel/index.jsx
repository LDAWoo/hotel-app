import React from "react";
import cn from "classnames";
import styles from "./Panel.module.sass";
import Icon from "../../../components/Icon";

const Panel = () => {
  return (
    <div className={cn("panel", styles.panel)}>
      <div className={styles.info}>
        <Icon name="check-all" size="24" />2 products selected
      </div>
      <button className={cn("button-stroke-red", styles.button)}>
        <span>Deleted</span>
        <Icon name="trash" size="24" />
      </button>
    </div>
  );
};

export default Panel;
