import React from "react";
import cn from "classnames";
import styles from "./Preview.module.sass";
import Card from "../../../components/Card";
import Icon from "../../../components/Icon";

const Preview = ({ visible, onClose }) => {
  return (
    <div className={cn(styles.preview, { [styles.visible]: visible })}>
      <button className={styles.close} onClick={onClose}>
        <Icon name="close" size="24" />
      </button>
      <Card
        className={styles.card}
        classCardHead={styles.head}
        title="Preview"
        classTitle="title-blue"
        head={
          <button className={styles.button}>
            <Icon name="expand" size="24" />
          </button>
        }
      >
        <div className={styles.body}>
          <div className={styles.photo}>
            <img src="/images/content/photo-1.jpg" alt="Product" />
          </div>
          <div className={styles.line}>
            <div className={styles.title}>
              Fleet - Travel shopping UI design kit
            </div>
            <div className={styles.price}>$98</div>
          </div>
          <div className={styles.user}>
            <div className={styles.avatar}>
              <img src="/images/content/avatar.jpg" alt="Avatar" />
            </div>
            <div className={styles.text}>
              by <span>Hortense</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Preview;
