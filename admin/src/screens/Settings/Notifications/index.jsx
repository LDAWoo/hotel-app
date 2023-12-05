import React, { useState } from "react";
import cn from "classnames";
import styles from "./Notifications.module.sass";
import Item from "../Item";
import Tooltip from "../../../components/Tooltip";
import Switch from "../../../components/Switch";

const settings = [
  {
    id: 0,
    title: "Product updates and community announcements",
    tooltip: "Small description",
  },
  {
    id: 1,
    title: "Market newsletter",
    tooltip: "Small description",
  },
  {
    id: 2,
    title: "Comments",
    tooltip: "Small description",
  },
  {
    id: 3,
    title: "Purchases",
    tooltip: "Small description",
  },
];

const Notifications = ({ className }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (id) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== id));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, id]);
    }
  };

  return (
    <Item
      className={cn(styles.card, className)}
      title="Notifications"
      classTitle="title-red"
    >
      <div className={styles.list}>
        {settings.map((x, index) => (
          <div className={styles.line} key={index}>
            <div className={styles.title}>
              {x.title}{" "}
              <Tooltip
                className={styles.tooltip}
                title={x.tooltip}
                icon="info"
                place="top"
              />
            </div>
            <Switch
              className={styles.switch}
              value={selectedFilters.includes(x.id)}
              onChange={() => handleChange(x.id)}
            />
          </div>
        ))}
      </div>
    </Item>
  );
};

export default Notifications;
