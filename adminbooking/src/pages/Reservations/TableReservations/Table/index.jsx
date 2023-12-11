import { useEffect, useState } from "react";
import THead from "../../../../components/Table/THead";
import useRegisterDataReservations from "../../../../hooks/Reservations/useRegisterDataReservations";
import useRegisterSortById from "../../../../hooks/Reservations/useRegisterSortById";
import TBody from "../../../../components/Table/TBody";
import Body from "./Body";

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
        <TBody dataHeader={filterHeadRow} data={fakeData} showLocation={location && location[0]?.status} useRegisterSortById={useRegisterSortById} loading={false} body={Body} />
      </table>
    </div>
  );
}

export default Table;
