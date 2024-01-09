import OutsideClickHandler from "react-outside-click-handler";
import Title from "../../../../components/Title/Title";
import Button from "../../../../components/Buttons/Button";
import DatePickerCustom from "../../../../components/DatePickerCustom";
import { format } from "date-fns";
import { useEffect, useState } from "react";

function DateReviews() {
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
      <div className="flex">
        <OutsideClickHandler onOutsideClick={handleClickOutside}>
          <div className="relative">
            <Button onClick={handleClick} title={format(startDate, "dd MMM yyyy") + " - " + format(currentEndDate, "dd MMM yyyy")} xl className="pt-[5px] pb-[6px] pr-1 pl-1 bg-white border-[1px] focus:shadow-[0_0_0_1px_rgba(0,13,194,.76)] border-primary-400 rounded-[2px]" />
            {open && (
              <div className="absolute top-full left-0 z-[300]">
                <DatePickerCustom minDate={new Date()} selectsRange={true} startDate={startDate} endDate={endDate} onChange={(update) => setDateRange(update)} />
              </div>
            )}
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
}

export default DateReviews;
