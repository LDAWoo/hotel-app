import React, { useState } from "react";
import styles from "./Control.module.sass";
import cn from "classnames";
import Icon from "../../../Icon";
import Modal from "../../../Modal";
import Schedule from "../../../Schedule";

const Control = ({
  className,
  startDate,
  setStartDate,
  startTime,
  setStartTime,
}) => {
  const [visibleModal, setVisibleModal] = useState(false);

  const actions = [
    {
      icon: "calendar",
      action: () => setVisibleModal(true),
    },
    {
      icon: "edit",
      action: () => console.log("edit"),
    },
    {
      icon: "trash",
      action: () => console.log("delete"),
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
      <Modal visible={visibleModal} onClose={() => setVisibleModal(false)}>
        <Schedule
          startDate={startDate}
          setStartDate={setStartDate}
          startTime={startTime}
          setStartTime={setStartTime}
        />
      </Modal>
    </>
  );
};

export default Control;
