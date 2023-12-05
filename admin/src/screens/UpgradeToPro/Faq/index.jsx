import React, { useState } from "react";
import cn from "classnames";
import styles from "./Faq.module.sass";
import Item from "./Item";
import Dropdown from "../../../components/Dropdown";

// data
import { items } from "../../../mocks/faq";

const Faq = () => {
  const options = [];
  items.map((x) => options.push(x.title));

  const [category, setCategory] = useState(options[0]);

  return (
    <div className={styles.faq}>
      <h2 className={cn("h3", styles.title)}>Frequently asked questions</h2>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.menu}>
            {items.map((x, index) => (
              <button
                className={cn(styles.button, {
                  [styles.active]: x.title === category,
                })}
                onClick={() => setCategory(x.title)}
                key={index}
              >
                {x.title}
              </button>
            ))}
          </div>
          <Dropdown
            className={styles.dropdown}
            classDropdownHead={styles.dropdownHead}
            value={category}
            setValue={setCategory}
            options={options}
          />
        </div>
        <div className={styles.list}>
          {items
            .find((x) => x.title === category)
            .items.map((x, index) => (
              <Item className={styles.item} item={x} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
