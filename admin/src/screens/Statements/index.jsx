import React from "react";
import styles from "./Statements.module.sass";
import TooltipGlodal from "../../components/TooltipGlodal";
import Overview from "./Overview";
import Transactions from "./Transactions";

const Statements = () => {
  return (
    <>
      <div className={styles.section}>
        <Overview className={styles.card} />
        <Transactions />
      </div>
      <TooltipGlodal />
    </>
  );
};

export default Statements;
