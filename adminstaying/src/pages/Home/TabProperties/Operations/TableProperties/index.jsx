import { useEffect, useState } from "react";
import useRegisterDataProperties from "../../../../../hooks/Home/TabProperties/Operations/useRegisterDataProperties";
import useRegisterSortById from "../../../../../hooks/Home/TabProperties/Operations/useRegisterSortById";
import TBody from "../../../../../components/Table/TBody";
import THead from "../../../../../components/Table/THead";
import Body from "./Body";

const data = [
  {
    id: "hotelId",
    name: "ID",
    sortBy: "hotelId",
    status: true,
  },
  {
    id: "hotelName",
    name: "Property",
    sortBy: "hotelName",
    status: true,
  },
];

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

function TableProperties() {
  const { items } = useRegisterDataProperties();
  const [headRow, setHeadRow] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    setLocation(items[2]?.menu);
    setHeadRow(data.concat(items[1]?.menu));
  }, [items]);

  const filterHeadRow = headRow.filter((row) => row?.status !== false);

  return (
    <div>
      <table className="w-full table border-b-0">
        <THead data={filterHeadRow} useRegister={useRegisterSortById} />
        <TBody dataHeader={filterHeadRow} loading={false} data={fakeData} showLocation={location && location[0]?.status} useRegisterSortById={useRegisterSortById} body={Body} />
      </table>
    </div>
  );
}

export default TableProperties;
