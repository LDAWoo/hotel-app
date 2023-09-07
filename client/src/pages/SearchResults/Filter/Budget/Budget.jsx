import useRegisterBudgetRangeSlider from "../../../../hooks/useRegisterBudgetRangeSlider";
import FilterCard from "../FilterCard";
import Histogram from "./Histogram/Histogram";
import RangeSlider from "./RangeSlider/RangeSlider";

function Budget() {
  const { values } = useRegisterBudgetRangeSlider();
  const minValue = values[0].toLocaleString();
  const maxValue = values[1].toLocaleString();

  return (
    <>
      <FilterCard
        title='Your Budget (per night)'
        componentDiff={
          <div className='flex w-full dark:text-white whitespace-nowrap text-[14px] mb-1'>
            <span>
              VND&nbsp;{minValue} - VND&nbsp;{maxValue}+
            </span>
          </div>
        }
        item={[<Histogram key={1} />, <RangeSlider key={2} />]}
      />
    </>
  );
}

export default Budget;
