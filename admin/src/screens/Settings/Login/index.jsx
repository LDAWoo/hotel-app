import React from "react";
import cn from "classnames";
import styles from "./Login.module.sass";
import Item from "../Item";
import TextInput from "../../../components/TextInput";

const Login = ({ className }) => {
  return (
    <Item
      className={cn(styles.card, className)}
      title="Login"
      classTitle="title-purple"
    >
      <div className={styles.fieldset}>
        <TextInput
          className={styles.field}
          label="Old password"
          name="old-password"
          type="password"
          tooltip="Maximum 100 characters. No HTML or emoji allowed"
          required
        />
        <div className={styles.row}>
          <TextInput
            className={styles.field}
            label="New password"
            name="new-password"
            type="password"
            tooltip="Maximum 100 characters. No HTML or emoji allowed"
            required
          />
          <TextInput
            className={styles.field}
            label="Confirm new password"
            name="confirm-password"
            type="password"
            tooltip="Maximum 100 characters. No HTML or emoji allowed"
            required
          />
        </div>
        <button className={cn("button-stroke", styles.button)}>
          Update password
        </button>
      </div>
    </Item>
  );
};

export default Login;
