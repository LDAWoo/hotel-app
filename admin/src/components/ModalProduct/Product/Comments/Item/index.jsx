import React, { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Icon from "../../../../Icon";
import Control from "./Control";

const Item = ({ className, item }) => {
  const [currentValue, setCurrentValue] = useState("");
  const [currentValueAnswer, setCurrentValueAnswer] = useState("");

  return (
    <>
      <div className={cn(styles.item, className)}>
        <div className={styles.avatar}>
          <img src={item.avatar} alt="Avatar" />
        </div>
        <div className={styles.details}>
          <div className={styles.line}>
            <div className={styles.author}>{item.author}</div>
            <div className={styles.time}>{item.time}</div>
            <div className={styles.rating}>
              {item.rating.toFixed(1)}
              <Icon name="star-fill" size="24" />
            </div>
          </div>
          <div className={styles.login}>{item.login}</div>
          <div
            className={styles.comment}
            dangerouslySetInnerHTML={{ __html: item.comment }}
          ></div>
          <Control
            valueAnswer={currentValue}
            setValueAnswer={setCurrentValue}
          />
        </div>
      </div>
      {item.answer && (
        <div className={styles.list}>
          {item.answer.map((x, index) => (
            <div className={styles.answer} key={index}>
              <div className={styles.avatar}>
                <img src={x.avatar} alt="Avatar" />
              </div>
              <div className={styles.details}>
                <div className={styles.line}>
                  <div className={styles.author}>{x.author}</div>
                  <div className={styles.time}>{x.time}</div>
                  <div className={styles.rating}>
                    {x.rating.toFixed(1)}
                    <Icon name="star-fill" size="24" />
                  </div>
                </div>
                <div
                  className={styles.comment}
                  dangerouslySetInnerHTML={{ __html: x.comment }}
                ></div>
                <Control
                  valueAnswer={currentValueAnswer}
                  setValueAnswer={setCurrentValueAnswer}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Item;
