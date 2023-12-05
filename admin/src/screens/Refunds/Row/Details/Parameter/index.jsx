import React from "react";
import styles from "./Parameter.module.sass";
import Tooltip from "../../../../../components/Tooltip";

const Parameter = ({ item }) => {
    return (
        <div className={styles.parameter}>
            <div className={styles.title}>
                {item.title}
                {item.tooltip && (
                    <Tooltip
                        className={styles.tooltip}
                        title={item.tooltip}
                        icon="info-stroke"
                        place="top"
                    />
                )}
            </div>
            {item.content && (
                <div className={styles.content}>{item.content}</div>
            )}
            {item.downloadedStatus &&
                (item.downloadedValue ? (
                    <div className={styles.yes}>Yes</div>
                ) : (
                    <div className={styles.no}>No</div>
                ))}
            {item.price && (
                <div className={styles.price}>${item.price.toFixed(2)}</div>
            )}
        </div>
    );
};

export default Parameter;
