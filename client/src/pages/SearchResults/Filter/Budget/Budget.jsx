import { useEffect } from "react";
import useRegisterBudgetRangeSlider from "../../../../hooks/useRegisterBudgetRangeSlider";
import FilterCard from "../FilterCard";
import Histogram from "./Histogram/Histogram";
import RangeSlider from "./RangeSlider/RangeSlider";
import { useLocation, useNavigate } from "react-router-dom";
import useDebounced from "../../../../hooks/useDebounced";
import { useTranslation } from "react-i18next";

function Budget() {
  const { values } = useRegisterBudgetRangeSlider();
  const minValue = values[0].toLocaleString();
  const maxValue = values[1].toLocaleString();
  const location = useLocation();
  const navigate = useNavigate();
  const debouncedValues = useDebounced(values, 2000);
  const {t} = useTranslation()
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("min_price", debouncedValues[0]);
    searchParams.set("max_price", debouncedValues[1]);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  }, [debouncedValues]);

  return (
    <>
      <FilterCard
        title={t("SearchResults.filters.budgets.title")}
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
