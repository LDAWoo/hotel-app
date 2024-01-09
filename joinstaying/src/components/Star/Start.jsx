import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
import Icon from "../Icon/Icon";
import Title from "../Title/Title";

function Star({ className, starCount, size = 15, startCustom }) {
  return (
    <div
      className={`flex items-center gap-1 text-secondary-50 font-medium ${
        className ? className : ""
      }`}
    >
      <Icon icon={AiFillStar} size={size} />
      <Title title={starCount} xxl fontMedium titleCustom={startCustom} />
    </div>
  );
}

Star.propTypes = {
  className: PropTypes.string,
  starCount: PropTypes.number,
  size: PropTypes.number,
  startCustom: PropTypes.string,
};

export default Star;
