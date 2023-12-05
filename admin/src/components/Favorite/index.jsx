import React, { useState } from "react";
import cn from "classnames";
import styles from "./Favorite.module.sass";
import Icon from "../Icon";

const Favorite = ({ className, size }) => {
  const [visible, setVisible] = useState(false);
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.active]: visible,
        },
        className
      )}
      onClick={() => setVisible(!visible)}
    >
      <Icon name="heart" size={size ? size : "20"} />
      <Icon name="heart-fill" size={size ? size : "20"} />
    </button>
  );
};

export default Favorite;
