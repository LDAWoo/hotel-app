import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./RefundRequests.module.sass";
import Card from "../Card";
import Icon from "../Icon";

const requests = [
  {
    content:
      'You have <strong>52 open refund requests</strong> to action. This includes <strong>8 new requests</strong>. <span role="img" aria-label="smile">👀</span>',
    icon: "basket",
    fill: "#FF6A55",
    color: "#FFE7E4",
  },
];

const RefundRequests = ({ className, title, classTitle }) => {
  return (
    <Card
      className={cn(styles.card, className)}
      title={title}
      classTitle={classTitle}
    >
      <div className={styles.section}>
        <div className={styles.list}>
          {requests.map((x, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.icon} style={{ backgroundColor: x.color }}>
                <Icon name={x.icon} size="24" fill={x.fill} />
              </div>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: x.content }}
              ></div>
            </div>
          ))}
        </div>
        <Link
          className={cn("button-stroke", styles.button)}
          to="/income/refunds"
        >
          Review refund requests
        </Link>
      </div>
    </Card>
  );
};

export default RefundRequests;
