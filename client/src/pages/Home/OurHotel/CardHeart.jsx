import { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IconHeart } from "../../../assets/Icons/icons";

function CardHeart({ isWishlist, onClick }) {
  const [heartColor, setHeartColor] = useState({
    fill: "rgba(0,0,0,0.5)",
    stroke: "#fff",
  });

  useEffect(() => {
    isWishlist
      ? setHeartColor({ fill: "rgb(255,56,92)", stroke: "#fff" }) // Add closing parenthesis after "92"
      : setHeartColor({ fill: "rgba(0,0,0,0.5)", stroke: "#fff" });
  }, [isWishlist]);
  return (
    <div className='cursor-pointer' onClick={onClick}>
      <IconHeart fill={heartColor.fill} stroke={heartColor.stroke} />
    </div>
  );
}
CardHeart.propTypes = {
  isWishlist: PropTypes.bool,
  onClick: PropTypes.func,
};

export default memo(CardHeart);
