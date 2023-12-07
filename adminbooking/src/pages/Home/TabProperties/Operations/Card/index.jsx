import Icon from "../../../../../components/Icon/Icon";
import { NavLink } from "react-router-dom";
function Card({ item, maxSize, position }) {
  return (
    <div className="pt-6 pb-6 pr-3 pl-3 w-[calc((100%_-_5px)/1)] sm:w-[calc((100%_-_5px)/3)] md:w-[calc((100%_-_5px)/4)] 2md:w-[calc((100%_-_5px)/5)]">
      <div className={`${position === maxSize ? "" : "border-b sm:border-b-0 border-r-0 sm:border-r"} flex flex-col`}>
        {item?.icon && <Icon icon={item?.icon} size={24} />}
        <span className="mt-2 font-bold text-[18px]">{item?.value}</span>
        <NavLink className="text-hotel-75 hover:underline">{item?.title}</NavLink>
        <span className="mb-4 sm:mb-0" />
      </div>
    </div>
  );
}

export default Card;
