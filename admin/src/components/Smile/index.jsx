import React, { useState } from "react";
import cn from "classnames";
import styles from "./Smile.module.sass";
import OutsideClickHandler from "react-outside-click-handler";
import Icon from "../Icon";

const smileys = [
  "/images/smileys/blush.png",
  "/images/smileys/surprised.png",
  "/images/smileys/sweat-grinning.png",
  "/images/smileys/cool.png",
  "/images/smileys/sleepy.png",
  "/images/smileys/crying-with-laughter.png",
  "/images/smileys/heart-eyes.png",
  "/images/smileys/surprised.png",
];

const Smile = ({ className, up, right, visibleSmile, setVisibleSmile }) => {
  const [innerVisible, setInnerVisible] = useState(false);

  const toggle = () => {
    setVisibleSmile
      ? setVisibleSmile(!visibleSmile)
      : setInnerVisible(!innerVisible);
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() =>
        setVisibleSmile ? setVisibleSmile(false) : setInnerVisible(false)
      }
    >
      <div
        className={cn(
          styles.smile,
          {
            [styles.active]: visibleSmile ? visibleSmile : innerVisible,
          },
          className
        )}
      >
        <button className={styles.head} onClick={() => toggle()}>
          <Icon name="smile" size="24" />
        </button>
        <div
          className={cn(
            styles.body,
            { [styles.up]: up },
            { [styles.right]: right }
          )}
        >
          <div className={styles.list}>
            {smileys.map((x, index) => (
              <button className={styles.item} key={index}>
                <img src={x} alt="Smile" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Smile;
