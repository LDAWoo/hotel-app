import React from "react";
import cn from "classnames";
import styles from "./Payment.module.sass";
import Item from "../Item";
import Tooltip from "../../../components/Tooltip";

const Payment = ({ className }) => {
  return (
    <Item
      className={cn(styles.card, className)}
      title="Payment"
      classTitle="title-green"
    >
      <div className={styles.line}>
        <div className={styles.title}>
          Paypal{" "}
          <Tooltip
            className={styles.tooltip}
            title="Small description"
            icon="info"
            place="top"
          />
        </div>
        <button className={cn("button-stroke button-small", styles.button)}>
          Update
        </button>
      </div>
      <div className={styles.email}>tam@ui8.net</div>
      <div className={styles.content}>
        Payout fee is 1% of the amount transferred, with a minimum of USD $0.25
        and a maximum of USD $20
      </div>
    </Item>
  );
};

export default Payment;
