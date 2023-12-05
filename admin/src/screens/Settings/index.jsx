import React, { useState, useRef } from "react";
import cn from "classnames";
import styles from "./Settings.module.sass";
import TooltipGlodal from "../../components/TooltipGlodal";
import Dropdown from "../../components/Dropdown";
import ProfileInformation from "./ProfileInformation";
import Login from "./Login";
import Notifications from "./Notifications";
import Payment from "./Payment";

const Settings = () => {
  const navigation = [
    {
      title: "Basics",
      action: () =>
        scrollToProfile.current.scrollIntoView({ behavior: "smooth" }),
    },
    {
      title: "Account",
      action: () =>
        scrollToLogin.current.scrollIntoView({ behavior: "smooth" }),
    },
    {
      title: "Notifications",
      action: () =>
        scrollToNotifications.current.scrollIntoView({ behavior: "smooth" }),
    },
    {
      title: "Payment",
      action: () =>
        scrollToPayment.current.scrollIntoView({ behavior: "smooth" }),
    },
  ];
  const options = [];
  navigation.map((x) => options.push(x.title));
  const [activeTab, setActiveTab] = useState(options[0]);

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollToProfile = useRef(null);
  const scrollToLogin = useRef(null);
  const scrollToNotifications = useRef(null);
  const scrollToPayment = useRef(null);

  const handleClick = (x, index) => {
    setActiveIndex(index);
    x.action();
  };
  return (
    <>
      <div className={styles.settings}>
        <div className={styles.menu}>
          {navigation.map((x, index) => (
            <button
              className={cn(styles.button, {
                [styles.active]: activeIndex === index,
              })}
              key={index}
              onClick={() => handleClick(x, index)}
            >
              {x.title}
            </button>
          ))}
        </div>
        <div className={styles.wrapper}>
          <Dropdown
            className={styles.dropdown}
            classDropdownHead={styles.dropdownHead}
            value={activeTab}
            setValue={setActiveTab}
            options={options}
          />
          <div className={styles.list}>
            <div
              className={cn(styles.item, {
                [styles.active]: activeTab === options[0],
              })}
            >
              <div className={styles.anchor} ref={scrollToProfile}></div>
              <ProfileInformation />
            </div>
            <div
              className={cn(styles.item, {
                [styles.active]: activeTab === options[1],
              })}
            >
              <div className={styles.anchor} ref={scrollToLogin}></div>
              <Login />
            </div>
            <div
              className={cn(styles.item, {
                [styles.active]: activeTab === options[2],
              })}
            >
              <div className={styles.anchor} ref={scrollToNotifications}></div>
              <Notifications />
            </div>
            <div
              className={cn(styles.item, {
                [styles.active]: activeTab === options[3],
              })}
            >
              <div className={styles.anchor} ref={scrollToPayment}></div>
              <Payment />
            </div>
          </div>
          <button className={cn("button", styles.button)}>Save</button>
        </div>
      </div>
      <TooltipGlodal />
    </>
  );
};

export default Settings;
