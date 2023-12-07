import Icon from "../../../../../components/Icon/Icon";
import Title from "../../../../../components/Title/Title";
import useRegisterSortByValue from "../../../../../hooks/Home/PropertiesNotYet/useRegisterSortByValue";
import { MdOutlineArrowDownward } from "react-icons/md";
const headRow = [
  {
    title: "Name",
    sortBy: "hotelName",
  },
  {
    title: "Location",
    sortBy: "location",
  },
  {
    title: "Registration progress",
    sortBy: "progress",
  },
  {
    title: "Action",
  },
];

function THead() {
  const { isIncrease, setSortBy, sortBy } = useRegisterSortByValue();
  const handleSort = (by) => {
    if (sortBy === by) {
      setSortBy(by, !isIncrease);
    } else {
      setSortBy(by, false);
    }
  };

  return (
    <thead className="hidden 2md:table-row-group box-border">
      <tr className="table-row m-0 border relative text-[14px]">
        {headRow.map((cell, index) => (
          <th key={index} className={`${index === 0 ? "pl-8 pt-4 pb-4 pr-3" : "pt-4 pb-4 pr-3 pl-3"} text-left font-[700] table-cell border-0 align-top`}>
            <div>
              {cell.sortBy ? (
                <button type="button" className="flex items-center gap-1" onClick={() => handleSort(cell?.sortBy)}>
                  {cell.title}
                  {sortBy === cell.sortBy ? <Icon icon={MdOutlineArrowDownward} size={18} classIcon={`${isIncrease ? "rotate-0" : "rotate-180"} text-primary-100`} /> : <div></div>}
                </button>
              ) : (
                <Title title={cell.title} />
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default THead;
