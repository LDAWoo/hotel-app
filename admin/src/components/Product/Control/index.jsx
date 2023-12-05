import React, { useState } from "react";
import styles from "./Control.module.sass";
import cn from "classnames";
import Icon from "../../Icon";
import ModalProduct from "../../ModalProduct";

const Control = ({ className }) => {
  const [visibleModalProduct, setVisibleModalProduct] = useState(false);

  const actions = [
    {
      icon: "edit",
      action: () => console.log("edit"),
    },
    {
      icon: "trash",
      action: () => console.log("remove"),
    },
    {
      icon: "arrow-right",
      action: () => setVisibleModalProduct(true),
    },
  ];

  return (
    <>
      <div className={cn(styles.control, className)}>
        {actions.map((x, index) => (
          <button className={styles.button} key={index} onClick={x.action}>
            <Icon name={x.icon} size="20" />
          </button>
        ))}
      </div>
      <ModalProduct
        visible={visibleModalProduct}
        onClose={() => setVisibleModalProduct(false)}
      />
    </>
  );
};

export default Control;
