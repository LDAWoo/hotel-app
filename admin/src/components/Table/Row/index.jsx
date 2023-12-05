import React, { useState } from "react";
import styles from "./Row.module.sass";
import Checkbox from "../../Checkbox";
import ModalProduct from "../../ModalProduct";
import Icon from "../../Icon";
import Actions from "../../Actions";
import Modal from "../../Modal";
import Schedule from "../../Schedule";
import Control from "./Control";

const Row = ({ item, value, onChange }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());

    const [visibleModalProduct, setVisibleModalProduct] = useState(false);
    const [visibleModalSchedule, setVisibleModalSchedule] = useState(false);

    const actions = [
        {
            title: "Schedule product",
            icon: "calendar",
            action: () => setVisibleModalSchedule(true),
        },
        {
            title: "Edit title & description",
            icon: "edit",
            action: () => console.log("Edit title & description"),
        },
        {
            title: "Delete forever",
            icon: "trash",
            action: () => console.log("Delete forever"),
        },
    ];

    return (
        <>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Checkbox
                        className={styles.checkbox}
                        value={value}
                        onChange={onChange}
                    />
                </div>
                <div className={styles.col}>
                    <div
                        className={styles.item}
                        onClick={() => setVisibleModalProduct(true)}
                    >
                        <div className={styles.preview}>
                            <img
                                srcSet={`${item.image2x} 2x`}
                                src={item.image}
                                alt="Product"
                            />
                        </div>
                        <div className={styles.details}>
                            <div className={styles.product}>{item.product}</div>
                            <div className={styles.link}>{item.link}</div>
                            <div className={styles.date}>
                                <Icon name="clock" size="20" /> {item.date}
                            </div>
                            {item.price > 0 ? (
                                <div className={styles.price}>
                                    ${item.price}
                                </div>
                            ) : (
                                <div className={styles.empty}>
                                    ${item.price}
                                </div>
                            )}
                        </div>
                    </div>
                    <Actions
                        className={styles.actions}
                        classActionsHead={styles.actionsHead}
                        items={actions}
                    />
                </div>
                <div className={styles.col}>
                    {item.price > 0 ? (
                        <div className={styles.price}>${item.price}</div>
                    ) : (
                        <div className={styles.empty}>${item.price}</div>
                    )}
                </div>
                <div className={styles.col}>
                    {item.date}
                    <Control
                        className={styles.control}
                        startDate={startDate}
                        setStartDate={setStartDate}
                        startTime={startTime}
                        setStartTime={setStartTime}
                    />
                </div>
            </div>
            <ModalProduct
                visible={visibleModalProduct}
                onClose={() => setVisibleModalProduct(false)}
            />
            <Modal
                visible={visibleModalSchedule}
                onClose={() => setVisibleModalSchedule(false)}
            >
                <Schedule
                    startDate={startDate}
                    setStartDate={setStartDate}
                    startTime={startTime}
                    setStartTime={setStartTime}
                />
            </Modal>
        </>
    );
};

export default Row;
