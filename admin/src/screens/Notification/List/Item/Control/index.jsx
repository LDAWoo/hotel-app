import React, { useState } from "react";
import styles from "./Control.module.sass";
import cn from "classnames";
import Answer from "../../../../../components/Answer";

const Control = ({ className, valueAnswer, setValueAnswer }) => {
  const [visible, setVisible] = useState(false);
  const [like, setLike] = useState(false);

  return (
    <>
      <div
        className={cn(styles.control, className, { [styles.hidden]: visible })}
      >
        <button
          className={cn(styles.button, styles.favorite, {
            [styles.active]: like,
          })}
          onClick={() => setLike(!like)}
        >
          Like<span>d</span>
        </button>
        <button className={styles.button} onClick={() => setVisible(true)}>
          Reply
        </button>
      </div>
      <Answer
        className={cn(styles.answer, { [styles.show]: visible })}
        avatar="/images/content/avatar.jpg"
        onClose={() => setVisible(false)}
        currentValue={valueAnswer}
        setCurrentValue={setValueAnswer}
      />
    </>
  );
};

export default Control;
