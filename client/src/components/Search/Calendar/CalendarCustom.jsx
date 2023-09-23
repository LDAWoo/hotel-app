import { useCallback, useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import useRegisterDateStore from "../../../hooks/useRegisterDateStore";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import { getLocale } from "../../Locale/Locale";
import "./CalendarCustom.scss";

function CalendarCustom() {
  const { startDate, endDate, setStartDate, setEndDate } =
    useRegisterDateStore();
  const { width } = useRegisterWindowSizeStore();
  const [direction, setDirection] = useState("horizontal");
  const locale = getLocale();

  const handleDateChange = useCallback((ranges) => {
    setEndDate(ranges.selection.endDate);
    setStartDate(ranges.selection.startDate);
  }, []);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  useEffect(() => {
    width < 900 ? setDirection("vertical") : setDirection("horizontal");
  }, [width]);

  return (
    <DateRangePicker
      ranges={[selectionRange]}
      minDate={new Date()}
      rangeColors={["#006CE4"]}
      onChange={handleDateChange}
      months={1}
      direction={direction}
      showDateDisplay={false}
      showMonthArrow={true}
      locale={locale}
      inputRanges={[]}
      staticRanges={[]}
      showMonthAndYearPickers={false}
    />
  );
}

export default CalendarCustom;
