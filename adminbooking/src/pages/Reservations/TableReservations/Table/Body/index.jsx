import { format } from "date-fns";
import { Link } from "react-router-dom";
import Title from "../../../../../components/Title/Title";
import PropTypes from "prop-types";
import Td from "../../../../../components/Table/TBody/Td";

function Body({ dataHeader, row, showLocation }) {
  return (
    <>
      {dataHeader.map((column) => (
        <>
          {column?.id === "propertyId" && (
            <td className="w-full 2md:w-auto pl-3 2md:pl-8 pt-4 pb-4 pr-3 table-cell align-top border-b-[1px] 2md:border-none">
              <Link className="flex items-center justify-start hover:underline">{row.hotelId}</Link>
            </td>
          )}

          {column?.id === "propertyName" && (
            <td className="w-full 2md:w-auto pl-3 2md:pl-3 pt-4 pb-4 pr-3 table-cell align-top border-b-[1px] 2md:border-none">
              <Link className="flex items-center justify-start hover:underline">{row?.hotelName}</Link>
              {showLocation && <Title title={row?.location} large nowrap={false} />}
            </td>
          )}

          {column?.id === "guestName" && (
            <Td>
              <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
              <span className="text-[14px]">{row?.guestName}</span>
            </Td>
          )}

          {column?.id === "checkIn" && (
            <Td>
              <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
              <span className="text-[12px] whitespace-nowrap">{format(new Date(row?.checkIn), "yyyy-MM-dd")}</span>
            </Td>
          )}

          {column?.id === "checkOut" && (
            <Td>
              <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
              <span className="text-[12px] whitespace-nowrap">{format(new Date(row?.checkOut), "yyyy-MM-dd")}</span>
            </Td>
          )}

          {column?.id === "status" && (
            <Td>
              <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
              <span className="text-[14px] whitespace-nowrap">{row?.status ? "On" : "Off"}</span>
            </Td>
          )}

          {column?.id === "totalPayment" && (
            <Td>
              <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
              <span className="text-[14px] whitespace-nowrap">{row?.totalPayment}</span>
            </Td>
          )}

          {column?.id === "commission" && (
            <Td>
              <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
              <span className="text-[14px]">{row?.commission}</span>
            </Td>
          )}

          {column?.id === "reservationNumber" && (
            <Td>
              <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
              <span className="text-[14px]">{row?.reservationNumber}</span>
            </Td>
          )}

          {column?.id === "bookedOn" && (
            <Td>
              <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
              <span className="text-[14px] whitespace-nowrap">{format(new Date(row?.bookedOn), "yyyy-MM-dd")}</span>
            </Td>
          )}
        </>
      ))}
    </>
  );
}

Body.propTypes = {
  dataHeader: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  row: PropTypes.shape({
    hotelId: PropTypes.string,
    hotelName: PropTypes.string,
    location: PropTypes.string,
    guestName: PropTypes.string,
    checkIn: PropTypes.string,
    checkOut: PropTypes.string,
    status: PropTypes.bool,
    totalPayment: PropTypes.number,
    commission: PropTypes.string,
    reservationNumber: PropTypes.string,
    bookedOn: PropTypes.string,
  }).isRequired,
  showLocation: PropTypes.bool,
};

export default Body;
