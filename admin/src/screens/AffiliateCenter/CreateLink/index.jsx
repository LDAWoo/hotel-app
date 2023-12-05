import React, { useState } from "react";
import styles from "./CreateLink.module.sass";
import cn from "classnames";
import Card from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";
import TextInput from "../../../components/TextInput";
import Icon from "../../../components/Icon";

const options = [
  "Choose your product",
  "Choose your product 1",
  "Choose your product 2",
];

const users = [
  {
    avatar: "/images/content/avatar.jpg",
    icon: "facebook-fill",
  },
  {
    avatar: "/images/content/avatar.jpg",
    icon: "twitter-fill",
  },
];

const CreateLink = ({ className }) => {
  const [sorting, setSorting] = useState(options[0]);

  return (
    <Card
      className={cn(styles.card, className)}
      title="Create a link"
      classTitle="title-blue"
    >
      <div className={styles.create}>
        <div className={styles.fieldset}>
          <div className={styles.title}>
            Promote any product with a simple link
          </div>
          <Dropdown
            className={styles.dropdown}
            classDropdownHead={styles.dropdownHead}
            value={sorting}
            setValue={setSorting}
            options={options}
          />
          <TextInput
            className={styles.field}
            name="link-product"
            type="text"
            placeholder="Or enter a product link"
            required
          />
          <button className={cn("button-small", styles.button)}>Create</button>
        </div>
        <div className={styles.box}>
          <div className={styles.label}>Use this link to promote.</div>
          <TextInput
            className={styles.field}
            name="link-promote"
            type="text"
            placeholder="Enter link promote"
            required
            icon="link"
            copy
          />
        </div>
        <div className={styles.box}>
          <div className={styles.label}>Share to social accounts</div>
          <div className={styles.line}>
            <div className={styles.list}>
              {users.map((x, index) => (
                <div className={styles.avatar} key={index}>
                  <img src={x.avatar} alt="Avatar" />
                  <div className={styles.icon}>
                    <Icon name={x.icon} size="12" />
                  </div>
                </div>
              ))}
            </div>
            <button className={cn("button-small", styles.button)}>
              <span>Share</span>
              <Icon name="arrow-right" size="24" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreateLink;
