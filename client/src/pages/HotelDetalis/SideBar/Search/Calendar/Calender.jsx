import PropTypes from "prop-types";
import CalendarBox from "../../../../../components/Search/Calendar/CalendarBox";
import SearchTitle from "../SearchTitle";

function Calender({ title }) {
  return (
    <>
      <SearchTitle title={title} />
      <CalendarBox />
    </>
  );
}

Calender.propTypes = {
  title: PropTypes.string,
};

export default Calender;
