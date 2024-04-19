import PropTypes from "prop-types";
import { IoIosCheckmark } from "react-icons/io";
import RoomType from "./RoomType";
const AccommodationType = ({ data }) => {
  return (
    <div className='flex flex-col gap-1'>
      {/* RoomType */}
      <RoomType title={data?.roomNameCustom || data?.bedName} />
      {/* RoomTypeBed */}

      {/*Room Facilities*/}
      <ul className="inline-flex flex-col">
        {data?.roomSearchToNameServiceAndAmenities.map((service, index) => (
          <li key={index} className="inline-flex flex-row">
            <span className="inline-block m-[3px_3px_0_0] text-[12px] ">
              <span className="flex items-center">
                <IoIosCheckmark size={22} className="text-success-50"/> {service?.name}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

AccommodationType.propTypes = {
  data: PropTypes.object,
};

export default AccommodationType;
