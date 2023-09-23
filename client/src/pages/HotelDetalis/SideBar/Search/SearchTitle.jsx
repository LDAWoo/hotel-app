import PropTypes from "prop-types";
import Title from "../../../../components/Title/Title";
function SearchTitle({ title }) {
  return (
    <div>
      <Title colorTitle='text-primary-600 dark:text-white' xl title={title} />
    </div>
  );
}

SearchTitle.propTypes = {
  title: PropTypes.string,
};

export default SearchTitle;
