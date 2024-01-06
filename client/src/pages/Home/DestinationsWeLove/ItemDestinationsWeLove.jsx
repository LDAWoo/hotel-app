import { Link } from "react-router-dom";
import Title from "../../../components/Title/Title";
import PropTypes from "prop-types";

const ItemDestinationWeLove = ({ item }) => {
  return (
    <div>
      {item?.map((x, index) => (
        <div key={index}>
          <Link>
            <Title
              title={x?.name}
              fontMedium
              className='hover:underline dark:text-white'
              xxl
              nowrap={false}
            />
          </Link>
          <div>
            <Title
              title={`${x?.quantityRoom} properties`}
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
