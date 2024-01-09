import useRegisterFilter from "../../../../../../hooks/Analytics/Report/SalesStatistics/useRegisterFilter";
import Header from "./Header";
import Table from "./Table";
const items = [
  {
    id: 1,
    value: "nights",
    name: "Room night",
    color: "bg-[#0896FF]",
  },
  {
    id: 2,
    value: "money",
    name: "Average daily rate in VND",
    color: "bg-[#EF6C0A]",
  },
];
function Content({ data }) {
  const { viewBy } = useRegisterFilter();
  return (
    <div className="relative pt-0 pb-0 pr-[50px] pl-[50px]">
      <div className="relative mb-4 mt-2">
        <Header items={items} />
        <Table data={data} type={viewBy} items={items} />
      </div>
    </div>
  );
}

export default Content;
