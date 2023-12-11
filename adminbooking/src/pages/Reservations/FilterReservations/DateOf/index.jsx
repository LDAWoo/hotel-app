import Title from "../../../../components/Title/Title";
import Select from "../../../../components/Select";

const items = [
  { title: "Reservation", value: "reservation" },
  { title: "Check-in", value: "checkIn" },
  { title: "Check-out", value: "checkOut" },
];

function DateOf() {
  return (
    <div className="flex flex-col gap-2">
      <Title title="Date of" xl fontMedium />
      <Select data={items} />
    </div>
  );
}

export default DateOf;
