import { useEffect, useState } from "react";
import THead from "../../../../components/Table/THead";
import useRegisterDataReservations from "../../../../hooks/Reservations/useRegisterDataReservations";
import useRegisterSortById from "../../../../hooks/Reservations/useRegisterSortById";
import TBody from "./TBody";

const data = [
  {
    id: "propertyId",
    name: "Property ID",
    sortBy: "propertyId",
    status: true,
  },
  {
    id: "propertyName",
    name: "Property Name",
    sortBy: "propertyName",
    status: true,
  },
];

function Table() {
  const { items } = useRegisterDataReservations();
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
