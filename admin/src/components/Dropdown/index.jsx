import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "../Icon";
import { useState } from "react";

function Dropdown({ item, onClose, setValue, visibleSidebar }) {
  const [visible, setVisible] = useState(false);

  const { pathname } = useLocation();
  console.log();
  const handleClick = () => {
    setVisible(!visible);
    setValue(true);
  };

  const Head = () => {
    return (
      <button
        className={`  
      ${pathname.startsWith("/a") ? "bg-secondary-n3 text-secondary-n7 dark:bg-secondary-n6 dark:text-secondary-n1" : "text-secondary-n4 hover:text-secondary-n5 dark:hover:text-secondary-n2"}
      flex items-center w-full whitespace-nowrap text-[0] font-bold xl:text-[15px] p-[12px] xl:gap-2 rounded-xl transition-shadow 
      ${visibleSidebar ? "text-[15px] gap-3" : ""}
      `}
        onClick={() => handleClick()}
      >
        <Icon name={item.icon} size="24" />
        {item.title}
        <div className={`${visible ? "rotate-180" : ""} ml-auto xl:inline-block ${visibleSidebar ? "inline-block ml-auto" : "hidden"}`}>
          <Icon name="arrow-down" size="24" />
        </div>
      </button>
    );
  };

  return (
    <div className={`${visible ? "" : ""}`}>
      {item.add ? (
        <div className={`relative`}>
          <Head />
          <Link
            to="/products/add"
            className={`absolute top-[50%] xl:flex justify-center items-center right-[48px] w-[24px] h-[24px] rounded-[50%] border-[2px] -translate-y-[50%] text-[0]  ${pathname.startsWith("/a") ? "border-shades-s1 text-shades-s1" : "hover:border-secondary-n7 dark:hover:border-shades-s1 dark:text-shades-s1"} 
          ${visibleSidebar ? "flex" : "hidden"}
          `}
          >
            <Icon name="plus" size="10" />
          </Link>
        </div>
      ) : (
        <Head />
      )}

      <div className={`relative duration-500 ml-[36px] before:content-[''] before:absolute before:top-0 before:-left-[13px] before:bottom-[24px] before:w-[2px] before:rounded-[2px] before:bg-secondary-n3 dark:before:bg-secondary-n6 ${visible ? "xl:block" : "hidden"} ${visibleSidebar ? "block" : "hidden"}`}>
        {item.dropdown.map((x, index) => (
          <NavLink
            key={index}
            to={x.url}
            className={`${pathname === "/" ? "" : ""} relative flex items-center h-[48px] pl-[8px] text-secondary-n4 hover:text-secondary-n5 pt-0 pr-0 pb-0 before:absolute before:top-[12px] before:-left-[13px] before:w-[12px] before:border-t-[2px] before:mt-3 dark:before:border-secondary-n6 dark:text-secondary-n4 font-bold dark:hover:text-secondary-n3`}
            onClick={onClose}
          >
            {x.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
