import cn from "classnames";
import styles from "./Help.module.sass";
import { Link } from "react-router-dom";
import Icon from "../../Icon";
import Item from "./Item";

const items = [
    {
        title: "Exclusive downloads",
        image: "/images/content/product-pic-1.jpg",
        image2x: "/images/content/product-pic-1@2x.jpg",
        statusText: "New",
        statusColor: "purple",
        avatar: "/images/content/avatar-1.jpg",
        time: "3 mins",
    },
    {
        title: "Behind the scenes",
        image: "/images/content/product-pic-2.jpg",
        image2x: "/images/content/product-pic-2@2x.jpg",
        statusText: "New",
        statusColor: "purple",
        avatar: "/images/content/avatar-2.jpg",
        time: "5 mins",
    },
    {
        title: "Use guidelines",
        image: "/images/content/product-pic-3.jpg",
        image2x: "/images/content/product-pic-3@2x.jpg",
        avatar: "/images/content/avatar-3.jpg",
        time: "8 mins",
    },
    {
        title: "Life & work update",
        image: "/images/content/product-pic-4.jpg",
        image2x: "/images/content/product-pic-4@2x.jpg",
        avatar: "/images/content/avatar-4.jpg",
        time: "12 mins",
    },
    {
        title: "Promote your product",
        image: "/images/content/product-pic-5.jpg",
        image2x: "/images/content/product-pic-5@2x.jpg",
        avatar: "/images/content/avatar-5.jpg",
        time: "33 mins",
    },
];

const menu = [
    {
        title: "Upgrade to Pro",
        icon: "lightning",
        arrow: true,
        url: "/upgrade-to-pro",
    },
    {
        title: "Download desktop app",
        icon: "download",
        url: "/",
    },
    {
        title: "Message center",
        icon: "message",
        counter: 8,
        url: "/message-center",
    },
];

const Help = ({ className, visible, setVisible, onClose }) => {
    const handleClose = () => {
        onClose();
        setVisible(false);
    };

    return (
        <>
            <div
                className={cn(styles.help, className, {
                    [styles.active]: visible,
                })}
            >
                <div className={styles.head}>
                    <Icon name="help" size="24" />
                    Help & getting started
                    <button
                        className={styles.close}
                        onClick={() => setVisible(false)}
                    >
                        <Icon name="close" size="24" />
                    </button>
                </div>
                <div className={styles.list}>
                    {items.map((x, index) => (
                        <Item className={styles.item} item={x} key={index} />
                    ))}
                </div>
                <div className={styles.menu}>
                    {menu.map((x, index) => (
                        <Link
                            className={styles.link}
                            to={x.url}
                            key={index}
                            onClick={() => handleClose()}
                        >
                            <Icon name={x.icon} size="24" />
                            {x.title}
                            {x.arrow && (
                                <div className={styles.arrow}>
                                    <Icon name="arrow-next" size="24" />
                                </div>
                            )}
                            {x.counter && (
                                <div className={styles.counter}>8</div>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
            <div
                className={cn(styles.overlay, { [styles.active]: visible })}
                onClick={() => setVisible(false)}
            ></div>
        </>
    );
};

export default Help;
