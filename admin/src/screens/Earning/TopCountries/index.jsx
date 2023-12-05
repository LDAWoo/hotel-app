import React from "react";
import styles from "./TopCountries.module.sass";
import cn from "classnames";
import Card from "../../../components/Card";

const countries = [
  {
    title: "United States",
    flag: "🇺🇸",
    price: 876.77,
  },
  {
    title: "Germany",
    flag: "🇩🇪",
    price: 128.77,
  },
  {
    title: "Netherlands",
    flag: "🇳🇱",
    price: 124.77,
  },
  {
    title: "United Kingdom",
    flag: "🇬🇧",
    price: 82.36,
  },
  {
    title: "Italy",
    flag: "🇮🇹",
    price: 32,
  },
  {
    title: "Vietnam",
    flag: "🇻🇳",
    price: 41.89,
  },
];

const TopCountries = ({ className }) => {
  return (
    <Card
      className={cn(styles.card, className)}
      title="Top countries"
      classTitle="title-blue"
    >
      <div className={styles.countries}>
        {countries.map((x, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.flag}>
              <span role="img" aria-label={x.title}>
                {x.flag}
              </span>
            </div>
            <div className={styles.title}>{x.title}</div>
            <div className={styles.price}>${x.price.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TopCountries;
