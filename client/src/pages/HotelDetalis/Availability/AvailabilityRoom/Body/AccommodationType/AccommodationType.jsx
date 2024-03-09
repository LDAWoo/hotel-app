import RoomType from "./RoomType";
import PropTypes from "prop-types";
const AccommodationType = ({ data }) => {
  return (
    <div className='flex flex-col gap-1'>
      {/* RoomType */}
      <RoomType title={data?.roomNameCustom || data?.bedName} />
      {/* RoomTypeBed */}

      {/*Room Facilities*/}
    </div>
  );
};

AccommodationType.propTypes = {
  data: PropTypes.object,
};

export default AccommodationType;
