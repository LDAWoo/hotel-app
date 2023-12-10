import { useEffect, useState } from "react";
import THead from "../../../../../components/Table/THead";
import useRegisterDataSettings from "../../../../../hooks/Home/TabProperties/Settings/useRegisterDataSetting";
import useRegisterSortById from "../../../../../hooks/Home/TabProperties/Settings/useRegisterSortById";
import TBody from "./TBody";

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

function Table() {
  const { items } = useRegisterDataSettings();

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

export default Table;
