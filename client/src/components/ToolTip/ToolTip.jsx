import Tippy from "@tippyjs/react";

function ToolTip({ delay, content, placement, className, children, ...props }) {
  return (
    <Tippy
      delay={delay}
      content={content}
      className={`${
        !className
          ? "duration-300 rounded-md pt-1 pb-1 pl-2 pr-2 text-[14px] text-white bg-primary-700 dark:bg-primary-50 dark:text-primary-700"
          : className
      }`}
      placement={placement}
      {...props}
    >
      {children}
    </Tippy>
  );
}

export default ToolTip;
