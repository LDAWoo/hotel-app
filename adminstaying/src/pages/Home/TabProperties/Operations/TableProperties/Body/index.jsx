import { Link } from "react-router-dom";
import Td from "../../../../../../components/Table/TBody/Td";
import Title from "../../../../../../components/Title/Title";
import PropTypes from "prop-types";
function Body({ dataHeader, row, showLocation }) {
  return (
    <>
      {dataHeader?.map((column) => (
        <>
          {column?.id === "hotelId" && (
            <td className="w-full 2md:w-auto pl-3 2md:pl-8 pt-4 pb-4 pr-3 table-cell align-top border-b-[1px] 2md:border-none">
              <Link className="flex items-center justify-start hover:underline">{row.hotelId}</Link>
            </td>
          )}

          {column?.id === "hotelName" && (
            <td className="w-full 2md:w-auto pl-3 2md:pl-3 pt-4 pb-4 pr-3 table-cell align-top border-b-[1px] 2md:border-none">
              <Link className="flex items-center justify-start hover:underline">{row?.hotelName}</Link>
              {showLocation && <Title title={row?.location} large nowrap={false} />}
            </td>
          )}

          {column?.id === "statusOnStaying" && (
            <td className="w-full 2md:w-auto pt-4 pb-4 pr-3 pl-3 border-b-[1px] 2md:border-none">
              <div className="flex items-center">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center text-[14px]">
                    <span className={`${row?.statusOnStaying ? "bg-[#008009]" : "bg-[#CC0000]"} min-w-[10px] min-h-[10px] rounded-full mr-2`} />
                    <span>{row?.statusOnStaying ? "Open / Bookable" : "Closed / Bookable"}</span>
                  </div>
                </div>
              </div>
            </td>
          )}

          {column?.id === "arrivals" && (
            <Td>
              <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
              <span className="text-[14px]">{row?.arrivals}</span>
            </Td>
          )}

          {column?.id === "departures" && (
            <Td>
              <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
              <span className="text-[14px]">{row?.departures}</span>
            </Td>
          )}

          {column?.id === "guestMessages" && (
            <Td>
              <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
              <span className="text-[14px]">{row?.guestMessages}</span>
            </Td>
          )}

          {column?.id === "stayingMessage" && (
            <Td>
              <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
              <span className="text-[14px]">{row?.stayingMessage}</span>
            </Td>
          )}
        </>
      ))}
    </>
  );
}

Body.propTypes = {
  dataHeader: PropTypes.arrayOf(PropTypes.object),
  row: PropTypes.object,
  showLocation: PropTypes.bool,
};

export default Body;
