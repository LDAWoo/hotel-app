import Button from "../../../../../components/Buttons/Button";
import { MdLocationOn } from "react-icons/md";
function Location() {
  return (
    <div className='w-full mb-2'>
      <div className='flex items-center cursor-pointer'>
        <div className='text-hotel-50 hover:text-hotel-100'>
          <MdLocationOn size={24} />
        </div>
        <div>
          <span className='overflow-hidden whitespace-nowrap text-ellipsis dark:text-primary-50'>
            100 Cô Giang 34, District 1, Ho Chi Minh City, Vietnam
          </span>
        </div>
      </div>
    </div>
  );
}

export default Location;
