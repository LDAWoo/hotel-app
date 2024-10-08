import PropTypes from "prop-types";

function Body({ data, maxSegments, className }) {
  const splitDescription = (text) => {
    if (!text || typeof text !== "string") {
      return null; 
    }
    const segments = text && text.trim().split(". ") || "";
    const condition = (index, count) =>
      index < segments.length - count && index < maxSegments;
    return (
      segments &&
      segments.map((segment, index, array) => (
        <span
          key={index}
          className={`${
            condition(index, 0) ? "inline-block" : "hidden"
          } ${className}`}
        >
          {index < maxSegments && segment}
          {index === maxSegments - 1 && index !== array.length - 1
            ? "..."
            : condition(index, 1)
            ? "."
            : ""}
        </span>
      ))
    );
  };

  return (
    <p className='flex flex-col gap-2'>{data && splitDescription(data)}</p>
  );
}

Body.propTypes = {
  data: PropTypes.string,
  maxSegments: PropTypes.number,
  className: PropTypes.string,
};

export default Body;
