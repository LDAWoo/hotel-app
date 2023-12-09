import FilterStatus from "../FilterStatus";
import TableProperties from "../TableProperties";

function ComponentProperties() {
  return (
    <div className="flex flex-col gap-4">
      <FilterStatus />
      <TableProperties />
    </div>
  );
}

export default ComponentProperties;
