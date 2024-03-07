import { useTranslation } from "react-i18next";
import TextError from "../../../../components/TextError/TextError";
import TextInput from "../../../../components/TextInput/TextInput";
import Title from "../../../../components/Title/Title";
import PropTypes from "prop-types";

const SizeRoom = ({ value, error = "", onChange, ...props }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2">
      <Title title={t("HostStaying.CreateRoom.items.composition.information.roomSize")} xl fontMedium />
      <TextInput type="text" className="w-full" {...props} sizeIcon={20} error={error.length > 0} min={0} onChange={onChange} value={value} />
      <TextError error={error} />
    </div>
  );
};

SizeRoom.propTypes = {
  value: PropTypes.number,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

export default SizeRoom;
