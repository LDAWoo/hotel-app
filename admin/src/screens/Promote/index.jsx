import React from "react";
import styles from "./Promote.module.sass";
import TooltipGlodal from "../../components/TooltipGlodal";
import Overview from "./Overview";
import RecentPost from "./RecentPost";

const Promote = () => {
    return (
        <>
            <div className={styles.section}>
                <Overview className={styles.card} />
                <RecentPost />
            </div>
            <TooltipGlodal />
        </>
    );
};

export default Promote;
