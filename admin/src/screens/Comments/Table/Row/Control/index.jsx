import React, { useState } from "react";
import styles from "./Control.module.sass";
import cn from "classnames";
import Icon from "../../../../../components/Icon";
import Favorite from "../../../../../components/Favorite";
import Answer from "../../../../../components/Answer";
import Smile from "../../../../../components/Smile";

const Control = ({
  className,
  setValue,
  valueAnswer,
  setValueAnswer,
  visibleSmile,
  setVisibleSmile,
}) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setValue(true);
    setVisible(true);
  };

  const handleClose = () => {
    setValue(false);
    setVisible(false);
  };

  return (
    <>
      <div
        className={cn(styles.control, className, { [styles.hidden]: visible })}
      >
        <button
          className={cn(styles.button, { [styles.active]: visible })}
          onClick={() => handleClick()}
        >
          <Icon name="repeat" size="24" />
        </button>
        <Favorite className={cn(styles.favorite, styles.button)} size="24" />
        <button className={styles.button}>
          <Icon name="trash" size="24" />
        </button>
        <Smile
          visibleSmile={visibleSmile}
          setVisibleSmile={setVisibleSmile}
          right
        />
      </div>
      <Answer
        className={cn(styles.answer, { [styles.show]: visible })}
        avatar="/images/content/avatar.jpg"
        onClose={() => handleClose()}
        currentValue={valueAnswer}
        setCurrentValue={setValueAnswer}
      />
    </>
  );
};

export default Control;
