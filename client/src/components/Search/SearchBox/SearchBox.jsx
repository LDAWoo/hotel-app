import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";
import SearchItem from "./SearchItem";

function SearchBox({ onClick, className, visibleIcon }) {
  const { t } = useTranslation();
  return (
    <SearchItem
      icon={visibleIcon && AiOutlineSearch}
      size={24}
      className={className}
      title={t("Search.search")}
      button
      onClick={onClick}
    />
  );
}

SearchBox.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  visibleIcon: PropTypes.bool,
};

export default SearchBox;
