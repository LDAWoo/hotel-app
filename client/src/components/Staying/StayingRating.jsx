import PropTypes from "prop-types";

const StayingRating = ({ className, rating }) => {
  return (
    <div
      className={`p-[4px] bg-hotel-600 rounded-tr-md rounded-br-md rounded-tl-md text-white font-medium ${className}`}
    >
      {rating}
    </div>
  );
};

StayingRating.propTypes = {
  className: PropTypes.string,
  rating: PropTypes.number,
};

export default StayingRating;
