import PropTypes from "prop-types";

function HistogramCol({ height }) {
  return (
    <span
      className={`w-[2%] bg-[#e7e7e7] dark:bg-primary-500 dark:border-primary-500 border rounded-tl-[4px] rounded-tr-[4px]`}
      style={{ height: height }}
    ></span>
  );
}

HistogramCol.propTypes = {
  height: PropTypes.string.isRequired,
};

export default HistogramCol;
