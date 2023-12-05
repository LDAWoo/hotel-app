import React from "react";
import styles from "./Success.module.sass";
import cn from "classnames";

const Success = () => {
  return (
    <div className={styles.success}>
      <div className={styles.icon}>
        <span role="img" aria-label="firework">
          🎉
        </span>
      </div>
      <div className={styles.info}>Success!</div>
      <div className={cn("h2", styles.price)}>$128,000</div>
      <div className={styles.text}>
        Has been sent to your <span>Paypal: tam@ui8.net</span>
      </div>
      <button className={cn("button", styles.button)}>Done!</button>
    </div>
  );
};

export default Success;
