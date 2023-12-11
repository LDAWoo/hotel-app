import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerCustom({ startDate, endDate, onChange }) {
  return <DatePicker selectsRange={true} startDate={startDate} endDate={endDate} onChange={onChange} inline />;
}

export default DatePickerCustom;
