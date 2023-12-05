import React from "react";
import cn from "classnames";
import styles from "./Head.module.sass";
import { Link } from "react-router-dom";
import Icon from "../../../../components/Icon";

const Head = ({ className }) => {
  return (
    <div className={cn(styles.head, className)}>
      <div className={styles.user}>
        <div className={styles.avatar}>
          <img src="/images/content/avatar-1.jpg" alt="Avatar" />
        </div>
        <div className={styles.details}>
          <div className={styles.man}>Chelsie Haley</div>
          <div className={styles.login}>@chelsiehaly</div>
        </div>
      </div>
      <div className={styles.btns}>
        <button className={cn("button-stroke", styles.button)}>
          <span>Follow</span>
          <Icon name="add" size="24" />
        </button>
        <Link className={cn("button", styles.button)} to="/message-center">
          <span>Message</span>
          <Icon name="message" size="24" />
        </Link>
      </div>
    </div>
  );
};

export default Head;
