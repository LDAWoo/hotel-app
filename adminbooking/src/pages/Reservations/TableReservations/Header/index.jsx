import { PiDownloadSimpleThin, PiEyeThin, PiPauseThin } from "react-icons/pi";
import TableDraggable from "../../../../components/TableDraggable";
import useRegisterDataReservations from "../../../../hooks/Reservations/useRegisterDataReservations";
import Item from "../../../../components/TableDraggable/Item";

const initData = [
  {
    id: "download",
    title: "Download",
    icon: PiDownloadSimpleThin,
    menu: [],
  },
  {
    id: "customize_data",
    title: "Customize data",
    menu: [
      { id: "guestName", name: "Guest Name", sortBy: "guestName", status: true },
      { id: "checkIn", name: "Check-in", sortBy: "checkIn", status: true },
      { id: "checkOut", name: "Check-out", sortBy: "checkOut", status: true },
      { id: "status", name: "Status", sortBy: "status", status: true },
      { id: "totalPayment", name: "Total payment", sortBy: "totalPayment", status: true },
      { id: "commission", name: "Commission", sortBy: "commission", status: true },
      { id: "reservationNumber", name: "Reservation number", sortBy: "reservationNumber", status: true },
      { id: "bookedOn", name: "Booked on", sortBy: "bookedOn", status: true },
    ],
    icon: PiPauseThin,
  },
  {
    id: "customize_view",
    title: "Customize view",
    menu: [{ id: "location", name: "Show property location", status: true }],
    icon: PiEyeThin,
  },
];

function Header() {
  const { setItems, currentData, setCurrentData } = useRegisterDataReservations();
  return (
    <div className="flex justify-start 2md:justify-end mb-2">
      <TableDraggable initData={initData} setItems={setItems} currentData={currentData} setCurrentData={setCurrentData} component={Item} />
    </div>
  );
}

export default Header;
