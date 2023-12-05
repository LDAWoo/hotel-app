import React from "react";
import styles from "./Payouts.module.sass";
import TooltipGlodal from "../../components/TooltipGlodal";
import Overview from "./Overview";
import PayoutHistory from "./PayoutHistory";

const Payouts = () => {
    return (
        <>
            <div className={styles.section}>
                <Overview className={styles.card} />
                <PayoutHistory />
            </div>
            <TooltipGlodal />
        </>
    );
};

export default Payouts;
