import Tippy from "@tippyjs/react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/AppThemeProvider";

function ToolTip({ delay, content, placement, className, children, ...props }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Tippy
      delay={delay}
      content={content}
      className={`${
        !className
          ? ` duration-300 rounded-md pt-1 pb-1 pl-2 pr-2 text-[15px] font-medium  
          ${
            darkMode === "dark"
              ? "bg-primary-50 text-primary-700 "
              : "text-white bg-primary-700"
          }
          `
          : className
      }`}
      placement={placement}
      {...props}
    >
      {children}
    </Tippy>
  );
}

ToolTip.propTypes = {
  delay: PropTypes.arrayOf(PropTypes.number),
  content: PropTypes.node.isRequired,
  placement: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ToolTip;
