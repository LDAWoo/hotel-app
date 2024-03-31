import { Link } from "react-router-dom";
import Title from "../../../components/Title/Title";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import routesConfig from "../../../configs/routesConfig";
import { format } from "date-fns";
const ItemDestinationWeLove = ({ item }) => {
  const { t } = useTranslation();
  const currentDate = new Date();
  const nextDay = new Date(currentDate);
  nextDay.setDate(nextDay.getDate() + 1);
  
  return (
    <div>
      {item?.map((x, index) => {
        const url =
          routesConfig.searchResults +
          `?location=${x.name}&checkin=${format(
            new Date(),
            "yyyy-MM-dd",
          )}&checkout=${format(
            nextDay,
            "yyyy-MM-dd",
          )}&group_adults=1&group_children=0&group_rooms=1`;

      return (
        <div key={index}>
          <Link to={url} target="_blank">
            <Title
              title={x?.name}
              fontMedium
              className='hover:underline dark:text-white capitalize'
              xxl
              nowrap={false}
            />
          </Link>
          <div>
            <Title
              title={`${x?.quantityRoom} ${t("Other.properties")}`}
              xl
              className='dark:text-primary-50'
            />
          </div>
        </div>
      )})}
    </div>
  );
};

ItemDestinationWeLove.propTypes = {
  item: PropTypes.array,
};
export default ItemDestinationWeLove;
