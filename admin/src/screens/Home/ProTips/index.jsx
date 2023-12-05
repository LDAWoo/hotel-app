import React, { useState } from "react";
import cn from "classnames";
import styles from "./ProTips.module.sass";
import Card from "../../../components/Card";
import Icon from "../../../components/Icon";
import ModalPreview from "../../../components/ModalPreview";

const tips = [
  {
    title: "Early access",
    icon: "schedule",
    statusColor: "purple",
    statusText: "New",
    avatar: "/images/content/avatar.jpg",
    action: "3 mins read",
  },
  {
    title: "Asset use guidelines",
    icon: "arrow-right",
    statusColor: "green",
    statusText: "Small label",
    avatar: "/images/content/avatar.jpg",
    action: "Time",
  },
  {
    title: "Exclusive downloads",
    icon: "design",
    avatar: "/images/content/avatar-1.jpg",
    action: "2 mins read",
  },
  {
    title: "Behind the scenes",
    icon: "video-recorder",
    statusColor: "red",
    statusText: "Hot",
    avatar: "/images/content/avatar-2.jpg",
    action: "3 mins read",
  },
  {
    title: "Asset use guidelines",
    icon: "phone",
    statusColor: "green",
    statusText: "Popular",
    avatar: "/images/content/avatar-3.jpg",
    action: "Time",
  },
  {
    title: "Life & work updates",
    icon: "multiselect",
    avatar: "/images/content/avatar-4.jpg",
    action: "3 mins read",
  },
];

const ProTips = ({ className }) => {
  const [visibleModalPreview, setVisibleModalPreview] = useState(false);

  return (
    <>
      <Card
        className={cn(styles.card, className)}
        title="Pro tips"
        classTitle="title-green"
      >
        <div className={styles.tips}>
          <div className={styles.info}>
            Need some ideas for the next product?
          </div>
          <div className={styles.list}>
            {tips.map((x, index) => (
              <div
                className={styles.item}
                key={index}
                onClick={() => setVisibleModalPreview(true)}
              >
                <div className={styles.icon}>
                  <Icon name={x.icon} size="24" />
                </div>
                <div className={styles.details}>
                  <div className={styles.title}>{x.title}</div>
                  <div className={styles.line}>
                    {x.statusText && (
                      <div
                        className={cn(
                          { "status-purple": x.statusColor === "purple" },
                          { "status-green-dark": x.statusColor === "green" },
                          { "status-red-dark": x.statusColor === "red" },
                          styles.status
                        )}
                      >
                        {x.statusText}
                      </div>
                    )}
                    <div className={styles.user}>
                      <div className={styles.avatar}>
                        <img src={x.avatar} alt="Avatar" />
                      </div>
                      <div className={styles.action}>{x.action}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
      <ModalPreview
        visible={visibleModalPreview}
        onClose={() => setVisibleModalPreview(false)}
        video="/images/content/video.mp4"
        title="Use guidelines"
      />
    </>
  );
};

export default ProTips;
