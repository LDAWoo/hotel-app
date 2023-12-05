import React from "react";
import cn from "classnames";
import styles from "./Panel.module.sass";
import Icon from "../../Icon";

const Panel = ({ onClose, download, title, galleryPanel }) => {
  return (
    <div className={cn(styles.panel, { [styles.panelGallery]: galleryPanel })}>
      <div className={styles.actions}>
        <button className={styles.favorite}>
          <Icon name="heart-fill" size="24" />
          32
        </button>
        {download && (
          <button className={cn("button-small", styles.button)}>
            <Icon name="download" size="24" />
            <span>Download now</span>
          </button>
        )}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.control}>
        <button className={styles.link}>
          <Icon name="link" size="20" />
        </button>
        <button className={styles.close} onClick={onClose}>
          <Icon name="close" size="20" />
        </button>
      </div>
    </div>
  );
};

export default Panel;
