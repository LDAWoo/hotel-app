import React from "react";
import cn from "classnames";
import styles from "./Loader.module.sass";

const Loader = ({ className, white }) => {
  return (
    <div
      className={cn(styles.loader, className, {
        [styles.loaderWhite]: white,
      })}
    ></div>
  );
};

export default Loader;
