import React, { useState } from "react";
import cn from "classnames";
import styles from "./ShareProducts.module.sass";
import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import Icon from "../../../components/Icon";
import Product from "../../../components/Product";

// data
import { products } from "../../../mocks/products";

const socials = [
  {
    title: "Facebook",
    icon: "facebook",
    url: "https://www.facebook.com/ui8.net/",
  },
  {
    title: "Twitter",
    icon: "twitter",
    url: "https://twitter.com/ui8",
  },
  {
    title: "Instagram",
    icon: "instagram",
    url: "https://www.instagram.com/ui8net/",
  },
];

const ShareProducts = ({ className }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (id) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== id));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, id]);
    }
  };

  return (
    <Card
      className={cn(styles.card, className)}
      title="Share your products"
      classTitle={cn("title-blue", styles.cardTitle)}
      classCardHead={styles.cardHead}
      head={
        <Link
          className={cn("button-stroke button-small", styles.button)}
          to="/promote"
        >
          <span>Go to promote</span>
          <Icon name="promotion" size="24" />
        </Link>
      }
    >
      <div className={styles.section}>
        <div className={styles.list}>
          {products.map(
            (x, index) =>
              index < 2 && (
                <Product
                  className={styles.product}
                  value={selectedFilters.includes(x.id)}
                  onChange={() => handleChange(x.id)}
                  item={x}
                  key={index}
                  released
                  withoutСheckbox
                />
              )
          )}
        </div>
        <div className={styles.info}>
          50% of new customers explore products because the author sharing the
          work on the social media network. Gain your earnings right now!{" "}
          <span role="img" aria-label="fire">
            🔥
          </span>
        </div>
        <div className={styles.btns}>
          {socials.map((x, index) => (
            <a
              className={cn("button-stroke", styles.button)}
              href={x.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Icon name={x.icon} size="24" />
              <span>{x.title}</span>
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ShareProducts;
