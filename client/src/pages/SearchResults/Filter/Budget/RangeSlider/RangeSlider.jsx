import ReactSlider from "react-slider";
import className from "classnames/bind";
import styles from "./RangeSlider.scss";
import useRegisterBudgetRangeSlider from "../../../../../hooks/useRegisterBudgetRangeSlider";
const cx = className.bind(styles);

function RangeSlider() {
  const { min, max, step, values, setValues } = useRegisterBudgetRangeSlider();
  return (
    <div className='items-center w-full relative text-white bg-hotel-50 mb-5'>
      <ReactSlider
        className={`w-full h-[5px] bg-hotel-50 rounded-lg ${cx("slider")}`}
        thumbClassName='bg-hotel-50 w-[18px] h-[18px] rounded-full -top-[6px] cursor-grab border-none'
        thumbActiveClassName='shadow-[0_0_0_10px_rgb(98,0,238,.2)] border-none'
        min={min}
        max={max}
        step={step}
        value={values}
        onChange={setValues}
      />
    </div>
  );
}

export default RangeSlider;
