import React from "react";
import styles from "./Customers.module.sass";
import Overview from "./Overview";
import TrafficChannel from "./TrafficChannel";
import ActiveCustomers from "./ActiveCustomers";
import ShareProducts from "./ShareProducts";
import RefundRequests from "../../components/RefundRequests";
import TopDevice from "./TopDevice";
import TopCountry from "./TopCountry";
import Message from "./Message";
import NewCustomer from "./NewCustomer";

const Customers = () => {
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <Overview className={styles.card} />
        <TrafficChannel className={styles.card} />
        <ActiveCustomers className={styles.card} />
        <ShareProducts className={styles.card} />
      </div>
      <div className={styles.col}>
        <RefundRequests
          className={styles.card}
          title="Refund requests"
          classTitle="title-red"
        />
        <TopDevice className={styles.card} />
        <TopCountry className={styles.card} />
        <Message className={styles.card} />
        <NewCustomer className={styles.card} />
      </div>
    </div>
  );
};

export default Customers;
