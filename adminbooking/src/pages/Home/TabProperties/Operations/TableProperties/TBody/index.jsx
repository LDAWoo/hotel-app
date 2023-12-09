import { Link } from "react-router-dom";
import Title from "../../../../../../components/Title/Title";
import Tr from "./Tr";
import PropTypes from "prop-types";
import useRegisterSortById from "../../../../../../hooks/Home/TabProperties/Operations/useRegisterSortById";
import { useEffect, useState } from "react";

const fakeData = [
  {
    hotelId: "11033947",
    hotelName: "Hotel",
    location: "124 An Nhơn, Gò Vấp",
    statusOnStaying: true,
    arrivals: 0,
    departures: 0,
    guestMessages: 0,
    stayingMessage: 0,
  },
  {
    hotelId: "11033948",
    hotelName: "The Hotel ",
    location: "113 Quan Trung, Gò Vấp",
    statusOnStaying: false,
    arrivals: 10,
    departures: 4,
    guestMessages: 25,
    stayingMessage: 2,
  },
  {
    hotelId: "11033949",
    hotelName: "Hoà Hưng",
    location: "123 Hòa Hưng, Quận 3",
    statusOnStaying: true,
    arrivals: 1,
    departures: 5,
    guestMessages: 2,
    stayingMessage: 2,
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
  }, [isIncrease, sortBy]);

  return (
    <tbody className="relative table-row-group text-[14px] box-border ">
      {sortData?.map((row, index) => (
        <tr key={index} className="mb-4 2md:m-0 flex flex-col items-center w-full 2md:w-full 2md:table-row bg-white border-[1px] border-b-0 2md:border-b-[1px] relative box-border">
          {data?.map((column) => (
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

              {column?.id === "arrivals" && <Tr title={row?.arrivals} name={column?.name} />}

              {column?.id === "departures" && <Tr title={row?.departures} name={column?.name} />}

              {column?.id === "guestMessages" && <Tr title={row?.guestMessages} name={column?.name} />}

              {column?.id === "stayingMessage" && <Tr title={row?.stayingMessage} name={column?.name} />}
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
