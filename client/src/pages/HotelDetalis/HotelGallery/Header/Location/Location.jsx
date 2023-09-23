import { MdLocationOn } from "react-icons/md";
import Icon from "../../../../../components/Icon/Icon";
import Title from "../../../../../components/Title/Title";
function Location() {
  return (
    <div className='w-full mb-2'>
      <div className='flex items-center cursor-pointer'>
        <div className='text-hotel-50 hover:text-hotel-100'>
          <Icon icon={MdLocationOn} size={24} />
        </div>
        <Title
          title='100 Cô Giang 34, District 1, Ho Chi Minh City, Vietnam'
          colorTitle='dark:text-primary-50'
          xl
          nowrap={false}
        />
      </div>
    </div>
  );
}

export default Location;
