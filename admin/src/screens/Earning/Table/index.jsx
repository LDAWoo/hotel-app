import React from "react";
import styles from "./Table.module.sass";
import cn from "classnames";
import { numberWithCommas } from "../../../utils.js";

const items = [
  {
    date: "Fri, Apr 9",
    status: false,
    sales: 28,
    earnings: 3140,
  },
  {
    date: "Sat, Apr 10",
    status: true,
    sales: 24,
    earnings: 2568,
  },
  {
    date: "Sun, Apr 11",
    status: false,
    sales: 16,
    earnings: 1375.88,
  },
  {
    date: "Mon, Apr 12",
    status: true,
    sales: 48,
    earnings: 4955.86,
  },
  {
    date: "Tue, Apr 13",
    status: true,
    sales: 32,
    earnings: 2233.44,
  },
  {
    date: "Wed, Apr 14",
    status: false,
    sales: 64,
    earnings: 6140,
  },
  {
    date: "Thu, Apr 15",
    status: true,
    sales: 8,
    earnings: 789.32,
  },
];

const Table = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.col}>Date</div>
          <div className={styles.col}>Status</div>
          <div className={styles.col}>Product sales count</div>
          <div className={styles.col}>Earnings</div>
        </div>
        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>{x.date}</div>
            <div className={styles.col}>
              {x.status ? (
                <div
                  className={cn(
                    { "status-green-dark": x.status === true },
                    styles.status
                  )}
                >
                  Paid
                </div>
              ) : (
                <div
                  className={cn(
                    { "status-yellow": x.status === false },
                    styles.status
                  )}
                >
                  Pending
                </div>
              )}
            </div>
            <div className={styles.col}>{x.sales}</div>
            <div className={styles.col}>
              ${numberWithCommas(x.earnings.toFixed(2))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
