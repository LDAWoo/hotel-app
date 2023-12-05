import React from "react";
import styles from "./Table.module.sass";
import Item from "./Item";
import Tooltip from "../../../components/Tooltip";

const items = [
  {
    date: "Oct 19, 2021",
    impressions: {
      counter: 263,
      value: 37.8,
    },
    clicks: {
      counter: 72,
      value: 25.8,
    },
    total: 0,
    epc: 0,
  },
  {
    date: "Oct 21, 2021",
    impressions: {
      counter: 20,
      value: 24.8,
    },
    clicks: {
      counter: 4,
      value: -33.3,
    },
    total: 18,
    epc: 0.06,
  },
  {
    date: "Oct 22, 2021",
    impressions: {
      counter: 252,
      value: -14.3,
    },
    clicks: {
      counter: 8,
      value: -9.8,
    },
    total: 24,
    epc: 0.06,
  },
  {
    date: "Oct 24, 2021",
    impressions: {
      counter: 55,
      value: 3.5,
    },
    clicks: {
      counter: 10,
      value: 12.4,
    },
    total: 133,
    epc: 0.24,
  },
  {
    date: "Oct 27, 2021",
    impressions: {
      counter: 123,
      value: 37.8,
    },
    clicks: {
      counter: 45,
      value: 25.8,
    },
    total: 0,
    epc: 0,
  },
  {
    date: "Oct 30, 2021",
    impressions: {
      counter: 22,
      value: 24.8,
    },
    clicks: {
      counter: 14,
      value: -33.3,
    },
    total: 18,
    epc: 0.06,
  },
];

const Table = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.col}>Date</div>
          <div className={styles.col}>
            Impressions
            <Tooltip
              className={styles.tooltip}
              title="Small description impressions"
              icon="info"
              place="top"
            />
          </div>
          <div className={styles.col}>
            Clicks
            <Tooltip
              className={styles.tooltip}
              title="Small description clicks"
              icon="info"
              place="top"
            />
          </div>
          <div className={styles.col}>Total earnings</div>
          <div className={styles.col}>
            EPC
            <Tooltip
              className={styles.tooltip}
              title="Small description EPC"
              icon="info"
              place="top"
            />
          </div>
        </div>
        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>{x.date}</div>
            <div className={styles.col}>
              <Item
                className={styles.item}
                item={x.impressions}
                color="#2A85FF"
              />
            </div>
            <div className={styles.col}>
              <Item className={styles.item} item={x.clicks} color="#8E59FF" />
            </div>
            <div className={styles.col}>${x.total.toFixed(2)}</div>
            <div className={styles.col}>${x.epc.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
