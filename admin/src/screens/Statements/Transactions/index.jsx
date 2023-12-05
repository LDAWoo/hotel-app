import React, { useState } from "react";
import styles from "./Transactions.module.sass";
import cn from "classnames";
import { numberWithCommas } from "../../../utils.js";
import Card from "../../../components/Card/index.jsx";
import Dropdown from "../../../components/Dropdown/index.jsx";
import Loader from "../../../components/Loader/index.jsx";

// date
import { transactions } from "../../../mocks/transactions.js";

const intervals = ["Last 30 days", "Last 20 days", "Last 10 days"];

const Transactions = ({ className }) => {
  const [sorting, setSorting] = useState(intervals[0]);

  return (
    <Card
      className={cn(styles.card, className)}
      classCardHead={styles.head}
      title="Transactions"
      classTitle={cn("title-blue", styles.title)}
      head={
        <>
          <Dropdown className={styles.dropdown} classDropdownHead={styles.dropdownHead} value={sorting} setValue={setSorting} options={intervals} small />
          <button className={cn("button-small", styles.button)}>Download SCV</button>
        </>
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.col}>Date</div>
            <div className={styles.col}>Type</div>
            <div className={styles.col}>Detail</div>
            <div className={styles.col}>Price</div>
            <div className={styles.col}>Amount</div>
          </div>
          {transactions.map((x, index) => (
            <div className={styles.row} key={index}>
              <div className={styles.col}>
                <div className={styles.label}>Date</div>
                {x.date}
              </div>
              <div className={styles.col}>
                <div className={styles.details}>
                  <div className={styles.product}>{x.product}</div>
                  <div className={styles.invoice}>{x.invoice}</div>
                </div>
                {x.status ? <div className={cn({ "status-green-dark": x.status === true }, styles.status)}>Sale</div> : <div className={cn({ "status-red-dark": x.status === false }, styles.status)}>Author fee</div>}
              </div>
              <div className={styles.col}>
                <div className={styles.product}>{x.product}</div>
                <div className={styles.invoice}>{x.invoice}</div>
              </div>
              <div className={styles.col}>
                <div className={styles.label}>Price</div>${numberWithCommas(x.price.toFixed(2))}
              </div>
              <div className={styles.col}>
                <div className={styles.label}>Amount</div>
                {x.earnings > 0 ? <div>+${numberWithCommas(x.earnings.toFixed(2))}</div> : <div className={styles.negative}>-${(numberWithCommas(x.earnings) * -1).toFixed(2)}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.foot}>
        <button className={cn("button-stroke button-small", styles.button)}>
          <Loader className={styles.loader} />
          <span>Load more</span>
        </button>
      </div>
    </Card>
  );
};

export default Transactions;
