import { memo } from "react";
import Title from "../../../../../../components/Title/Title";
import Icon from "../../../../../../components/Icon/Icon";
import useRegisterSortById from "../../../../../../hooks/Home/TabProperties/Operations/useRegisterSortById";
import { MdOutlineArrowDownward } from "react-icons/md";
import PropTypes from "prop-types";

function THead({ data }) {
  const { sortBy, isIncrease, setSortBy } = useRegisterSortById();

  const handleSort = (by) => {
    if (sortBy === by) {
      setSortBy(by, !isIncrease);
    } else {
      setSortBy(by, false);
    }
  };

  return (
    <thead className="hidden 2md:table-row-group box-border">
      <tr className="table-row m-0 border relative text-[14px] bg-white">
        {data.map((cell, index) => (
          <th key={index} className={`${index === 0 ? "pl-8 pt-4 pb-4 pr-3" : "pt-4 pb-4 pr-3 pl-3"} text-left font-[700] table-cell border-0 align-top`}>
            <div>
              {cell?.sortBy && cell?.status ? (
                <button type="button" className="flex items-center gap-1" onClick={() => handleSort(cell?.sortBy)}>
                  {cell?.name}
                  {sortBy === cell?.sortBy ? <Icon icon={MdOutlineArrowDownward} size={18} classIcon={`${isIncrease ? "rotate-0" : "rotate-180"} text-primary-100`} /> : <div></div>}
                </button>
              ) : (
                <Title title={cell?.name} />
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}

THead.propTypes = {
  data: PropTypes.array,
};

export default memo(THead);
