import { format } from "date-fns";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Button from "../../../../../../../components/Buttons/Button";
import DatePickerCustom from "../../../../../../../components/DatePickerCustom";
import Title from "../../../../../../../components/Title/Title";
import PropTypes from "prop-types";

function FilterDate({ title, date, maxDate, setDate, classDate }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickOutside = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-2">
      {title && <Title title={title} xl />}
      <div className="flex flex-row gap-4">
        <OutsideClickHandler onOutsideClick={handleClickOutside}>
          <div className="relative">
            {date && <Button onClick={handleClick} title={format(date, "yyyy-MM-dd")} xl className="pt-[5px] pb-[6px] pr-1 pl-1 bg-white border-[1px] focus:shadow-[0_0_0_1px_rgba(0,13,194,.76)] border-primary-400 rounded-[2px]" />}
            {open && (
              <div className={`absolute z-[300] ${classDate ? classDate : "top-full 2md:right-0"}`}>
                <DatePickerCustom maxDate={maxDate} selected={date} onChange={(date) => setDate(date)} />
              </div>
            )}
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
}

FilterDate.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  setDate: PropTypes.func,
  classDate: PropTypes.string,
};

export default FilterDate;
