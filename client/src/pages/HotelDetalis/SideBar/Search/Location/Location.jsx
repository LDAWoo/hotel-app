import PropTypes from "prop-types";
import LocationBox from "../../../../../components/Search/Location/LocationBox";
import SearchTitle from "../SearchTitle";

function Location({ title }) {
  return (
    <>
      <SearchTitle title={title} />
      <LocationBox />
    </>
  );
}

Location.propTypes = {
  title: PropTypes.string,
};

export default Location;
