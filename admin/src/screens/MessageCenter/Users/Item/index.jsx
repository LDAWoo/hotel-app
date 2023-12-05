import cn from "classnames";
import styles from "./Item.module.sass";

const Item = ({ item, setVisible, activeId, setActiveId }) => {
    const handleClick = (id) => {
        setVisible(true);
        setActiveId(id);
    };

    return (
        <div
            className={cn(
                styles.item,
                { [styles.new]: item.new },
                { [styles.online]: item.online },
                { [styles.active]: activeId === item.id }
            )}
            onClick={() => handleClick(item.id)}
        >
            <div className={styles.avatar}>
                <img src={item.avatar} alt="Avatar" />
            </div>
            <div className={styles.details}>
                <div className={styles.head}>
                    <div className={styles.man}>{item.man}</div>
                    <div className={styles.time}>{item.time}</div>
                </div>
                <div
                    className={styles.message}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
            </div>
        </div>
    );
};

export default Item;
