import { useEffect, useState } from "react";
import useRegisterDataProperties from "../../../../../hooks/Home/TabProperties/Operations/useRegisterDataProperties";
import useRegisterSortById from "../../../../../hooks/Home/TabProperties/Operations/useRegisterSortById";
import TBody from "./TBody";
import THead from "../../../../../components/Table/THead";

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
        <TBody data={filterHeadRow} showLocation={location && location[0]?.status} />
      </table>
    </div>
  );
}

export default TableProperties;
