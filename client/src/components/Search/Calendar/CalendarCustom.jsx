import i18next from "i18next";
import { useCallback } from "react";
import { DateRangePicker } from "react-date-range";
import * as locales from "react-date-range/dist/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import useRegisterDateStore from "../../../hooks/useRegisterDateStore";
import { nameMapper } from "./NameMapper";

function CalendarCustom() {
  const currentLocal = i18next.language;
  const languageCode = currentLocal.split("-")[0];
  const localeKey = languageCode.toLowerCase();
  const { startDate, endDate, setStartDate, setEndDate } =
    useRegisterDateStore();

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
      locale={locales[nameMapper[localeKey]]}
      inputRanges={[]}
      staticRanges={[]}
      showMonthAndYearPickers={false}
    />
  );
}

export default CalendarCustom;
