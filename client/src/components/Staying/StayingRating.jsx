import PropTypes from "prop-types";

const StayingRating = ({ className, rating }) => {
  return (
    <div
      className={`p-[4px] min-w-[24px] items-center flex justify-center bg-hotel-600 rounded-tr-md rounded-br-md rounded-tl-md text-white font-medium ${className}`}
    >
      {rating && rating.toFixed(1)}
    </div>
  );
};

StayingRating.propTypes = {
  className: PropTypes.string,
  rating: PropTypes.number,
};

export default StayingRating;
