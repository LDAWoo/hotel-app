import { useEffect, useState } from "react";
import useRegisterFilter from "../../../../../hooks/Analytics/Report/SalesStatistics/useRegisterFilter";
import Content from "./Content";
import Filter from "./Filter";
import { eachDayOfInterval, eachMonthOfInterval, eachWeekOfInterval, endOfWeek, format, startOfWeek, subMonths } from "date-fns";

function Container() {
  const { viewBy, startDate, endDate } = useRegisterFilter();

  const [listDate, setListDate] = useState([]);

  useEffect(() => {
    if (viewBy === "days") {
      const days = eachDayOfInterval({ start: startDate, end: endDate });
      const formattedDays = days.map((date) => format(date, "EEE dd MMM yyyy"));
      setListDate(formattedDays);
    }

    if (viewBy === "months") {
      const months = eachMonthOfInterval({ start: startDate, end: endDate });
      const formattedMonths = months.map((date) => format(date, "MMM yyyy"));
      setListDate(formattedMonths);
    }

    if (viewBy === "weeks") {
      const weeks = eachWeekOfInterval({ start: startDate, end: endDate });
      // const formattedWeeks = weeks.map((date) => format(date, "dd MMM yyyy"));
      const formattedWeeks = weeks.map((week) => {
        const start = format(startOfWeek(week, { weekStartsOn: 0 }), "dd MMM yyyy");
        const end = format(endOfWeek(week, { weekStartsOn: 0 }), "dd MMM yyyy");

        return { start, end };
      });
      console.log(formattedWeeks);

      setListDate(formattedWeeks);
    }
  }, [viewBy, startDate, endDate]);

  console.log(listDate);
  return (
    <div className="bg-white p-4">
      <Filter />
      <Content data={listDate} />
    </div>
  );
}

export default Container;
