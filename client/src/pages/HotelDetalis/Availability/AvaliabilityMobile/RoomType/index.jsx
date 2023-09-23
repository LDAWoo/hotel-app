import Title from "../../../../../components/Title/Title";
import PropTypes from "prop-types";

const RoomType = ({ title }) => {
  return (
    <Title
      title={title}
      fontBold
      xl
      nowrap={false}
      colorTitle='underline cursor-pointer text-hotel-100 hover:text-hotel-100/80 duration-200'
    />
  );
};
RoomType.propTypes = {
  title: PropTypes.string,
};

export default RoomType;
