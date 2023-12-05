import React, { useState } from "react";
import cn from "classnames";
import styles from "./ExploreCreators.module.sass";
import Dropdown from "../../components/Dropdown";
import Loader from "../../components/Loader";
import Creator from "./Creator";

// data
import { creators } from "../../mocks/creators";

const navigation = ["Popular", "Trending"];
const options = ["Best sellers", "New sellers"];

const ExploreCreators = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sorting, setSorting] = useState(options[0]);

  return (
    <div className={styles.creators}>
      <div className={styles.head}>
        <div className={styles.nav}>
          {navigation.map((x, index) => (
            <button
              className={cn(styles.link, {
                [styles.active]: index === activeIndex,
              })}
              onClick={() => setActiveIndex(index)}
              key={index}
            >
              {x}
            </button>
          ))}
        </div>
        <Dropdown
          className={styles.dropdown}
          classDropdownHead={styles.dropdownHead}
          value={sorting}
          setValue={setSorting}
          options={options}
          small
        />
      </div>
      <div className={styles.info}>
        Viewing 5 of 5,000+ creators in the market
      </div>
      <div className={styles.list}>
        {creators.map((x, index) => (
          <Creator
            className={styles.creator}
            item={x}
            index={index}
            key={index}
          />
        ))}
      </div>
      <div className={styles.foot}>
        <button className={cn("button-stroke button-small", styles.button)}>
          <Loader className={styles.loader} />
          <span>Load more</span>
        </button>
      </div>
    </div>
  );
};

export default ExploreCreators;
