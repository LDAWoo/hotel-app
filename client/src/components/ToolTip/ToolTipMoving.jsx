import PropTypes from "prop-types";
import { useRef, useState } from "react";

const ToolTipMoving = ({ children, toolTip }) => {
  const containerRef = useRef();
  const toolTipRef = useRef();
  const [tooltipStyle, setTooltipStyle] = useState({ left: "-100%", top: 0 }); // Initially, hide the tooltip to the left

  const onMouseMove = ({ clientX, clientY }) => {
    if (!toolTipRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const tooltipRect = toolTipRef.current.getBoundingClientRect();

    const left = clientX - containerRect.left - tooltipRect.width - 10 + "px";
    const top = clientY - containerRect.bottom - tooltipRect.height + "px";

    setTooltipStyle({ left, top });
  };

  const onMouseEnter = () => {
    // Show the tooltip when hovering over the element
    setTooltipStyle({ ...tooltipStyle }); // Place it initially to the left
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
