import styles from "./Message.module.sass";

const Message = ({ item }) => {
    return (
        <div className={styles.message}>
            <div className={styles.avatar}>
                <img src={item.avatar} alt="Avatar" />
            </div>
            <div className={styles.details}>
                <div className={styles.head}>
                    <div className={styles.man}>{item.man}</div>
                    <div className={styles.time}>{item.time}</div>
                </div>
                <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
            </div>
        </div>
    );
};

export default Message;
