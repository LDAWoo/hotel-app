import PropTypes from "prop-types";
import { AiOutlineSearch } from "react-icons/ai";
import SearchItem from "./SearchItem";

function SearchBox({ onClick, className, visibleIcon, title }) {
  return (
    <SearchItem
      icon={visibleIcon && AiOutlineSearch}
      size={18}
      className={className}
      title={title}
      button
      onClick={onClick}
    />
  );
}

SearchBox.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  visibleIcon: PropTypes.bool,
  title: PropTypes.string,
};

export default SearchBox;
