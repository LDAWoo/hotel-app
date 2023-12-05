import React, { useState } from "react";
import cn from "classnames";
import styles from "./Users.module.sass";
import Icon from "../../../components/Icon";
import Form from "../../../components/Form";
import Item from "./Item";

const Users = ({
  className,
  items,
  navigation,
  setVisible,
  onSubmit,
  search,
  setSearch,
}) => {
  const [activeId, setActiveId] = useState(items[0].id);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn(className, styles.users)}>
      <div className={styles.nav}>
        {navigation.map((x, index) => (
          <button
            className={cn(styles.button, {
              [styles.active]: activeIndex === index,
            })}
            onClick={() => setActiveIndex(index)}
            key={index}
          >
            <Icon name={x.icon} size="24" />
            {x.title}
          </button>
        ))}
      </div>
      <div className={styles.list}>
        {items.map((x, index) => (
          <Item
            item={x}
            activeId={activeId}
            setActiveId={setActiveId}
            setVisible={setVisible}
            key={index}
          />
        ))}
      </div>
      <Form
        className={styles.form}
        value={search}
        setValue={setSearch}
        onSubmit={onSubmit}
        placeholder="Search message"
        type="text"
        name="search"
        icon="search"
      />
    </div>
  );
};

export default Users;
