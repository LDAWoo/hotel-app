import React, { useState } from "react";
import cn from "classnames";
import styles from "./Overview.module.sass";
import Card from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";
import Users from "../../../components/Users";
import Balance from "../../../components/Balance";
import Chart from "./Chart";

const intervals = ["Last 28 days", "Last 14 days", "Last 7 days"];

const Overview = ({ className }) => {
  const [sorting, setSorting] = useState(intervals[0]);

  return (
    <Card
      className={cn(styles.card, className)}
      title="Total customers"
      classTitle={cn("title-red", styles.cardTitle)}
      classCardHead={styles.cardHead}
      head={
        <Dropdown
          className={styles.dropdown}
          classDropdownHead={styles.dropdownHead}
          value={sorting}
          setValue={setSorting}
          options={intervals}
          small
        />
      }
    >
      <div className={styles.overview}>
        <div className={styles.details}>
          <div className={cn("h4", styles.title)}>1,509 customers</div>
          <div className={styles.line}>
            <Balance className={styles.balance} value="37.8" background /> vs.
            Sep 8, 2021
          </div>
        </div>
        <Chart />
        <Users className={styles.users} />
      </div>
    </Card>
  );
};

export default Overview;
