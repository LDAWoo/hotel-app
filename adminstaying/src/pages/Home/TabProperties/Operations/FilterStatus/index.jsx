import Select from "../../../../../components/Select";
import Title from "../../../../../components/Title/Title";
import OptionRight from "./OptionRight";

const items = [
  {
    title: "All properties",
    value: "all-properties",
  },
  {
    title: "Open/bookable",
    value: "open-bookable",
  },
  {
    title: "Closed/not bookable",
    value: "closed-bookable",
  },
];

function FilterStatus() {
  return (
    <div className="flex flex-col gap-2">
      <Title title="Filter status" xl fontMedium />
      <div className="flex flex-col gap-4 2md:flex-row items-start 2md:items-center justify-between">
        <Select data={items} />
        <OptionRight />
      </div>
    </div>
  );
}

export default FilterStatus;
