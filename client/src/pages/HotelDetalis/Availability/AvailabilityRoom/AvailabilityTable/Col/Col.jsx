import PropTypes from "prop-types";

const Col = ({ className, render, title, arrow, nowrap = true }) => {
  return (
    <th
      className={`relative align-top table-cell pt-[6px] pb-[6px] pl-[8px] pr-[8px] text-[12px] border-r border-hotel-100 dark:border-primary-600 text-white ${
        nowrap && "whitespace-nowrap"
      } ${className} 
      `}
    >
      {arrow && (
        <div className='absolute -bottom-[9px] h-[0px] left-0 right-0'>
          <div className='relative flex items-center justify-center w-full'>
            <div
              className={`${
                arrow &&
                "before:absolute before:w-0 before:h-0 before:border-t-[10px] before:border-l-[10px] before:border-l-transparent before:border-r-[10px] before:border-r-transparent before:-bottom-[0px]s before:-translate-x-[9px] before:-translate-y-[10px]  before:border-[#003580]"
              }`}
            />
          </div>
        </div>
      )}
      {title && <div>{title}</div>}
      {render && <div>{render}</div>}
    </th>
  );
};

Col.propTypes = {
  className: PropTypes.string,
  render: PropTypes.node,
  title: PropTypes.string,
  arrow: PropTypes.bool,
  nowrap: PropTypes.bool,
};

export default Col;
