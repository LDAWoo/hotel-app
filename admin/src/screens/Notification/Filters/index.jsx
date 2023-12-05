import React, { useState } from "react";
import cn from "classnames";
import styles from "./Filters.module.sass";
import Card from "../../../components/Card";
import Checkbox from "../../../components/Checkbox";
import Radio from "../../../components/Radio";

const Filters = ({
  className,
  filters,
  selectedFilters,
  setSelectedFilters,
}) => {
  const handleChange = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== filter));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, filter]);
    }
  };

  const [users, setUsers] = useState(false);

  return (
    <Card
      className={cn(styles.card, className)}
      title="Filter"
      classTitle="title-purple"
    >
      <div className={cn(styles.filters, className)}>
        <div className={styles.group}>
          {filters.map((x, index) => (
            <Checkbox
              className={styles.checkbox}
              content={x}
              value={selectedFilters.includes(x)}
              onChange={() => handleChange(x)}
              key={index}
              reverse
            />
          ))}
        </div>
        <div className={styles.btns}>
          <button className={cn("button-stroke button-small", styles.button)}>
            Select all
          </button>
          <button className={cn("button-stroke button-small", styles.button)}>
            Unslect all
          </button>
        </div>
        <div className={styles.variants}>
          <Radio
            className={styles.radio}
            name="confirm"
            value={users}
            onChange={() => setUsers(true)}
            content="Everyone"
          />
          <Radio
            className={styles.radio}
            name="confirm"
            value={!users}
            onChange={() => setUsers(false)}
            content="Customers"
          />
        </div>
      </div>
    </Card>
  );
};

export default Filters;
