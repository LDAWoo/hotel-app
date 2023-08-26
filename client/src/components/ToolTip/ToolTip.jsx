import Tippy from "@tippyjs/react";
import TippyHeadless from "@tippyjs/react/headless";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/AppThemeProvider";

function ToolTip({
  typeToolTip = "Tippy",
  delay,
  content,
  items,
  width,
  onClickOutside,
  isVisible,
  placement,
  className,
  children,
  ...props
}) {
  const { darkMode } = useContext(ThemeContext);

  const ToolTipTippy = () => (
    <Tippy
      delay={delay}
      content={content}
      className={`${
        !className
          ? `duration-300 rounded-md pt-1 pb-1 pl-2 pr-2 text-[15px] font-medium  
          ${
            darkMode === "dark"
              ? "bg-primary-50 text-primary-700"
              : "text-white bg-primary-700"
          }`
          : className
      }`}
      placement={placement}
      {...props}
    >
      {children}
    </Tippy>
  );

  const renderItems = () => <div style={{ maxWidth: width }}>{items}</div>;

  const ToolTipTippyHeadless = () => (
    <TippyHeadless
      onClickOutside={onClickOutside}
      interactive
      visible={isVisible}
      render={renderItems}
      placement='bottom'
    >
      {children}
    </TippyHeadless>
  );

  return (
    <>{typeToolTip === "Tippy" ? <ToolTipTippy /> : <ToolTipTippyHeadless />}</>
  );
}

ToolTip.propTypes = {
  delay: PropTypes.arrayOf(PropTypes.number),
  content: PropTypes.node,
  placement: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  typeToolTip: PropTypes.oneOf(["Tippy", "TippyHeadless"]),
  items: PropTypes.object,
  isVisible: PropTypes.bool,
  onClickOutside: PropTypes.func,
  width: PropTypes.number,
};

export default ToolTip;
