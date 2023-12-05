import React, { useState } from "react";
import styles from "./Table.module.sass";
import cn from "classnames";
import Checkbox from "../../../../components/Checkbox";
import Row from "./Row";

const Table = ({ items, legend, title }) => {
  const [chooseAll, setСhooseAll] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (id) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== id));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, id]);
    }
  };

  return (
    <div className={styles.market}>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Checkbox
              className={styles.checkbox}
              value={chooseAll}
              onChange={() => setСhooseAll(!chooseAll)}
            />
          </div>
          <div className={styles.col}>Product</div>
          <div className={styles.col}>
            <div className={styles.line}>
              <div className={styles.info}>{title}</div>
              <div className={styles.indicators}>
                {legend.map((x, index) => (
                  <div className={styles.legend} key={index}>
                    <div
                      className={styles.color}
                      style={{ backgroundColor: x.color }}
                    ></div>
                    {x.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {items.map((x, index) => (
          <Row
            item={x}
            key={index}
            up={items.length - index <= 2}
            value={selectedFilters.includes(x.id)}
            onChange={() => handleChange(x.id)}
          />
        ))}
      </div>
      <div className={styles.foot}>
        <button className={cn("button-stroke", styles.button)}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default Table;
