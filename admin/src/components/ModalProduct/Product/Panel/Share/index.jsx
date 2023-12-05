import React, { useState } from "react";
import cn from "classnames";
import styles from "./Share.module.sass";
import Icon from "../../../../Icon";

const socials = [
  {
    icon: "facebook",
    url: "https://www.facebook.com/ui8.net/",
  },
  {
    icon: "twitter",
    url: "https://twitter.com/ui8",
  },
  {
    icon: "instagram",
    url: "https://www.instagram.com/ui8net/",
  },
];

const Share = () => {
  const [value, setValue] = useState("https://ui8.net/feel-travel");
  return (
    <div className={styles.share}>
      <div className={styles.head}>
        <div className={cn("title-red", styles.title)}>Share this product</div>
      </div>
      <div className={styles.field}>
        <div className={styles.icon}>
          <Icon name="link" size="24" />
        </div>
        <input
          className={styles.input}
          type="text"
          name="site"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          readOnly
        />
        <button className={styles.copy}>Copy</button>
      </div>
      <div className={styles.preview}>
        <img src="/images/content/photo-1.jpg" alt="Share" />
      </div>
      <div className={styles.btns}>
        {socials.map((x, index) => (
          <a
            className={cn("button-stroke", styles.button)}
            href={x.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <Icon name={x.icon} size="24" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Share;
