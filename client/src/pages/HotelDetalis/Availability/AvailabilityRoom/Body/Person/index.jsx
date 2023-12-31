import Icon from "../../../../../../components/Icon/Icon";
import { BiSolidUser } from "react-icons/bi";
import PropTypes from "prop-types";

const Person = ({ data }) => {
  return (
    <div className='flex gap-[1px] flex-wrap dark:text-white'>
      {Array.from({ length: data?.maxOccupancy })?.map((item, index) => (
        <div key={index}>
          <Icon icon={BiSolidUser} size={16} />
          <span className='hidden'>{item?.name}</span>
        </div>
      ))}
    </div>
  );
};

Person.propTypes = {
  data: PropTypes.array,
};

export default Person;
