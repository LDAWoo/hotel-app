import React, { useCallback, useEffect } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import styles from "./ModalProduct.module.sass";
import Icon from "../Icon";
import Product from "./Product";

const ModalProduct = ({ visible, onClose }) => {
  const escFunction = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  useEffect(() => {
    if (visible) {
      const target = document.querySelector("#modal-product");
      disableBodyScroll(target);
    } else {
      clearAllBodyScrollLocks();
    }
  }, [visible]);

  return createPortal(
    visible && (
      <div id="modal-product" className={styles.modal}>
        <div className={styles.control}>
          <Link
            className={cn("button-white", styles.button)}
            to="/products/add"
          >
            Edit product
          </Link>
          <button className={styles.close} onClick={onClose}>
            <Icon name="close" size="20" />
          </button>
        </div>
        <div className={styles.outer}>
          <Product />
        </div>
      </div>
    ),
    document.body
  );
};

export default ModalProduct;
