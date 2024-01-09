import TableReport from "../../../../../../../components/TableReport";

function Table({ data, items, type }) {
  return (
    <div className="max-w-full relative">
      <TableReport data={data} type={type} items={items} />
    </div>
  );
}

export default Table;
