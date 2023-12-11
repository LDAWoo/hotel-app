import { useEffect, useState } from "react";
import DatePickerCustom from "../../../../components/DatePickerCustom";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../../../../components/Title/Title";
import Button from "../../../../components/Buttons/Button";

import { format } from "date-fns";

function DateReservations() {
  const [open, setOpen] = useState(false);

  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
  const [currentEndDate, setCurrentEndDate] = useState(startDate);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickOutside = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (endDate) {
      setCurrentEndDate(endDate);
    }
  }, [endDate]);

  return (
    <div className="flex flex-col gap-2">
      <Title title="Filter by dates" xl fontMedium />
      <OutsideClickHandler onOutsideClick={handleClickOutside}>
        <div className="relative">
          <Button onClick={handleClick} title={format(startDate, "dd MMM yyyy") + " - " + format(currentEndDate, "dd MMM yyyy")} xl className="p-1 bg-white border-[1px] focus:shadow-[0_0_0_1px_rgba(0,13,194,.76)] border-primary-400 rounded-[2px]" />
          {open && (
            <div className="absolute top-full left-0 z-[300]">
              <DatePickerCustom startDate={startDate} endDate={endDate} onChange={(update) => setDateRange(update)} />
            </div>
          )}
        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default DateReservations;
