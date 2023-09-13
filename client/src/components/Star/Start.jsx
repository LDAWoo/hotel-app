import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
import Icon from "../Icon/Icon";
import Title from "../Title/Title";

function Star({ starCount }) {
  return (
    <div className='flex items-center gap-1 text-secondary-50 font-medium'>
      <Icon icon={AiFillStar} size={18} />
      <Title title={starCount} xl fontMedium />
    </div>
  );
}

Star.propTypes = {
  starCount: PropTypes.number,
};

export default Star;
