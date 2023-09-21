import PropTypes from "prop-types";
import Icon from "../Icon";
import Title from "../Title";

function Balance({ className, value, background }) {
  return value > 0 ? (
    <div className={`inline-flex items-center gap-1 text-primary-p2 ${background ? "h-[24px] pt-0 pb-0 pl-[4px] pr-[4px] bg-[#EAFAE5] dark:bg-[rgba(#EAFAE5,.25)]" : ""} ${className}`}>
      <Icon name="arrow-top" />
      <Title title={`${value}%`} large fontBold />
    </div>
  ) : (
    <div className={`inline-flex items-center gap-1 text-primary-p3 ${background ? "h-[24px] pt-0 pb-0 pl-[4px] pr-[4px] bg-[#FFE7E4] dark:bg-[rgba(#FFD8D3,.15)]" : ""} ${className}`}>
      <Icon name="arrow-bottom" />
      <Title title={`${String(value).slice(1)}%`} large fontBold />
    </div>
  );
}

Balance.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  background: PropTypes.bool,
};

export default Balance;
