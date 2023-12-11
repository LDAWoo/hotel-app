import FilterReservations from "./FilterReservations";
import TableReservations from "./TableReservations";

function Reservations() {
  return (
    <div>
      <div className="mt-0 mb-0 ml-auto mr-auto max-w-[var(--max-width)] p-4 relative">
        <FilterReservations />
        <TableReservations />
      </div>
    </div>
  );
}

export default Reservations;
