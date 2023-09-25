import PropTypes from "prop-types";

const Col = ({ render, className, nowrap = true }) => {
  return (
    <td
      className={`align-top table-cell pt-[6px] pb-[6px] pl-[8px] pr-[8px] text-[12px] border-r border-hotel-100 text-primary-700 ${
        nowrap && "whitespace-nowrap"
      } ${className} 
      `}
    >
      {render && <div>{render}</div>}
    </td>
  );
};

Col.propTypes = {
  className: PropTypes.string,
  render: PropTypes.node,
  nowrap: PropTypes.bool,
};

export default Col;
