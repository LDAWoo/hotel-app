import PropTypes from "prop-types";
import { memo } from "react";
import { MdOutlineArrowDownward } from "react-icons/md";
import Icon from "../../Icon/Icon";
import Title from "../../Title/Title";

function THead({ data, useRegister }) {
  const { sortBy, isIncrease, setSortBy } = useRegister();

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
                  {cell?.id === "genius" ? <div className="bg-hotel-200 text-white text-[10px] font-medium p-[2px] rounded-[2px]">{cell?.name}</div> : <>{cell?.name}</>}

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
  useRegister: PropTypes.func,
};

export default memo(THead);
