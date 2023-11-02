import PropTypes from "prop-types";
import Title from "../../../components/Title/Title";
import IncreaseAndDecreaseValue from "../../ValueIncreaseAndDecrease/IncreaseAndDecreaseValue";
function GuestItem({
  title,
  value,
  minValue,
  maxValue,
  handleMinus,
  handlePlus,
}) {
  return (
    <div className='w-full flex items-center h-[42px]'>
      <div
        className={`flex-1 h-full flex items-center justify-start dark:text-white font-normal `}
      >
        <Title title={title} xl fontMedium />
      </div>
      <div className='flex flex-row items-center h-full justify-center'>
        <div className='flex items-center justify-center h-full border-[1px] rounded-lg dark:border-primary-500 gap-3'>
          <IncreaseAndDecreaseValue
            value={value}
            minValue={minValue}
            maxValue={maxValue}
            handleMinus={handleMinus}
            handlePlus={handlePlus}
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
