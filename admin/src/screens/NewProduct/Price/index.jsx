import React, { useState } from "react";
import cn from "classnames";
import styles from "./Price.module.sass";
import Card from "../../../components/Card";
import Tooltip from "../../../components/Tooltip";
import TextInput from "../../../components/TextInput";
import Switch from "../../../components/Switch";

const Price = ({ className }) => {
  const [resolution, setResolution] = useState(true);

  return (
    <Card
      className={cn(styles.card, className)}
      title="Price"
      classTitle="title-green"
    >
      <div className={styles.price}>
        <TextInput
          className={styles.field}
          label="Amount"
          name="amount"
          type="text"
          tooltip="Small description"
          required
          currency="$"
        />
        <div className={styles.line}>
          <div className={styles.info}>
            Allow customers to pay they want{" "}
            <Tooltip
              className={styles.tooltip}
              title="Maximum 100 characters. No HTML or emoji allowed"
              icon="info"
              place="top"
            />
          </div>
          <Switch
            className={styles.switch}
            value={resolution}
            onChange={() => setResolution(!resolution)}
          />
        </div>
        <div className={styles.fieldset}>
          <TextInput
            className={styles.field}
            classLabel={styles.label}
            label="Minimum amount"
            name="minimum-amount"
            type="text"
            required
            currency="$"
          />
          <TextInput
            className={styles.field}
            classLabel={styles.label}
            label="Suggested amount"
            name="suggested-amount"
            type="text"
            required
            currency="$"
          />
        </div>
      </div>
    </Card>
  );
};

export default Price;
