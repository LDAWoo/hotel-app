import { useEffect, useState } from "react";
import useRegisterSortById from "../../../../../../hooks/Home/TabProperties/Settings/useRegisterSortById";
import { Link } from "react-router-dom";
import Title from "../../../../../../components/Title/Title";
import Td from "./Td";
import PropTypes from "prop-types";

const fakeData = [
  {
    hotelId: "11033947",
    hotelName: "Hotel",
    location: "124 An Nhơn, Gò Vấp",
    genius: false,
    preferred: true,
    minimumStay: 7,
    countryRates: "",
    mobileRates: "",
    propertyScore: 34,
  },
  {
    hotelId: "11033948",
    hotelName: "Hoà Hưng",
    location: "512 Nguyễn Hữu Cảnh, Quận 1",
    genius: true,
    preferred: false,
    minimumStay: 5,
    countryRates: "",
    mobileRates: "",
    propertyScore: 80,
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

              {column?.id === "genius" && (
                <Td>
                  <div className="w-[50%] flex 2md:hidden">
                    <span className="flex w-full ">
                      <span className="bg-hotel-200 text-white text-[10px] font-medium p-[2px] rounded-[2px]">{column?.name}</span>
                    </span>
                  </div>
                  <span className="text-[14px] text-primary-100">{row?.genius ? "Eligible" : "Not eligible"}</span>
                </Td>
              )}

              {column?.id === "preferred" && (
                <Td>
                  <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
                  <span className="text-[14px] text-primary-100">{row?.preferred ? "Eligible" : "Not eligible"}</span>
                </Td>
              )}

              {column?.id === "minimumStay" && (
                <Td>
                  <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
                  <Link className="text-hotel-75 hover:underline">{row?.minimumStay} night</Link>
                </Td>
              )}

              {column?.id === "countryRates" && (
                <Td>
                  <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
                  <Link className="text-hotel-75 hover:underline">Add now</Link>
                </Td>
              )}

              {column?.id === "mobileRates" && (
                <Td>
                  <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
                  <Link className="text-hotel-75 hover:underline">Add now</Link>
                </Td>
              )}

              {column?.id === "propertyScore" && (
                <Td>
                  <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
                  <div className="flex flex-col w-[50%] 2md:w-full">
                    <div className="flex items-center">
                      <div className="order-1 m-0 flex-wrap justify-between flex items-end flex-row">
                        <div className="text-end ms-2 flex-shrink text-[12px]">{row?.propertyScore}%</div>
                      </div>
                      <div className="relative w-[50%] 2md:w-full rounded-[2px] overflow-hidden bg-[#f2f2f2] h-1">
                        <span data-value={row?.propertyScore} className={`absolute top-0 left-0 ${row?.propertyScore > 70 ? "bg-[#008009]" : row?.propertyScore > 50 ? "bg-[#f3bb02]" : row?.propertyScore > 30 ? "bg-[#ff8000]" : "bg-[#c00]"} h-1`} style={{ width: `${row?.propertyScore}%`, display: "inline-block" }}></span>
                      </div>
                    </div>
                    <Link className="text-hotel-75 hover:underline">Improve</Link>
                  </div>
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
  data: PropTypes.array.isRequired,
  showLocation: PropTypes.bool,
};

export default TBody;
