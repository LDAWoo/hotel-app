import React, { useState } from "react";
import cn from "classnames";
import styles from "./Snapshot.module.sass";
import Item from "./Item";
import Card from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";
import Chart from "./Chart";

const intervals = ["Last 7 days", "This month", "All time"];

const nav = [
  {
    title: "Clicks",
    counter: "411",
    icon: "mouse",
    color: "#B1E5FC",
    value: -37.8,
  },
  {
    title: "Payouts",
    counter: "$89",
    icon: "activity",
    color: "#CABDFF",
    value: 37.8,
  },
];

const Snapshot = ({ className }) => {
  const [sorting, setSorting] = useState(intervals[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Card
      className={cn(styles.card, className)}
      title="Snapshot"
      classTitle="title-red"
      head={
        <Dropdown
          className={styles.dropdown}
          classDropdownHead={styles.dropdownHead}
          value={sorting}
          setValue={setSorting}
          options={intervals}
          small
        />
      }
    >
      <div className={styles.overview}>
        <div className={styles.nav}>
          {nav.map((x, index) => (
            <Item
              className={cn(styles.item, {
                [styles.active]: index === activeIndex,
              })}
              key={index}
              onActive={() => setActiveIndex(index)}
              item={x}
            />
          ))}
        </div>
        <div className={styles.body}>
          {activeIndex === 0 && <Chart />}
          {activeIndex === 1 && <Chart />}
        </div>
      </div>
    </Card>
  );
};

export default Snapshot;
