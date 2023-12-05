import React, { useState } from "react";
import styles from "./Row.module.sass";
import Modal from "../../../components/Modal";
import Details from "./Details";

const Row = ({ item }) => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <>
      <div className={styles.row} onClick={() => setVisibleModal(true)}>
        <div className={styles.col}>
          <div className={styles.item}>
            <div className={styles.preview}>
              <img
                srcSet={`${item.image2x} 2x`}
                src={item.image}
                alt="Product"
              />
            </div>
            <div className={styles.details}>
              <div className={styles.product}>{item.product}</div>
              <div className={styles.category}>{item.category}</div>
              {item.status ? (
                <div className={styles.new}>New request</div>
              ) : (
                <div className={styles.progress}>In progress</div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.col}>
          {item.status ? (
            <div className={styles.new}>New request</div>
          ) : (
            <div className={styles.progress}>In progress</div>
          )}
        </div>
        <div className={styles.col}>{item.date}</div>
        <div className={styles.col}>
          <div className={styles.user}>
            <div className={styles.avatar}>
              <img src={item.avatar} alt="Avatar" />
            </div>
            {item.man}
          </div>
        </div>
      </div>
      <Modal
        outerClassName={styles.outer}
        visible={visibleModal}
        onClose={() => setVisibleModal(false)}
      >
        <Details item={item} />
      </Modal>
    </>
  );
};

export default Row;
