import { useEffect, useState } from "react";
import { PiTrashLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import Button from "../../../../../components/Buttons/Button";
import Title from "../../../../../components/Title/Title";
import useRegisterSortByValue from "../../../../../hooks/Home/PropertiesNotYet/useRegisterSortByValue";

const data = [
  {
    hotelId: "1",
    hotelName: "The Hotel",
    location: "Viet Nam",
    progress: 60,
  },
  {
    hotelId: "2",
    hotelName: "Hotel Phu My Hotel ",
    location: "Viet Nam",
    progress: 90,
  },
  {
    hotelId: "3",
    hotelName: "Hotel Phu My Hotel",
    location: "Viet Nam",
    progress: 55,
  },
  {
    hotelId: "4",
    hotelName: "Hotel Phu My Hotel",
    location: "Viet Nam",
    progress: 15,
  },
  {
    hotelId: "5",
    hotelName: "Hotel Phu My Hotel",
    location: "Viet Nam",
    progress: 31,
  },
];

function TBody() {
  const { sortBy, isIncrease } = useRegisterSortByValue();
  const [sortData, setSortData] = useState([]);

  useEffect(() => {
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
  }, [isIncrease, sortBy]);

  console.log("render");

  return (
    <tbody className="relative table-row-group text-[14px] box-border">
      {sortData.map((row, index) => (
        <tr key={index} className="m-0 flex flex-col w-[calc(100vw_-_51px)] 2md:w-full 2md:table-row border-[1px] relative box-border">
          <td className="pl-3 2md:pl-8 pt-4 pb-4 pr-3 table-cell align-top border-b-[1px] 2md:border-none">
            <div className="flex items-center">
              <div className="flex items-center justify-center text-white rounded-full bg-[#494949] h-8 relative w-8 uppercase box-border">
                <span aria-label={row.hotelName} className="text-white font-bold text-center">
                  {row.hotelName.substring(0, 2)}
                </span>
              </div>

              <Title title={row.hotelName} className="ml-2" fontBold nowrap={false} />
            </div>
          </td>
          <td className="pt-4 pb-4 pr-3 pl-3 border-b-[1px] 2md:border-none">
            <div className="flex items-center">
              <span className="block 2md:hidden mr-8">Location</span>
              {row.location}
            </div>
          </td>
          <td className="pt-4 pb-4 pr-3 pl-3 border-b-[1px] 2md:border-none">
            <div className="w-full">
              <div className="flex items-center">
                <div className="order-1 m-0 flex-wrap justify-between flex items-end flex-row">
                  <div className="text-end ms-2 flex-shrink text-[12px]">{row.progress}%</div>
                </div>
                <div className="relative w-full rounded-[2px] overflow-hidden bg-[#f2f2f2] h-1">
                  <span data-value={row.progress} className={`absolute top-0 left-0 ${row.progress > 70 ? "bg-[#008009]" : row.progress > 50 ? "bg-[#f3bb02]" : row.progress > 30 ? "bg-[#ff8000]" : "bg-[#c00]"} h-1`} style={{ width: `${row.progress}%`, display: "inline-block" }}></span>
                </div>
              </div>
            </div>
          </td>
          <td data-heading="Action" className="pt-4 pb-4 pr-3 pl-3 border-none flex flex-col 2md:flex-row w-full align-top">
            <NavLink className="mr-0 2md:mr-[48px] text-hotel-50 inline cursor-pointer decoration-inherit hover:underline">
              <span>Continue registration</span>
            </NavLink>
            <div className="inline">
              <Button title="Delete" className="text-[#a30000] hover:underline inline" classButton="ml-0 mr-0" classTitle="text-[#a30000]" xl icon={PiTrashLight} size={18} />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TBody;
