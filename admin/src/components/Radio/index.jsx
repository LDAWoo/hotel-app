import React from "react";
import cn from "classnames";
import styles from "./Radio.module.sass";

const Radio = ({ className, content, name, value, onChange }) => {
  return (
    <label className={cn(styles.radio, className)}>
      <input
        className={styles.input}
        type="radio"
        name={name}
        onChange={onChange}
        checked={value}
      />
      <span className={styles.inner}>
        <span
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: content }}
        ></span>
        <span className={styles.tick}></span>
      </span>
    </label>
  );
};

export default Radio;
