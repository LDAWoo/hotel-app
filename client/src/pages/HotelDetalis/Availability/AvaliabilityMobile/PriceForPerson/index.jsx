import PropTypes from "prop-types";
import { BiSolidUser } from "react-icons/bi";
import Icon from "../../../../../components/Icon/Icon";
import Title from "../../../../../components/Title/Title";

const PriceForPerson = ({ data }) => {
  return (
    <div className='flex flex-row gap-1 items-center'>
      <Title title='Price for up to: ' large colorTitle='text-primary-700' />
      <div className='flex gap-[1px] flex-wrap'>
        {data?.map((item, index) => (
          <div key={index}>
            <Icon icon={BiSolidUser} size={10} />
            <span className='hidden'>{item?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

PriceForPerson.propTypes = {
  data: PropTypes.array,
};

export default PriceForPerson;
