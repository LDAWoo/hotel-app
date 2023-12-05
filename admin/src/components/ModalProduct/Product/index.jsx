import React, { useState } from "react";
import styles from "./Product.module.sass";
import cn from "classnames";
import Details from "./Details";
import Comments from "./Comments";
import Panel from "./Panel";
import Icon from "../../Icon";

const Product = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClose = () => {
    setActiveIndex(0);
    setVisible(false);
  };

  return (
    <div className={cn(styles.product, { [styles.active]: visible })}>
      <Details
        className={styles.details}
        setValue={setVisible}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <Comments className={styles.comments} onClose={() => handleClose()} />
      <Panel className={styles.panel} />
      <button className={styles.next}>
        <Icon name="arrow-right" size="24" />
      </button>
    </div>
  );
};

export default Product;
