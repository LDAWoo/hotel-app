import { arrow } from "../../assets/Icon";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";

function Select({ className, data }) {
  return (
    <div className="relative w-full 2md:w-[250px]">
      <select className={`${className ? className : "focus:outline-none focus:border-hotel-75 focus:shadow-[0_0_0_1px_rgba(0,13,194,.76)] rounded-[2px] text-[14px] border w-full pl-[7px] pt-[7px] pb-[7px] pr-[32px] appearance-none block border-primary-100"}`}>
        {data &&
          data.map((item, index) => (
            <option key={index} value={item?.value}>
              {item?.title}
            </option>
          ))}
      </select>
      <Icon icon={arrow} classIcon="absolute top-[35%] right-[7px]" />
    </div>
  );
}

Select.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
};

export default Select;
