import React from "react";
import cn from "classnames";
import styles from "./Messages.module.sass";
import Panel from "./Panel";
import Message from "./Message";
import Send from "./Send";

const Messages = ({
  className,
  visible,
  setVisible,
  actions,
  parameters,
  messages,
}) => {
  return (
    <div className={cn(className, styles.messages, { [styles.show]: visible })}>
      <Panel
        actions={actions}
        parameters={parameters}
        setVisible={setVisible}
      />
      <div className={styles.wrapper}>
        <button className={cn("button-stroke button-small", styles.button)}>
          Load conversation
        </button>
        <div className={styles.list}>
          {messages.map((x, index) => (
            <Message item={x} key={index} />
          ))}
        </div>
        <Send />
      </div>
    </div>
  );
};

export default Messages;
