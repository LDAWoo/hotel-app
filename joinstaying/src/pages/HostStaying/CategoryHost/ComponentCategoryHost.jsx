import PropTypes from "prop-types";
import ItemCategoryHost from "./ItemCategoryHost";

import { useTranslation } from "react-i18next";

function ComponentCategoryHost({ onClick }) {
  const { t } = useTranslation();
  const CategoriesHost = [
    {
      id: 1,
      name: t("HostStaying.Category.items.item1.name"),
      keys: "apartment",
      image: "/images/apartment.png",
      description: t("HostStaying.Category.items.item1.description"),
    },
    {
      id: 2,
      name: t("HostStaying.Category.items.item2.name"),
      keys: "listing",
      image: "/images/home.png",
      description: t("HostStaying.Category.items.item2.description"),
    },
    {
      id: 3,
      name: t("HostStaying.Category.items.item3.name"),
      keys: "property",
      image: "/images/hotel.png",
      description: t("HostStaying.Category.items.item3.description"),
    },
    {
      id: 4,
      name: t("HostStaying.Category.items.item4.name"),
      keys: "places",
      image: "/images/places.png",
      description: t("HostStaying.Category.items.item4.description"),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 2md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-5 p-4">
      {CategoriesHost.map((item, index) => (
        <ItemCategoryHost key={index} name={item?.name} img={item?.image} description={item?.description} keys={item?.keys} onClick={onClick} />
      ))}
    </div>
  );
}

ComponentCategoryHost.propTypes = {
  onClick: PropTypes.func,
};

export default ComponentCategoryHost;
