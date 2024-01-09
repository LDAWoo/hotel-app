import PropTypes from "prop-types";
import { useCallback, useRef, useState } from "react";

const ToolTipMoving = ({ children, toolTip }) => {
  const containerRef = useRef();
  const toolTipRef = useRef();
  const [tooltipStyle, setTooltipStyle] = useState({
    left: "0px",
    top: "0px",
  }); // Initially, hide the tooltip to the left

  const onMouseMove = useCallback(({ clientX, clientY }) => {
    if (!toolTipRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const tooltipRect = toolTipRef.current.getBoundingClientRect();

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const distanceToScreen = {
      top: tooltipRect.top,
      right: screenWidth - tooltipRect.right,
      bottom: screenHeight - tooltipRect.bottom,
      left: tooltipRect.left,
    };

    // Tính toán hướng hiển thị phù hợp dựa trên khoảng cách đến biên
    let left = clientX - containerRect.left + "px";
    let top = clientY - containerRect.top + "px";

    if (distanceToScreen.top < 0) {
      console.log("Hướng top");
      const left = clientX - containerRect.left - tooltipRect.width - 10 + "px";
      const bottom = (clientY = containerRect.top - tooltipRect.height + "px");
      setTooltipStyle({ left, bottom });
    } else if (distanceToScreen.bottom < 0) {
      console.log("Hướng bottom");
      top = "";
      setTooltipStyle({ top: "auto", bottom: "0px" });
    } else if (distanceToScreen.left < 0) {
      console.log("Hướng left");
      left = "";
      setTooltipStyle({ left: "0px", right: "auto" });
    } else if (distanceToScreen.right < 0) {
      console.log("Hướng right");
      left = "";
      setTooltipStyle({ left: "auto", right: "0px" });
    } else {
      console.log("Mặc định, hiển thị ở vị trí chuột");
      const left = clientX - containerRect.left - tooltipRect.width - 10 + "px";
      const top = clientY - containerRect.bottom - tooltipRect.height + "px";
      setTooltipStyle({ left, top });
    }
  }, []);

  const onMouseEnter = () => {
    // Show the tooltip when hovering over the element
    setTooltipStyle({ ...tooltipStyle });
  };

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      ref={containerRef}
      className='group inline-block relative w-full'
    >
      {children}
      <span
        ref={toolTipRef}
        className='invisible group-hover:visible absolute w-auto z-[99]'
        style={tooltipStyle}
      >
        {toolTip}
      </span>
    </div>
  );
};

ToolTipMoving.propTypes = {
  children: PropTypes.node,
  toolTip: PropTypes.node,
};

export default ToolTipMoving;
