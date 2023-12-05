import React, { useState } from "react";
import cn from "classnames";
import styles from "./Details.module.sass";
import Icon from "../../../components/Icon";
import Head from "./Head";
import Editor from "../../../components/Editor";
import PurchaseHistory from "./PurchaseHistory";

const socials = [
  {
    title: "twitter",
    url: "https://twitter.com/ui8",
  },
  {
    title: "instagram",
    url: "https://www.instagram.com/ui8net/",
  },
  {
    title: "pinterest",
    url: "https://www.pinterest.com/ui8m/",
  },
  {
    title: "facebook",
    url: "https://www.facebook.com/ui8.net/",
  },
];

const Details = ({ className, onClose }) => {
  const [content, setContent] = useState();

  return (
    <div className={cn(styles.details, className)}>
      <button className={styles.close} onClick={onClose}>
        <Icon name="close" size="20" />
      </button>
      <Head className={styles.head} />
      <Editor
        state={content}
        onChange={setContent}
        classEditor={styles.editor}
        label="Private note"
        tooltip="Description Private note"
      />
      <div className={styles.group}>
        <a
          className={styles.line}
          href="mailto:fahey.designer@robot.co"
          rel="noopener noreferrer"
        >
          <Icon name="mail" size="24" />
          fahey.designer@robot.co
        </a>
        <div className={styles.socials}>
          {socials.map((x, index) => (
            <a
              className={styles.social}
              href={x.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Icon name={x.title} size="24" />
            </a>
          ))}
        </div>
        <a
          className={styles.line}
          href="https://ui8.net/"
          rel="noopener noreferrer"
        >
          <Icon name="link" size="24" />
          robot.co
        </a>
      </div>
      <PurchaseHistory className={styles.history} />
    </div>
  );
};

export default Details;
