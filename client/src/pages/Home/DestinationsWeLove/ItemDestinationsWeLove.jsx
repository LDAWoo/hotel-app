import { Link } from "react-router-dom";
import Title from "../../../components/Title/Title";

const ItemDestinationWeLove = ({ name, properties }) => {
  return (
    <div>
      <Link>
        <Title
          title={name}
          fontMedium
          className='hover:underline dark:text-white'
          xxl
          nowrap={false}
        />
      </Link>
      <div>
        <Title
          title={`${properties} properties`}
          xl
          className='dark:text-primary-50'
        />
      </div>
    </div>
  );
};
export default ItemDestinationWeLove;
