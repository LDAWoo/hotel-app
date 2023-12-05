import React, { useState } from "react";
import cn from "classnames";
import styles from "./Control.module.sass";
import Icon from "../../../../../Icon";
import Answer from "../../../../../Answer";

const Control = ({ valueAnswer, setValueAnswer }) => {
  const [visibleFavorite, setVisibleFavorite] = useState(false);
  const [visibleReply, setVisibleReply] = useState(false);
  return (
    <>
      <div className={styles.control}>
        <button
          className={cn(styles.favorite, { [styles.active]: visibleFavorite })}
          onClick={() => setVisibleFavorite(!visibleFavorite)}
        >
          <span>
            <Icon name="heart" size="20" />
            <Icon name="heart-fill" size="20" />
          </span>
          Like
        </button>
        <button
          className={cn(styles.reply, { [styles.active]: visibleReply })}
          onClick={() => setVisibleReply(true)}
        >
          <span>
            <Icon name="repeat" size="20" />
          </span>
          Reply
        </button>
      </div>
      <Answer
        className={cn(styles.answer, { [styles.show]: visibleReply })}
        avatar="/images/content/avatar.jpg"
        onClose={() => setVisibleReply(false)}
        currentValue={valueAnswer}
        setCurrentValue={setValueAnswer}
      />
    </>
  );
};

export default Control;
