import useRegisterFilter from "../../../../../../hooks/Analytics/Report/SalesStatistics/useRegisterFilter";
import Header from "./Header";
import Table from "./Table";

function Content({ data }) {
  const { viewBy } = useRegisterFilter();
  return (
    <div className="relative pt-0 pb-0 pr-0 2md:pr-[50px] pl-0 2md:pl-[50px]">
      <div className="relative mb-4 mt-2">
        <Header />
        <Table data={data} type={viewBy} />
      </div>
    </div>
  );
}

export default Content;
