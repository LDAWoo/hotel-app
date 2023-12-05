import React, { useState } from "react";
import styles from "./NewProduct.module.sass";
import TooltipGlodal from "../../components/TooltipGlodal";
import Modal from "../../components/Modal";
import Schedule from "../../components/Schedule";
import NameAndDescription from "./NameAndDescription";
import ImagesAndCTA from "./ImagesAndCTA";
import Price from "./Price";
import CategoryAndAttibutes from "./CategoryAndAttibutes";
import ProductFiles from "./ProductFiles";
import Discussion from "./Discussion";
import Preview from "./Preview";
import Panel from "./Panel";

const NewProduct = () => {
    const [visiblePreview, setVisiblePreview] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);

    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());

    return (
        <>
            <div className={styles.row}>
                <div className={styles.col}>
                    <NameAndDescription className={styles.card} />
                    <ImagesAndCTA className={styles.card} />
                    <Price className={styles.card} />
                    <CategoryAndAttibutes className={styles.card} />
                    <ProductFiles className={styles.card} />
                    <Discussion className={styles.card} />
                </div>
                <div className={styles.col}>
                    <Preview
                        visible={visiblePreview}
                        onClose={() => setVisiblePreview(false)}
                    />
                </div>
            </div>
            <Panel
                setVisiblePreview={setVisiblePreview}
                setVisibleSchedule={setVisibleModal}
            />
            <TooltipGlodal />
            <Modal
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
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

export default NewProduct;
