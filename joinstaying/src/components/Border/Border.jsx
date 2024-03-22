import PropTypes from "prop-types";

const Border = ({ className }) => {
  return <hr className={`w-auto h-[1px] border-primary-50 dark:border-primary-400 ${className && className}`} />;
};

Border.propTypes = {
  className: PropTypes.string,
};

export default Border;
