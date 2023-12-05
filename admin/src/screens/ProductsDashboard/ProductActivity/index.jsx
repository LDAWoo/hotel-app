import React, { useState } from "react";
import styles from "./ProductActivity.module.sass";
import cn from "classnames";
import Card from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";
import Item from "./Item";

const items = [
  {
    title: "25 Sep - 1 Oct",
    products: {
      counter: 8,
      color: "#B5E4CA",
      value: 37.8,
    },
    views: {
      counter: "24k",
      color: "#CABDFF",
      value: 37.8,
    },
    likes: {
      counter: 48,
      color: "#B1E5FC",
      value: -37.8,
    },
    comments: {
      counter: 16,
      color: "#FFD88D",
      value: -56,
    },
  },
  {
    title: "18 Sep - 24 Oct",
    products: {
      counter: 8,
      color: "#EFEFEF",
      value: 37.8,
    },
    views: {
      counter: "24k",
      color: "#EFEFEF",
      value: -37.8,
    },
    likes: {
      counter: 48,
      color: "#EFEFEF",
      value: 12.8,
    },
    comments: {
      counter: 16,
      color: "#EFEFEF",
      value: -14.1,
    },
  },
];

const ProductActivity = () => {
  const intervals = ["Last 2 weeks", "Last 7 days"];

  const [activeTab, setActiveTab] = useState(intervals[0]);

  return (
    <Card
      className={styles.card}
      title="Product activity"
      classTitle="title-green"
      head={
        <Dropdown
          className={cn(styles.dropdown, "mobile-hide")}
          classDropdownHead={styles.dropdownHead}
          value={activeTab}
          setValue={setActiveTab}
          options={intervals}
          small
        />
      }
    >
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.col}>Week</div>
          <div className={styles.col}>Products</div>
          <div className={styles.col}>Views</div>
          <div className={styles.col}>Likes</div>
          <div className={styles.col}>Comments</div>
        </div>
        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>
              <div className={styles.label}>Week</div>
              {x.title}
            </div>
            <div className={styles.col}>
              <div className={styles.label}>Products</div>
              <Item className={styles.item} item={x.products} />
            </div>
            <div className={styles.col}>
              <div className={styles.label}>Views</div>
              <Item className={styles.item} item={x.views} />
            </div>
            <div className={styles.col}>
              <div className={styles.label}>Likes</div>
              <Item className={styles.item} item={x.likes} />
            </div>
            <div className={styles.col}>
              <div className={styles.label}>Comments</div>
              <Item className={styles.item} item={x.comments} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.nav}>
        {intervals.map((x, index) => (
          <button
            className={cn(styles.link, {
              [styles.active]: x === activeTab,
            })}
            onClick={() => setActiveTab(x)}
            key={index}
          >
            {x}
          </button>
        ))}
      </div>
    </Card>
  );
};

export default ProductActivity;
