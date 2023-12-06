import { NavLink, useLocation } from "react-router-dom";
import Title from "../../Title/Title";
import Button from "../../Buttons/Button";
import { IoIosArrowDown } from "react-icons/io";
import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";

const items = [
  {
    menu: [
      {
        title: "Group homepage",
        url: "/",
      },
      {
        title: "Reservations",
        url: "/reservations",
      },
      {
        title: "Reviews",
        url: "/reviews",
      },
      {
        title: "Finance",
        url: "/finance",
      },
      {
        title: "Bulk editing",
        url: "/bulk-editing",
      },
      {
        title: "Group Opportunity Center",
        url: "/group-opportunity-center",
      },
    ],
  },
  {
    menu: [
      {
        title: "Analytics",
        menu: [
          {
            title: "Market insights",
            url: "/market-insights",
          },
          {
            title: "Pace report",
            url: "/pace-report",
          },
          {
            title: "Sales statistics",
            url: "/sales-stats",
          },
          {
            title: "Bookwindow information",
            url: "/book-window-info",
          },
        ],
      },
    ],
  },
];

const Navigation = () => {
  const location = useLocation();

  const pathName = location.pathname;
  const [dropdownOpen, setDropdownOpen] = useState({});

  const handleToggleDropdown = (index) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  console.log(dropdownOpen);

  return (
    <div className="relative bg-transparent">
      <div className="relative w-full p-0 m-auto">
        <ul className="list-none flex w-fit">
          {items.map((item, index) => (
            <div key={index} className="flex w-fit">
              {item?.menu.map((x, index) => (
                <li key={index} className={`${pathName === x.url ? "border-hotel-100 bg-hotel-200" : dropdownOpen[index] ? "border-hotel-25/50 bg-hotel-200" : "border-transparent hover:border-hotel-25/50 hover:bg-hotel-200 duration-200"} border-b-[4px]`}>
                  {x.url ? (
                    <NavLink to={x.url} className="flex flex-col h-full text-center pt-3 pb-3 pr-4 pl-4 text-white">
                      <Title title={x.title} xl />
                    </NavLink>
                  ) : (
                    <>
                      <OutsideClickHandler onOutsideClick={(prev) => setDropdownOpen({ ...prev, [index]: false })}>
                        <div className="relative w-full h-full">
                          <Button onClick={() => handleToggleDropdown(index)} title={x.title} icon={IoIosArrowDown} titlePosition="before" xl className="w-full justify-between flex h-full pt-3 pb-3 pr-0 pl-4 text-white" />
                          {dropdownOpen[index] && (
                            <div className="absolute left-auto right-0 w-[300px] shadow-[0_2px_8px_0_rgba(0,0,0,0.16)] top-[calc(100%_+_5px)] block bg-white z-[1]">
                              {x.menu.map((m, index) =>
                                m.url ? (
                                  <NavLink to={m.url} key={index} className="flex text-primary-100 items-center w-full hover:bg-gray-50 flex-row gap-2 pt-2 pb-2 pr-4 pl-4">
                                    <Title title={m.title} xxl className="" />
                                  </NavLink>
                                ) : (
                                  <Title key={index} title={x.title} fontBold xl className="text-primary-700 pt-2 pb-2 pr-4 pl-4 border-t w-full flex mt-2" />
                                )
                              )}
                            </div>
                          )}
                        </div>
                      </OutsideClickHandler>
                    </>
                  )}
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
