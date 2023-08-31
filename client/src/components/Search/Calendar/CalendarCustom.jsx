import { useCallback } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import useRegisterDateStore from "../../../hooks/useRegisterDateStore";
import { getLocale } from "../../Locale/Locale";

function CalendarCustom() {
  const { startDate, endDate, setStartDate, setEndDate } =
    useRegisterDateStore();
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

  return (
    <DateRangePicker
      ranges={[selectionRange]}
      minDate={new Date()}
      rangeColors={["#006CE4"]}
      onChange={handleDateChange}
      months={2}
      direction='horizontal'
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
