import DateOf from "./DateOf";
import DateReservations from "./DateReservations";

function FilterReservations() {
  return (
    <div className="flex items-start 2md:items-center flex-col 2md:flex-row gap-4 mb-4">
      <DateOf />
      <DateReservations />
    </div>
  );
}

export default FilterReservations;
