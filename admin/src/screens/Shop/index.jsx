import React, { useState } from "react";
import cn from "classnames";
import styles from "./Shop.module.sass";
import Profile from "./Profile";
import Settings from "./Settings";
import Card from "../../components/Card";
import Dropdown from "../../components/Dropdown";
import Filters from "../../components/Filters";
import Product from "../../components/Product";
import Follower from "./Follower";

// data
import { products } from "../../mocks/products";
import { followers } from "../../mocks/followers";

const navigation = ["Products", "Followers", "Following"];
const intervals = ["Most recent", "Most new", "Most popular"];

const Shop = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sorting, setSorting] = useState(intervals[0]);

  return (
    <>
      <div className={styles.shop}>
        <div className={styles.background}>
          <img src="/images/content/bg-shop.jpg" alt="Background" />
        </div>
        <Card className={styles.card}>
          <Profile />
          <div className={styles.control}>
            <div className={styles.nav}>
              {navigation.map((x, index) => (
                <button
                  className={cn(styles.link, {
                    [styles.active]: index === activeIndex,
                  })}
                  onClick={() => setActiveIndex(index)}
                  key={index}
                >
                  {x}
                </button>
              ))}
            </div>
            <div className={styles.dropdownBox}>
              <Dropdown
                className={styles.dropdown}
                classDropdownHead={styles.dropdownHead}
                value={sorting}
                setValue={setSorting}
                options={intervals}
                small
              />
            </div>
            <Filters
              className={styles.filters}
              title="Showing 9 of 32 products"
            >
              <Settings />
            </Filters>
          </div>
          <div className={styles.wrap}>
            {activeIndex === 0 && (
              <>
                <div className={styles.products}>
                  {products.map((x, index) => (
                    <Product
                      className={styles.product}
                      item={x}
                      key={index}
                      withoutСheckbox
                    />
                  ))}
                </div>
                <div className={styles.foot}>
                  <button
                    className={cn("button-stroke button-small", styles.button)}
                  >
                    Load more
                  </button>
                </div>
              </>
            )}
            {activeIndex === 1 && (
              <>
                <div className={styles.followers}>
                  {followers.map((x, index) => (
                    <Follower
                      className={styles.follower}
                      item={x}
                      key={index}
                      followers
                    />
                  ))}
                </div>
                <div className={styles.foot}>
                  <button
                    className={cn("button-stroke button-small", styles.button)}
                  >
                    Load more
                  </button>
                </div>
              </>
            )}
            {activeIndex === 2 && (
              <>
                <div className={styles.followers}>
                  {followers.map((x, index) => (
                    <Follower
                      className={styles.follower}
                      item={x}
                      key={index}
                    />
                  ))}
                </div>
                <div className={styles.foot}>
                  <button
                    className={cn("button-stroke button-small", styles.button)}
                  >
                    Load more
                  </button>
                </div>
              </>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

export default Shop;
