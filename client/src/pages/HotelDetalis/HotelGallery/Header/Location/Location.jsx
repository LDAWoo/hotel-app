import { MdLocationOn } from "react-icons/md";
import Icon from "../../../../../components/Icon/Icon";
import Title from "../../../../../components/Title/Title";
import PropType from "prop-types";

function Location({ data }) {
  const location =
    data?.streetAddress +
    ", " +
    data?.districtAddress +
    ", " +
    data?.city +
    ", " +
    data?.country;

  return (
    <div className='w-full mb-2'>
      <div className='flex items-center gap-1'>
        <div className='text-hotel-50 hover:text-hotel-100'>
          <Icon icon={MdLocationOn} size={24} />
        </div>
        <Title
          title={location}
          className='dark:text-primary-50'
          xl
          nowrap={false}
        />
      </div>
    </div>
  );
}

Location.propTypes = {
  data: PropType.object.isRequired,
};

export default Location;
