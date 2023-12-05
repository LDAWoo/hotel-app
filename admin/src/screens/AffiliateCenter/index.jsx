import React from "react";
import styles from "./AffiliateCenter.module.sass";
import TooltipGlodal from "../../components/TooltipGlodal";
import Snapshot from "./Snapshot";
import PopularProducts from "../../components/PopularProducts";
import PerformanceByDay from "./PerformanceByDay";
import Table from "./Table";
import CreateLink from "./CreateLink";

const AffiliateCenter = () => {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.col}>
          <Snapshot className={styles.card} />
          <PerformanceByDay className={styles.card} />
          <Table className={styles.card} />
        </div>
        <div className={styles.col}>
          <CreateLink className={styles.card} />
          <PopularProducts className={styles.card} views="8" />
        </div>
      </div>
      <TooltipGlodal />
    </>
  );
};

export default AffiliateCenter;
