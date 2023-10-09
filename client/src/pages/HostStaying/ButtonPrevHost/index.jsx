import PropTypes from "prop-types";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Button from "../../../components/Buttons/Button";

const ButtonPrevHost = ({ onClick }) => {
  return (
    <div className='w-[20%]'>
      <Button
        border
        icon={MdKeyboardArrowLeft}
        size={28}
        classIcon='translate-x-1'
        className='pt-2 pb-2 w-full'
        onClick={onClick}
      />
    </div>
  );
};

ButtonPrevHost.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPrevHost;
