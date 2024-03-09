import { Link } from "react-router-dom";
import Title from "../../../components/Title/Title";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const ItemDestinationWeLove = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div>
      {item?.map((x, index) => (
        <div key={index}>
          <Link>
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
      ))}
    </div>
  );
};

ItemDestinationWeLove.propTypes = {
  item: PropTypes.array,
};
export default ItemDestinationWeLove;
