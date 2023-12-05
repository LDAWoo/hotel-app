import React, { useState } from "react";
import cn from "classnames";
import styles from "./Refunds.module.sass";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import Row from "./Row";

// data
import { refunds } from "../../mocks/refunds";

const navigation = ["Open requests", "Closed requests"];

const Refunds = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Card
      className={styles.card}
      classCardHead={styles.head}
      title="Refund requests"
      classTitle={cn("title-purple", styles.title)}
      head={
        <div className={styles.nav}>
          {navigation.map((x, index) => (
            <button
              className={cn(styles.button, {
                [styles.active]: index === activeIndex,
              })}
              onClick={() => setActiveIndex(index)}
              key={index}
            >
              {x}
            </button>
          ))}
        </div>
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.col}>Product</div>
            <div className={styles.col}>Status</div>
            <div className={styles.col}>Date</div>
            <div className={styles.col}>Customer</div>
          </div>
          {refunds.map((x, index) => (
            <Row item={x} key={index} />
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

export default Refunds;
