import { useEffect, useState } from "react";
import TBodySkeleton from "./Skeleton";
import Td from "./Td";
import PropTypes from "prop-types";

function TBody({ dataHeader, data, showLocation, loading, useRegisterSortById, body }) {
  const Body = body;
  const { sortBy, isIncrease } = useRegisterSortById();
  const [sortData, setSortData] = useState([]);

  useEffect(() => {
    if (!data) return;
    const sortedData = [...data].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return isIncrease ? -1 : 1;
      }

      if (a[sortBy] > b[sortBy]) {
        return isIncrease ? 1 : -1;
      }

      return 0;
    });

    setSortData(sortedData);
  }, [sortBy, isIncrease, data]);

  return (
    <tbody className="relative table-row-group text-[14px] box-border ">
      {loading ? (
        <>
          {Array.from({ length: 2 }).map((_, index) => (
            <tr key={index} className="mb-4 2md:m-0 flex flex-col items-center w-full 2md:w-full 2md:table-row bg-white border-[1px] border-b-0 2md:border-b-[1px] relative box-border">
              {dataHeader.map((column, index) => (
                <Td key={index}>
                  <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
                  <TBodySkeleton />
                </Td>
              ))}
            </tr>
          ))}
        </>
      ) : (
        <>
          {sortData.map((row, index) => (
            <tr key={index} className="mb-4 2md:m-0 flex flex-col items-center w-full 2md:w-full 2md:table-row bg-white border-[1px] border-b-0 2md:border-b-[1px] relative box-border">
              {Body && <Body dataHeader={dataHeader} row={row} showLocation={showLocation} />}
            </tr>
          ))}
        </>
      )}
    </tbody>
  );
}

TBody.propTypes = {
  dataHeader: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  showLocation: PropTypes.bool,
  loading: PropTypes.bool,
  useRegisterSortById: PropTypes.func.isRequired,
  body: PropTypes.elementType,
};

export default TBody;
