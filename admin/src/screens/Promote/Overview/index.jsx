import React, { useState } from "react";
import cn from "classnames";
import styles from "./Overview.module.sass";
import TooltipGlodal from "../../../components/TooltipGlodal";
import Card from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";
import Icon from "../../../components/Icon";
import Tooltip from "../../../components/Tooltip";
import Balance from "../../../components/Balance";

const intervals = ["Last 7 days", "This month", "All time"];

const items = [
  {
    title: "People reached",
    counter: "256k",
    icon: "profile-circle",
    color: "#B5E4CA",
    tooltip: "Small description People reached",
    value: 37.8,
  },
  {
    title: "Engagement",
    counter: "1.2x",
    icon: "arrows-up-down",
    color: "#CABDFF",
    tooltip: "Small description Engagement",
    value: -17.8,
  },
  {
    title: "Comments",
    counter: "128",
    icon: "messages",
    color: "#FFBC99",
    tooltip: "Small description Comments",
    value: 24.3,
  },
  {
    title: "Link clicks",
    counter: "80",
    icon: "mouse",
    color: "#B1E5FC",
    tooltip: "Small description Link clicks",
    value: -11.3,
  },
];

const Overview = ({ className }) => {
  const [sorting, setSorting] = useState(intervals[0]);

  return (
    <>
      <Card
        className={cn(styles.card, className)}
        title="Insights"
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
          <div className={styles.list}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.icon}
                  style={{ backgroundColor: x.color }}
                >
                  <Icon name={x.icon} size="24" />
                </div>
                <div className={styles.details}>
                  <div className={styles.label}>
                    {x.title}
                    <Tooltip
                      className={styles.tooltip}
                      title={x.tooltip}
                      icon="info"
                      place="top"
                    />
                  </div>
                  <div className={styles.counter}>{x.counter}</div>
                  <div className={styles.indicator}>
                    <Balance className={styles.balance} value={x.value} />
                    <span>this week</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
      <TooltipGlodal />
    </>
  );
};

export default Overview;
