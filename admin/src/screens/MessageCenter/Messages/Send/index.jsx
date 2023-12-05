import React from "react";
import cn from "classnames";
import styles from "./Send.module.sass";
import Icon from "../../../../components/Icon";
import Smile from "../../../../components/Smile";

const Send = () => {
  return (
    <div className={styles.send}>
      <div className={styles.file}>
        <input type="file" />
        <Icon name="file-add" size="24" />
      </div>
      <Smile className={styles.smile} up />
      <div className={styles.form}>
        <input className={styles.input} type="text" name="message" placeholder="Message" required onChange={(e) => console.log(e.target.value)} />
        <button className={cn("button-small", styles.button)}>Send</button>
      </div>
    </div>
  );
};

export default Send;
