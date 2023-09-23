import PropTypes from "prop-types";
import GuestBox from "../../../../../components/Search/Guest/GuestBox";
import SearchTitle from "../SearchTitle";

function Guest({ title }) {
  return (
    <>
      <SearchTitle title={title} />
      <GuestBox />
    </>
  );
}
Guest.propTypes = {
  title: PropTypes.string,
};

export default Guest;
