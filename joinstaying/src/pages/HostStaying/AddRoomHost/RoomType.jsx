import TextInput from "../../../components/TextInput/TextInput";
import PropTypes from "prop-types";
import Title from "../../../components/Title/Title";
import SelectInput from "../../../components/SelectInput/SelectInput";
function RoomType({ data, valueSelected, handleSelected, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <Title title="What type of unit is this?" xxl />
        <SelectInput onChange={handleSelected} value={valueSelected}>
          <option className="text-[14px] text-primary-700 dark:text-white" value="">
            Select room type
          </option>
          {data.map((roomType, index) => (
            <option key={index} className="text-[14px] text-primary-700 dark:text-white" value={roomType?.id}>
              {roomType?.name}
            </option>
          ))}
        </SelectInput>
      </div>

      <Title title="Số phòng" xxl />
      <TextInput type="number" onChange={onChange} value={value} />
    </div>
  );
}

RoomType.propTypes = {
  data: PropTypes.array,
};

export default RoomType;
