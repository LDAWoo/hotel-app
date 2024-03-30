import Icon from "../../../../../../components/Icon/Icon";
import { BiSolidUser } from "react-icons/bi";
import PropTypes from "prop-types";
import Title from "../../../../../../components/Title/Title";

const Person = ({ data }) => {
  return (
    <div className='flex gap-[1px] flex-wrap dark:text-white'>
      <div className='flex flex-row gap-[2px]'>
        <Icon icon={BiSolidUser} size={16} />
        <span className='text-[12px]'>x</span>
        <Title large title={data?.maxOccupancy && data?.maxOccupancy} />
      </div>
    </div>
  );
};

Person.propTypes = {
  data: PropTypes.array,
};

export default Person;
