import React, { useState } from "react";
import styles from "./Sidebar.module.sass";
import { Link, NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import Icon from "../Icon";
import Theme from "../Theme";
import Dropdown from "./Dropdown";
import Help from "./Help";
import Image from "../Image";

const navigation = [
  {
    title: "Home",
    icon: "home",
    url: "/",
  },
  {
    title: "Products",
    slug: "products",
    icon: "diamond",
    add: true,
    dropdown: [
      {
        title: "Dashboard",
        url: "/products/dashboard",
      },
      {
        title: "Drafts",
        url: "/products/drafts",
        counter: "2",
        colorCounter: "#FFBC99",
      },
      {
        title: "Released",
        url: "/products/released",
      },
      {
        title: "Comments",
        url: "/products/comments",
      },
      {
        title: "Scheduled",
        url: "/products/scheduled",
        counter: "8",
        colorCounter: "#B5E4CA",
      },
    ],
  },
  {
    title: "Customers",
    slug: "customers",
    icon: "profile-circle",
    dropdown: [
      {
        title: "Overview",
        url: "/customers/overview",
      },
      {
        title: "Customer list",
        url: "/customers/customer-list",
      },
    ],
  },
  {
    title: "Shop",
    icon: "store",
    url: "/shop",
  },
  {
    title: "Income",
    slug: "income",
    icon: "pie-chart",
    dropdown: [
      {
        title: "Earning",
        url: "/income/earning",
      },
      {
        title: "Refunds",
        url: "/income/refunds",
      },
      {
        title: "Payouts",
        url: "/income/payouts",
      },
      {
        title: "Statements",
        url: "/income/statements",
      },
    ],
  },
  {
    title: "Promote",
    icon: "promotion",
    url: "/promote",
  },
];

const Sidebar = ({ className, onClose }) => {
  const [visibleHelp, setVisibleHelp] = useState(false);
  const [visible, setVisible] = useState(false);

  const { pathname } = useLocation();

  return (
    <>
      <div
        className={cn(styles.sidebar, className, {
          [styles.active]: visible,
        })}
      >
        <button className={styles.close} onClick={onClose}>
          <Icon name="close" size="24" />
        </button>
        <Link className={styles.logo} to="/" onClick={onClose}>
          <Image className={styles.pic} src="/images/logo-dark.png" srcDark="/images/logo-light.png" alt="Core" />
        </Link>
        <div className={styles.menu}>
          {navigation.map((x, index) =>
            x.url ? (
              <NavLink
                className={cn(styles.item, {
                  [styles.active]: pathname === x.url,
                })}
                to={x.url}
                key={index}
                onClick={onClose}
              >
                <Icon name={x.icon} size="24" />
                {x.title}
              </NavLink>
            ) : (
              <Dropdown className={styles.dropdown} visibleSidebar={visible} setValue={setVisible} key={index} item={x} onClose={onClose} />
            )
          )}
        </div>
        <button className={styles.toggle} onClick={() => setVisible(!visible)}>
          <Icon name="arrow-right" size="24" />
          <Icon name="close" size="24" />
        </button>
        <div className={styles.foot}>
          <button className={styles.link} onClick={() => setVisibleHelp(true)}>
            <Icon name="help" size="24" />
            Help & getting started
            <div className={styles.counter}>8</div>
          </button>
          <Theme className={styles.theme} visibleSidebar={visible} />
        </div>
      </div>
      <Help visible={visibleHelp} setVisible={setVisibleHelp} onClose={onClose} />
      <div className={cn(styles.overlay, { [styles.active]: visible })} onClick={() => setVisible(false)}></div>
    </>
  );
};

export default Sidebar;
