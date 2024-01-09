import { BiMinus } from "react-icons/bi";
import Title from "../Title/Title";
import ButtonValue from "./ButtonValue";
import { AiOutlinePlus } from "react-icons/ai";
import PropTypes from "prop-types";
function IncreaseAndDecreaseValue({
  className,
  value,
  minValue,
  maxValue,
  step,
  handleMinus,
  handlePlus,
  onChange,
}) {
  return (
    <div
      className={`flex items-center justify-center border-[1px] rounded-lg dark:border-primary-500 gap-3 ${
        className ? className : "w-full h-[40px]"
      }`}
    >
      <input
        className='absolute h-0 w-0 pointer-events-none overflow-hidden'
        type='number'
        min={minValue}
        max={maxValue}
        step={step}
        value={value}
        onChange={onChange}
      />
      <ButtonValue
        icon={BiMinus}
        disable={value > minValue ? false : true}
        onClick={handleMinus}
      />
      <span className='flex items-center justify-center dark:text-white font-medium min-w-[20px] max-w-[25px]'>
        <Title title={value} xl />
      </span>
      <ButtonValue
        disable={value === maxValue ? true : false}
        icon={AiOutlinePlus}
        onClick={handlePlus}
      />
    </div>
  );
}

IncreaseAndDecreaseValue.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  handleMinus: PropTypes.func.isRequired,
  handlePlus: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};

export default IncreaseAndDecreaseValue;
