import TableReport from "../../../../../../../components/TableReport";

function Table({ data, type }) {
  return (
    <div className="max-w-full relative">
      <TableReport data={data} type={type} />
    </div>
  );
}

export default Table;
