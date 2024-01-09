import Icon from "../../../../../components/Icon/Icon";
import Title from "../../../../../components/Title/Title";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { TfiHelpAlt } from "react-icons/tfi";
import TextInput from "../../../../../components/TextInput/TextInput";
import PropTypes from "prop-types";

function QuantityRoomAndBath({ data }) {
  return (
    <div className='flex flex-col gap-4'>
      <Title title='Quadruple Room with Bathroom' fontBold extraLarge4 />

      <div className='flex items-center gap-1'>
        <Icon icon={MdOutlineFamilyRestroom} size={16} />
        <Title title='Guests:' fontBold xl />
        <Title title={`${data?.adults} adults, ${data?.children} child`} xl />
        <Icon icon={TfiHelpAlt} size={16} classIcon='text-hotel-50' />
        {/* facility */}
      </div>

      <div className='flex flex-col gap-1'>
        <Title title='Full guest name' fontBold xl />
        <TextInput type='text' placeholder='First name, last name' />
      </div>
    </div>
  );
}

QuantityRoomAndBath.propTypes = {
  data: PropTypes.object,
};

export default QuantityRoomAndBath;
