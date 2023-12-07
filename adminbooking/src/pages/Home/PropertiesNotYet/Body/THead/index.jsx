import Button from "../../../../../components/Buttons/Button";

const headRow = [
  {
    title: "Name",
  },
  {
    title: "Location",
  },
  {
    title: "Registration progress",
  },
  {
    title: "Action",
  },
];

function THead() {
  return (
    <thead className="hidden 2md:table-row-group box-border">
      <tr className="table-row m-0 border relative text-[14px]">
        {headRow.map((cell, index) => (
          <th key={index} className={`${index === 0 ? "pl-8 pt-4 pb-4 pr-3" : "pt-4 pb-4 pr-3 pl-3"} text-left font-[700] table-cell border-0 align-top`}>
            <div>
              <button type="button">{cell.title}</button>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default THead;
