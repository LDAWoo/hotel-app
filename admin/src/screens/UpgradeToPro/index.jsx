import React from "react";
import styles from "./UpgradeToPro.module.sass";
import TooltipGlodal from "../../components/TooltipGlodal";
import Packages from "./Packages";
import Faq from "./Faq";

const UpgradeToPro = () => {
  return (
    <>
      <Packages className={styles.packages} />
      <Faq />
      <TooltipGlodal />
    </>
  );
};

export default UpgradeToPro;
