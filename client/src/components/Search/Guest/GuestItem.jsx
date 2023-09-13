import PropTypes from "prop-types";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import GuestButton from "./GuestButton";
import Title from "../../../components/Title/Title";
function GuestItem({
  title,
  value,
  minValue,
  maxValue,
  handleMinus,
  handlePlus,
}) {
  return (
    <div className='w-full flex items-center h-[42px] '>
      <div
        className={`flex-1 h-full flex items-center justify-start dark:text-white font-normal `}
      >
        <Title title={title} xl fontMedium />
      </div>
      <div className='flex flex-row items-center h-full justify-center'>
        <div className='flex items-center justify-center h-full border-[1px] rounded-lg dark:border-hotel-50 gap-3'>
          <GuestButton
            icon={BiMinus}
            disable={value > minValue ? false : true}
            onClick={handleMinus}
          />
          <span className='flex items-center justify-center dark:text-white font-medium min-w-[20px] max-w-[25px]'>
            <Title title={value} large />
          </span>
          <GuestButton
            disable={value === maxValue ? true : false}
            icon={AiOutlinePlus}
            onClick={handlePlus}
          />
        </div>
      </div>
    </div>
  );
}

GuestItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  handleMinus: PropTypes.func.isRequired,
  handlePlus: PropTypes.func.isRequired,
};

export default GuestItem;
