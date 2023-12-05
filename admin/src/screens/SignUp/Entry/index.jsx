import React from "react";
import cn from "classnames";
import styles from "./Entry.module.sass";
import TextInput from "../../../components/TextInput";
import Image from "../../../components/Image";

const Entry = ({ onConfirm }) => {
  return (
    <div className={styles.entry}>
      <div className={styles.head}>
        <div className={styles.info}>Sign up with Open account</div>
        <div className={styles.btns}>
          <button className={cn("button-stroke", styles.button)}>
            <img src="/images/content/google.svg" alt="Google" />
            Google
          </button>
          <button className={cn("button-stroke", styles.button)}>
            <Image
              className={styles.pic}
              src="/images/content/apple-dark.svg"
              srcDark="/images/content/apple-light.svg"
              alt="Apple"
            />
            Apple ID
          </button>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.info}>Or continue with email address</div>
        <TextInput
          className={styles.field}
          name="email"
          type="email"
          placeholder="Your email"
          required
          icon="mail"
        />
        <button className={cn("button", styles.button)} onClick={onConfirm}>
          Continue
        </button>
        <div className={styles.note}>
          This site is protected by reCAPTCHA and the Google Privacy Policy.
        </div>
      </div>
    </div>
  );
};

export default Entry;
