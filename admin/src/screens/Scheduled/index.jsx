import React, { useState } from "react";
import cn from "classnames";
import styles from "./Scheduled.module.sass";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Table from "../../components/Table";
import Panel from "./Panel";

// data
import { products } from "../../mocks/products";

const Scheduled = () => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        alert();
    };

    return (
        <>
            <Card
                className={styles.card}
                classCardHead={styles.head}
                title="Products"
                classTitle={cn("title-purple", styles.title)}
                head={
                    <Form
                        className={styles.form}
                        value={search}
                        setValue={setSearch}
                        onSubmit={() => handleSubmit()}
                        placeholder="Search product"
                        type="text"
                        name="search"
                        icon="search"
                    />
                }
            >
                <div className={styles.wrapper}>
                    <Table items={products} title="Scheduled for" />
                </div>
            </Card>
            <Panel />
        </>
    );
};

export default Scheduled;
