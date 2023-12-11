import { useState } from "react";
import DatePickerCustom from "../../../../components/DatePickerCustom";
import InputStaying from "../../../../components/Staying/Input";
import Title from "../../../../components/Title/Title";
import { format } from "date-fns";

function DateReservations() {
  const [open, setOpen] = useState(false);

  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;

  const handleFocus = () => {
    setOpen(true);
  };

  const handleBlur = () => {
    setOpen(false);
  };

  console.log(startDate);

  return (
    <div className="flex flex-col gap-2">
      <Title title="Filter by dates" xl fontMedium />
      <div className="relative">
        <InputStaying
          onFocus={handleFocus}
          onBlur={handleBlur}
          // value={format(startDate, "yyyy-MM-dd") + " - " + format(endDate, "yyyy-MM-dd")}
        />
        {open && (
          <div className="absolute top-full left-0">
            <DatePickerCustom startDate={startDate} endDate={endDate} onChange={(update) => setDateRange(update)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default DateReservations;
