import { useEffect, useState } from "react";
import TBody from "../../../../../components/Table/TBody";
import THead from "../../../../../components/Table/THead";
import useRegisterDataSettings from "../../../../../hooks/Home/TabProperties/Settings/useRegisterDataSetting";
import useRegisterSortById from "../../../../../hooks/Home/TabProperties/Settings/useRegisterSortById";
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
        <TBody dataHeader={filterHeadRow} data={fakeData} showLocation={location && location[0]?.status} useRegisterSortById={useRegisterSortById} body={Body} />
      </table>
    </div>
  );
}

export default Table;
