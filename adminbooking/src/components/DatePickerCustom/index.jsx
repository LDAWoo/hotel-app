import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerCustom.scss";

function DatePickerCustom({ startDate, endDate, onChange, ...props }) {
  return <DatePicker {...props} selectsRange={true} startDate={startDate} endDate={endDate} onChange={onChange} inline />;
}

DatePickerCustom.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};

export default DatePickerCustom;
