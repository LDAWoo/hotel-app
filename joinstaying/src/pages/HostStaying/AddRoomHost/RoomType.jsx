import TextInput from "../../../components/TextInput/TextInput";
import PropTypes from "prop-types";
function RoomType({ data }) {
  return (
    <div>
      {data &&
        data.map((item, index) => (
          <TextInput
            key={index}
            type='number'
            classInput='w-20 pl-1 pt-1 pb-1 text-primary-700 border-[2px] focus:border-hotel-75 dark:border-primary-500 focus:outline-none dark:focus:border-hotel-200 rounded-md dark:bg-primary-700 dark:border-primary-500 dark:text-white'
            classBorder
          />
        ))}
    </div>
  );
}

RoomType.propTypes = {
  data: PropTypes.array,
};

export default RoomType;
