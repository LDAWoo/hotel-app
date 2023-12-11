import { useEffect, useState } from "react";
import useRegisterSortById from "../../../../../hooks/Reservations/useRegisterSortById";
import { Link } from "react-router-dom";
import Td from "./Td";
import { format } from "date-fns";
import Title from "../../../../../components/Title/Title";
import PropTypes from "prop-types";

const fakeData = [
  {
    hotelId: "11033947",
    hotelName: "Hotel",
    location: "124 An Nhơn, Gò Vấp",
    guestName: "Vu Lee",
    checkIn: "Mon Dec 11 2023 09:24:54 GMT+0700 (Giờ Đông Dương)",
    checkOut: "Tus Dec 12 2023 09:24:54 GMT+0700 (Giờ Đông Dương)",
    status: true,
    totalPayment: 1200000,
    commission: "Staying",
    reservationNumber: "200",
    bookedOn: "Sun Dec 10 2023 09:24:54 GMT+0700 (Giờ Đông Dương)",
  },
  {
    hotelId: "11033948",
    hotelName: "Hòa Hưng",
    location: "512 Nguyễn Hữu Cảnh",
    guestName: "Duy Nam",
    checkIn: "Sun Dec 10 2023 09:24:54 GMT+0700 (Giờ Đông Dương)",
    checkOut: "Mon Dec 11 2023 09:24:54 GMT+0700 (Giờ Đông Dương)",
    status: false,
    totalPayment: 2200000,
    commission: "Staying",
    reservationNumber: "100",
    bookedOn: "Mon Dec 11 2023 09:24:54 GMT+0700 (Giờ Đông Dương)",
  },
];

function TBody({ data, showLocation }) {
  const { sortBy, isIncrease } = useRegisterSortById();
  const [sortData, setSortData] = useState([]);

  useEffect(() => {
    const sortedData = [...fakeData].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return isIncrease ? -1 : 1;
      }

      if (a[sortBy] > b[sortBy]) {
        return isIncrease ? 1 : -1;
      }

      return 0;
    });

    setSortData(sortedData);
  }, [sortBy, isIncrease]);

  return (
    <tbody className="relative table-row-group text-[14px] box-border ">
      {sortData.map((row, index) => (
        <tr key={index} className="mb-4 2md:m-0 flex flex-col items-center w-full 2md:w-full 2md:table-row bg-white border-[1px] border-b-0 2md:border-b-[1px] relative box-border">
          {data.map((column) => (
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
        </tr>
      ))}
    </tbody>
  );
}

TBody.propTypes = {
  data: PropTypes.array,
  showLocation: PropTypes.bool,
};

export default TBody;
