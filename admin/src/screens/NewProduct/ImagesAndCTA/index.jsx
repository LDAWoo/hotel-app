import React, { useState } from "react";
import cn from "classnames";
import styles from "./ImagesAndCTA.module.sass";
import Card from "../../../components/Card";
import File from "../../../components/File";
import Dropdown from "../../../components/Dropdown";

const optionsPurchase = ["Purchase now", "Purchase tomorrow", "Buy later"];

const ImagesAndCTA = ({ className }) => {
  const [purchase, setPurchase] = useState(optionsPurchase[0]);

  return (
    <Card
      className={cn(styles.card, className)}
      title="Images & CTA"
      classTitle="title-blue"
    >
      <div className={styles.images}>
        <File
          className={styles.field}
          title="Click or drop image"
          label="Cover images"
          tooltip="Maximum 100 characters. No HTML or emoji allowed"
        />
        <Dropdown
          className={styles.field}
          label="Dropdown"
          tooltip="Maximum 100 characters. No HTML or emoji allowed"
          value={purchase}
          setValue={setPurchase}
          options={optionsPurchase}
        />
      </div>
    </Card>
  );
};

export default ImagesAndCTA;
