import TextInput from "../../../components/TextInput/TextInput";
import Title from "../../../components/Title/Title";

const SizeRoom = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <Title title="Kích thước phòng" xxl />
      <TextInput type="number" className="w-full" onChange={onChange} value={value} />
    </div>
  );
};

export default SizeRoom;
