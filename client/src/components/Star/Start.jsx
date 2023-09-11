import { AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";

function Star({ starCount }) {
  return (
    <div className='flex items-center gap-1 text-secondary-50 font-medium'>
      <AiFillStar size={18} />
      <span>{starCount}</span>
    </div>
  );
}

Star.propTypes = {
  starCount: PropTypes.number,
};

export default Star;
