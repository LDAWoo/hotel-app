import React, { useState } from "react";
import styles from "./MessageCenter.module.sass";
import cn from "classnames";
import Users from "./Users";
import Messages from "./Messages";

const navigation = [
  {
    title: "Customers",
    icon: "profile-circle",
  },
  {
    title: "Everyone",
    icon: "lightning",
  },
];

const actions = [
  {
    title: "Mark as read",
    icon: "check",
    action: () => console.log("Mark as read"),
  },
  {
    title: "Delete message",
    icon: "trash",
    action: () => console.log("Delete message"),
  },
];

const parameters = [
  {
    title: "Customer since",
    content: "Sep 2021",
  },
  {
    title: "Purchased",
    content: "21 items",
  },
  {
    title: "Lifetime",
    content: "$1,235.00",
  },
];

const users = [
  {
    id: 0,
    man: "Jarret Waelchi",
    avatar: "/images/content/avatar-1.jpg",
    time: "03:30PM",
    content: "When do you release the coded for the Fleet - Travel kit?",
    new: true,
    online: false,
  },
  {
    id: 1,
    man: "Orval Casper",
    avatar: "/images/content/avatar-2.jpg",
    time: "11:59AM",
    content: "When do you release the coded for the Fleet - Travel kit?",
    new: false,
    online: true,
  },
  {
    id: 2,
    man: "Michel Emard",
    avatar: "/images/content/avatar-3.jpg",
    time: "09:30AM",
    content: "When do you release the coded for the Fleet - Travel kit?",
    new: true,
    online: false,
  },
  {
    id: 3,
    man: "Reuben Ward",
    avatar: "/images/content/avatar-4.jpg",
    time: "08:00AM",
    content: "When do you release the coded for the Fleet - Travel kit?",
    new: false,
    online: false,
  },
  {
    id: 4,
    man: "Evalyn Jenkins",
    avatar: "/images/content/avatar-5.jpg",
    time: "07:01AM",
    content: "When do you release the coded for the Fleet - Travel kit?",
    new: false,
    online: false,
  },
];

const messages = [
  {
    id: 0,
    man: "Orval Casper",
    avatar: "/images/content/avatar-1.jpg",
    time: "11:59AM",
    content:
      'When do you release the coded for the Fleet - Travel kit? <a href="https://ui8.net" target="_blank" rel="noopener noreferrer">https://ui8.net/product-link</a>',
  },
  {
    id: 1,
    man: "Britney Beer",
    avatar: "/images/content/avatar.jpg",
    time: "11:59AM",
    content:
      'Hi @orval, thanks for contacting.<br>Yes, I’m working on it. It would be released next 2 weeks. You could check the progress here: <a href="https://ui8.net" target="_blank" rel="noopener noreferrer">https://ui8.net/progress</a><br></br>Thanks for your patience and understanding. <span role="img" aria-label="pray">🙌</span><br> Regards,<br></br>Br',
  },
];

const MessageCenter = () => {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <div className={cn(styles.wrapper, { [styles.active]: visible })}>
      <Users
        className={styles.users}
        navigation={navigation}
        items={users}
        setVisible={setVisible}
        search={search}
        setSearch={setSearch}
        onSubmit={() => handleSubmit()}
      />
      <Messages
        className={styles.messages}
        visible={visible}
        setVisible={setVisible}
        actions={actions}
        parameters={parameters}
        messages={messages}
      />
    </div>
  );
};

export default MessageCenter;
