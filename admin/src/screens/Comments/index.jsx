import React, { useState } from "react";
import cn from "classnames";
import styles from "./Comments.module.sass";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Panel from "./Panel";
import Table from "./Table";

// data
import { comments } from "../../mocks/comments";

const Comments = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <>
      <Card
        className={styles.card}
        classCardHead={styles.head}
        title="Product comments"
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
          <Table items={comments} />
        </div>
      </Card>
      <Panel />
    </>
  );
};

export default Comments;
