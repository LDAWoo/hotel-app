import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Message.module.sass";
import Card from "../../../components/Card";

const comments = [
  {
    title: "Winnifred",
    login: "@username",
    time: "30m",
    content: 'Message goes here <span role="img" aria-label="smile">😊</span>',
    avatar: "/images/content/avatar-1.jpg",
  },
  {
    title: "Esther",
    login: "@username",
    time: "1h",
    content: 'Message goes here <span role="img" aria-label="smile">😊</span>',
    avatar: "/images/content/avatar-4.jpg",
  },
  {
    title: "Leland",
    login: "@username",
    time: "1h",
    content: 'Message goes here <span role="img" aria-label="smile">😊</span>',
    avatar: "/images/content/avatar-3.jpg",
  },
  {
    title: "Jimmy",
    login: "@username",
    time: "2h",
    content: 'Message goes here <span role="img" aria-label="smile">😊</span>',
    avatar: "/images/content/avatar-2.jpg",
  },
  {
    title: "Chad",
    login: "@username",
    time: "4h",
    content: 'Message goes here <span role="img" aria-label="smile">😊</span>',
    avatar: "/images/content/avatar-5.jpg",
  },
];

const Message = ({ className }) => {
  return (
    <Card
      className={cn(styles.card, className)}
      title="Message"
      classTitle="title-purple"
    >
      <div className={styles.message}>
        <div className={styles.list}>
          {comments.map((x, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.avatar}>
                <img src={x.avatar} alt="Avatar" />
              </div>
              <div className={styles.details}>
                <div className={styles.line}>
                  <div className={styles.user}>
                    <span className={styles.title}>{x.title}</span>{" "}
                    <span className={styles.login}>{x.login}</span>
                  </div>
                  <div className={styles.time}>{x.time}</div>
                </div>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: x.content }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <Link
          className={cn("button-stroke", styles.button)}
          to="/message-center"
        >
          View all message
        </Link>
      </div>
    </Card>
  );
};

export default Message;
