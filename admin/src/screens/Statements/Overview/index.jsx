import React from "react";
import cn from "classnames";
import styles from "./Overview.module.sass";
import TooltipGlodal from "../../../components/TooltipGlodal";
import Card from "../../../components/Card";
import Icon from "../../../components/Icon";
import Tooltip from "../../../components/Tooltip";

const items = [
  {
    title: "Funds",
    counter: "$128,789",
    icon: "activity",
    color: "#B5E4CA",
    tooltip: "Small description Funds",
  },
  {
    title: "Earning",
    counter: "$128,789",
    icon: "pie-chart",
    color: "#CABDFF",
    tooltip: "Small description Earning",
  },
  {
    title: "Fees",
    counter: "$338.98",
    icon: "donut-chart",
    color: "#B1E5FC",
    tooltip: "Small description Fees",
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
