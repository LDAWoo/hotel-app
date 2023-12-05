import React, { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import ModalPreview from "../../../ModalPreview";

const Item = ({ className, item }) => {
  const [visibleModalPreview, setVisibleModalPreview] = useState(false);

  return (
    <>
      <div
        className={cn(styles.item, className)}
        onClick={() => setVisibleModalPreview(true)}
      >
        <div className={styles.preview}>
          <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Product" />
        </div>
        <div className={styles.details}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.line}>
            {item.statusText && (
              <div
                className={cn(
                  { "status-purple": item.statusColor === "purple" },
                  { "status-green-dark": item.statusColor === "green" },
                  { "status-red-dark": item.statusColor === "red" },
                  styles.status
                )}
              >
                {item.statusText}
              </div>
            )}
            <div className={styles.user}>
              <div className={styles.avatar}>
                <img src={item.avatar} alt="Avatar" />
              </div>
              <div className={styles.time}>{item.time}</div>
            </div>
          </div>
        </div>
      </div>
      <ModalPreview
        visible={visibleModalPreview}
        onClose={() => setVisibleModalPreview(false)}
        video="/images/content/video.mp4"
        title="Use guidelines"
      />
    </>
  );
};

export default Item;
