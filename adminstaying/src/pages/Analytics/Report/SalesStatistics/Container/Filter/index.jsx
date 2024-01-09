import Button from "../../../../../../components/Buttons/Button";
import Select from "../../../../../../components/Select";
import Title from "../../../../../../components/Title/Title";
import useRegisterFilter, { maxDate } from "../../../../../../hooks/Analytics/Report/SalesStatistics/useRegisterFilter";
import FilterDate from "./FilterDate";

const itemsCompare = [
  {
    id: 1,
    title: "None",
    value: "none",
  },
  {
    id: 2,
    title: "Last year",
    value: "last_year",
  },
];

const itemsViewBy = [
  {
    id: 1,
    title: "Days",
    value: "days",
  },
  {
    id: 2,
    title: "Weeks",
    value: "weeks",
  },
  {
    id: 3,
    title: "Months",
    value: "months",
  },
];

function Filter() {
  const { compareWith, viewBy, startDate, endDate, setState } = useRegisterFilter();

  const setStartDate = (date) => {
    setState("startDate", date);
  };

  const setEndDate = (date) => {
    setState("endDate", date);
  };

  const handleCompareWith = (e) => {
    setState("compareWith", e.target.value);
  };

  const handleViewBy = (e) => {
    setState("viewBy", e.target.value);
  };

  return (
    <div className="flex flex-col 2md:flex-row mb-4 items-start gap-4 2md:items-center">
      <div className="flex flex-col 2md:flex-row gap-4 2md:flex-1 w-full">
        <div className="flex flex-col gap-2">
          <Title title="Compare with" xl />
          <Select value={compareWith} data={itemsCompare} onChange={handleCompareWith} />
        </div>
        <div className="flex flex-col gap-2">
          <Title title="View by" xl />
          <Select value={viewBy} data={itemsViewBy} onChange={handleViewBy} />
        </div>
      </div>

      <div className="flex flex-col 2md:flex-row gap-4">
        <FilterDate title="From" date={startDate} maxDate={maxDate} setDate={setStartDate} />
        <FilterDate title="To" date={endDate} maxDate={maxDate} setDate={setEndDate} />

        <div className="flex flex-col">
          <div className="mb-auto"></div>
          <Button title="Apply" background className="p-2 rounded-sm" />
        </div>
      </div>
    </div>
  );
}

export default Filter;
