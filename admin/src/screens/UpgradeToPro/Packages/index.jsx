import React from "react";
import cn from "classnames";
import styles from "./Packages.module.sass";
import Tooltip from "../../../components/Tooltip";

const packages = [
  {
    title: "Lite",
    classTitle: "title-blue",
    recommended: false,
    content: "Basic shop and tools to set up your profile",
    percent: 8,
    note: "of the monthly income you earn on the market",
    tooltip: "Small description Lite",
    classButton: "button-stroke",
    buttonText: "Your plan",
    list: [
      "Basic shop profile",
      "Customer communication tools",
      "100 promotion posts",
      "Maximum 50 product uploads",
    ],
  },
  {
    title: "Pro",
    classTitle: "title-purple",
    recommended: true,
    content:
      'Pro shop and tools to set up your profile <span role="img" aria-label="fire">🔥</span>',
    percent: 12,
    note: "of the monthly income you earn on the market",
    tooltip: "Small description Pro",
    classButton: "button",
    buttonText: "Upgrade now",
    list: [
      "Extended shop profile",
      "Customer communication tools",
      "Unlimited promotion posts",
      "Unlimited product uploads",
      "Special offers promo tool",
      "Analytics and insights",
      "Bulk message to all customers",
    ],
  },
];

const Packages = ({ className }) => {
  return (
    <div className={cn(styles.packages, className)}>
      <div className={styles.list}>
        {packages.map((x, index) => (
          <div className={styles.package} key={index}>
            <div className={styles.top}>
              <div className={cn(x.classTitle, styles.title)}>{x.title}</div>
              {x.recommended && (
                <div className={styles.recommended}>Recommended</div>
              )}
            </div>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: x.content }}
            ></div>
            <div className={styles.line}>
              <div className={cn("h1", styles.percent)}>{x.percent}%</div>
              <div className={styles.note}>{x.note}</div>
              <Tooltip
                className={styles.tooltip}
                title={x.tooltip}
                icon="info"
                place="top"
              />
            </div>
            <ul className={styles.group}>
              {x.list.map((item, index) => (
                <li className={styles.item} key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <button className={cn(x.classButton, styles.button)}>
              {x.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
