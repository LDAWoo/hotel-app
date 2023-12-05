import React from "react";
import cn from "classnames";
import styles from "./Balance.module.sass";
import Icon from "../Icon";

const Balance = ({ className, value, background }) => {
  return value > 0 ? (
    <div
      className={cn(
        styles.positive,
        { [styles.background]: background },
        className
      )}
    >
      <Icon name="arrow-top" />
      {value}%
    </div>
  ) : (
    <div
      className={cn(
        styles.negative,
        { [styles.background]: background },
        className
      )}
    >
      <Icon name="arrow-bottom" />
      {String(value).slice(1)}%
    </div>
  );
};

export default Balance;
