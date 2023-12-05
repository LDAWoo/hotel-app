import React from "react";
import cn from "classnames";
import styles from "./Overview.module.sass";
import TooltipGlodal from "../../../components/TooltipGlodal";
import Card from "../../../components/Card";
import Icon from "../../../components/Icon";
import Tooltip from "../../../components/Tooltip";
import Balance from "../../../components/Balance";

const items = [
  {
    title: "Earning",
    counter: "$128k",
    icon: "activity",
    color: "#B5E4CA",
    tooltip: "Small description Earning",
    value: 37.8,
  },
  {
    title: "Balance",
    counter: "$512.64",
    icon: "pie-chart",
    color: "#CABDFF",
    tooltip: "Small description Balance",
    value: -17.8,
  },
  {
    title: "Total value of sales",
    counter: "$64k",
    icon: "shopping-bag",
    color: "#B1E5FC",
    tooltip: "Small description Total",
    value: 24.3,
  },
];

const Overview = ({ className }) => {
  return (
    <>
      <Card className={cn(styles.card, className)}>
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
